export default function Navbar() {
  return (
    <nav className="absolute left-0 right-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0f1724] text-sm font-bold text-white">
            DS
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-white/70">Divyanshu Shekhar</div>
          </div>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          <a href="#projects" className="px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white">Projects</a>
          <a href="#achievements" className="px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white">Wins</a>
          <a href="#socials" className="px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white">Connect</a>
        </div>
      </div>
    </nav>
  );
}