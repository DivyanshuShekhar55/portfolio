//import me from "../../assests/me.jpg"
import me from "../../assests/me.png"

export default function ProfileCard() {
  return (
    <div className="relative mx-auto max-w-md overflow-hidden rounded-[2.5rem] border border-slate-800 bg-[#071026] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.6)] lg:mx-0 lg:translate-y-4">
      <div className="absolute left-6 top-6 h-24 w-24 rounded-full bg-[#0b1220]/30 blur-2xl" />
      <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-[#0b1220]/30 blur-3xl" />

      <div className="relative flex flex-col items-center">
        <img 
          src={me}
          alt="Profile" 
          className="mb-5 h-56 w-44 rounded-[2rem] object-cover object-center shadow-[0_20px_50px_rgba(15,23,42,0.18)]"
        />
        <div className="mb-4 inline-flex rounded-full bg-[#08121f] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
          Student @ IIIT BBSR
        </div>
        <h2 className="text-center text-3xl font-bold text-white">Divyanshu Shekhar</h2>
        <p className="mt-2 text-center text-sm font-medium uppercase tracking-[0.24em] text-white/70">Web dev | backend dev | mobile dev</p>
        <p className="mt-4 max-w-sm text-center leading-relaxed text-white/70">
          I like building products that feel light on the surface and thoughtful underneath. If the idea is good, let’s make it real.
        </p>
      </div>
      <div className="absolute -bottom-4 right-6 h-9 w-9 rounded-full bg-[#f47c57]" />
      <div className="absolute right-16 top-10 h-7 w-7 rounded-full bg-[#ffd66b]" />
      <div className="absolute left-5 top-1/2 h-8 w-8 rounded-full border-4 border-dashed border-[#f47c57]" />
    </div>
  );
}