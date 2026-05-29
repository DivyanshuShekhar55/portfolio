import { socialLinks } from '../data/socialLinks';

export default function SocialSection() {
  return (
    <section id="socials" className="relative py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-10 rounded-[2.5rem] border border-white/10 bg-transparent p-8 md:flex-row md:p-12">
          <h2 className="text-center text-4xl font-bold leading-tight tracking-tight text-white md:text-left md:text-7xl">
            You can<br />find me<br />here:
          </h2>
          <div className="grid grid-cols-2 items-center gap-4 md:flex md:gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target='_blank'
                  className="group relative flex h-16 w-16 items-center justify-center rounded-[1.5rem] border border-white/10 bg-[#03020b] text-white shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#f47c57] md:h-24 md:w-24"
                >
                  <Icon size={24} className="text-white md:w-9 md:h-9" />
                  <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#ffd66b] opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}