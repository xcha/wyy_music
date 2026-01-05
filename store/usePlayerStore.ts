import { create } from 'zustand';
import { Song } from '@/types/music';

export type PlayMode = 'sequence' | 'random' | 'single';

interface PlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  playlist: Song[];
  volume: number;
  playMode: PlayMode;
  setIsPlaying: (isPlaying: boolean) => void;
  
  // Actions
  playSong: (song: Song) => void;
  togglePlay: () => void;
  setPlaylist: (list: Song[]) => void;
  setVolume: (vol: number) => void;
  playNext: () => void;
  playPrev: () => void;
  togglePlayMode: () => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentSong: null,
  isPlaying: false,
  playlist: [],
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  volume: 50,
  playMode: 'sequence',

  playSong: (song) => set({ currentSong: song, isPlaying: true }),
  
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  
  setPlaylist: (list) => set({ playlist: list }),
  
  setVolume: (vol) => set({ volume: vol }),

  togglePlayMode: () => {
    const modes: PlayMode[] = ['sequence', 'random', 'single'];
    const current = get().playMode;
    const next = modes[(modes.indexOf(current) + 1) % modes.length];
    set({ playMode: next });
  },

  playNext: () => {
    const { playlist, currentSong, playMode } = get();
    if (playlist.length === 0) return;
    if (!currentSong) {
      set({ currentSong: playlist[0], isPlaying: true });
      return;
    }
    
    let nextIndex;
    if (playMode === 'random') {
      nextIndex = Math.floor(Math.random() * playlist.length);
      // Avoid playing same song if playlist length > 1
      if (playlist.length > 1 && playlist[nextIndex].id === currentSong.id) {
        nextIndex = (nextIndex + 1) % playlist.length;
      }
    } else {
      const index = playlist.findIndex((s) => s.id === currentSong.id);
      nextIndex = (index + 1) % playlist.length;
    }
    
    set({ currentSong: playlist[nextIndex], isPlaying: true });
  },

  playPrev: () => {
    const { playlist, currentSong, playMode } = get();
    if (playlist.length === 0) return;
    if (!currentSong) {
      set({ currentSong: playlist[0], isPlaying: true });
      return;
    }

    let prevIndex;
    if (playMode === 'random') {
       prevIndex = Math.floor(Math.random() * playlist.length);
       if (playlist.length > 1 && playlist[prevIndex].id === currentSong.id) {
          prevIndex = (prevIndex + 1) % playlist.length;
       }
    } else {
      const index = playlist.findIndex((s) => s.id === currentSong.id);
      prevIndex = (index - 1 + playlist.length) % playlist.length;
    }

    set({ currentSong: playlist[prevIndex], isPlaying: true });
  },
}));
