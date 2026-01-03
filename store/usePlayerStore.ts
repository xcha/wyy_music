import { create } from 'zustand';
import { Song } from '@/types/music';

interface PlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  playlist: Song[];
  volume: number;
  
  // Actions
  playSong: (song: Song) => void;
  togglePlay: () => void;
  setPlaylist: (list: Song[]) => void;
  setVolume: (vol: number) => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
  currentSong: null,
  isPlaying: false,
  playlist: [],
  volume: 50,

  playSong: (song) => set({ currentSong: song, isPlaying: true }),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setPlaylist: (list) => set({ playlist: list }),
  setVolume: (vol) => set({ volume: vol }),
}));
