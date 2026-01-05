import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-2xl">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        {/* Header Section */}
        <div className="bg-red-600 h-32 relative">
          <div className="absolute -bottom-12 left-8 p-1 bg-white dark:bg-zinc-900 rounded-full shadow-lg">
            <Image 
              alt="恋次是柠檬精" 
              width={96}
              height={96}
              className="w-24 h-24 rounded-full object-cover" 
              src="https://p4.music.126.net/lCpMd2WD_7vE4GcM_bYF7A==/109951167154376183.jpg"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="pt-16 pb-8 px-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                恋次是柠檬精
                <span className="px-2 py-0.5 bg-red-100 text-red-600 text-[10px] rounded-full font-medium">Author</span>
              </h1>
              <p className="text-zinc-500 text-sm">前端开发工程师 / 音乐爱好者</p>
              <text className="text-xs text-zinc-500">网易云音乐同名</text>
            </div>
            <Link 
              href="https://github.com/xcha" 
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full text-sm hover:opacity-90 transition-opacity font-medium"
            >
              <Github className="w-4 h-4" />
              Follow
            </Link>
          </div>

          <div className="space-y-6 mt-8">
            <section>
              <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">关于项目</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                这是一个基于 <span className="text-zinc-900 dark:text-zinc-100 font-medium">Next.js 16</span> 和 <span className="text-zinc-900 dark:text-zinc-100 font-medium">Tailwind CSS</span> 构建的网易云音乐复刻版。旨在提供更丝滑的交互体验和现代化的 UI 设计。
              </p>
            </section>

            <section className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-100 dark:border-zinc-800">
              <Link 
                href="https://github.com/xcha" 
                target="_blank"
                className="flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-zinc-100 dark:border-zinc-800">
                    <Github className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-red-600 transition-colors">项目源码</h3>
                    <p className="text-xs text-zinc-500">该项目代码已经开源，欢迎 Star 和 Fork</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-red-600 transition-colors" />
              </Link>
            </section>

            <div className="pt-8 flex items-center justify-center gap-2 text-zinc-400 text-xs">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
              <span>by 恋次是柠檬精</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}