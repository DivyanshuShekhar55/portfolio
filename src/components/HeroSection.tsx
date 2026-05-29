import HeroContent from './hero/HeroContent';

export default function HeroSection() {
  return (
    <section id="home" className="relative px-4 pb-16 pt-28 md:pb-20 md:pt-32">
      <div className="mx-auto flex max-w-4xl justify-center">
        <HeroContent />
      </div>
    </section>
  );
}