"use client";

import { usePlayerStore } from "@/store/usePlayerStore";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";

const PlayerBar = () => {
  const { isPlaying, togglePlay, currentSong } = usePlayerStore();

  return (
    <div className="fixed bottom-0 left-0 right-0 h-14 bg-[#212124] border-t border-[#333] z-50 flex items-center justify-between px-4 text-white">
      {/* 歌曲信息 */}
      <div className="flex items-center gap-3 w-1/4">
        {currentSong ? (
          <>
            <div className="relative w-10 h-10 bg-gray-700 rounded overflow-hidden">
               {/* 这里后续换成真实的图片组件 */}
               <div className="w-full h-full bg-gray-600" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm truncate max-w-[150px]">{currentSong.name}</span>
              <span className="text-xs text-gray-400 truncate max-w-[150px]">
                {currentSong.ar.map(a => a.name).join('/')}
              </span>
            </div>
          </>
        ) : (
          <div className="text-xs text-gray-500">暂无播放</div>
        )}
      </div>

      {/* 控制器 */}
      <div className="flex flex-col items-center gap-1 w-1/2">
        <div className="flex items-center gap-6">
          <button className="text-gray-300 hover:text-white">
            <SkipBack className="w-5 h-5" />
          </button>
          <button 
            onClick={togglePlay}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-black fill-black" />
            ) : (
              <Play className="w-4 h-4 text-black fill-black ml-0.5" />
            )}
          </button>
          <button className="text-gray-300 hover:text-white">
            <SkipForward className="w-5 h-5" />
          </button>
        </div>
        {/* 进度条占位 */}
        <div className="w-full max-w-md h-1 bg-gray-600 rounded-full overflow-hidden">
            <div className="w-0 h-full bg-red-600"></div>
        </div>
      </div>

      {/* 音量等其他控制 */}
      <div className="flex items-center justify-end gap-4 w-1/4">
        <Volume2 className="w-5 h-5 text-gray-300" />
        <div className="w-24">
             {/* Slider 组件后续集成 */}
             <div className="h-1 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PlayerBar;
