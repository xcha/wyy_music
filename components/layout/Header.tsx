import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#242424] text-white flex items-center justify-between px-6 border-b border-[#000]">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-xs">
            网
          </div>
          网易云音乐
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white hover:bg-black/20 px-4 py-2 rounded-md transition">发现音乐</Link>
          <Link href="/my" className="hover:text-white hover:bg-black/20 px-4 py-2 rounded-md transition">我的音乐</Link>
          <Link href="/friend" className="hover:text-white hover:bg-black/20 px-4 py-2 rounded-md transition">关注</Link>
          <Link href="/store" className="hover:text-white hover:bg-black/20 px-4 py-2 rounded-md transition">商城</Link>
          <Link href="/musician" className="hover:text-white hover:bg-black/20 px-4 py-2 rounded-md transition">音乐人</Link>
          <Link href="/download" className="hover:text-white hover:bg-black/20 px-4 py-2 rounded-md transition">下载客户端</Link>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="音乐/视频/电台/用户" 
            className="pl-8 w-64 h-9 bg-white text-black border-none rounded-full text-xs focus-visible:ring-0" 
          />
        </div>
        <button className="text-xs text-gray-300 hover:text-white">登录</button>
      </div>
    </header>
  );
};

export default Header;
