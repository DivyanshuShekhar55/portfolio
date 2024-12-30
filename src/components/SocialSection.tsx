import { socialLinks } from '../data/socialLinks';

export default function SocialSection() {
  return (
    <section id="socials" className="bg-[#00ff9d] py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight text-center md:text-left">
            You can<br />find me<br />here:
          </h2>
          <div className="grid grid-cols-2 md:flex items-center gap-4 md:gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target='_blank'
                  className={`${social.color} ${social.hoverColor} w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-110 group relative`}
                >
                  <Icon size={24} className="text-white md:w-9 md:h-9" />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}