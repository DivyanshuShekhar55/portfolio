import ProfileCard from './hero/ProfileCard';
import HeroContent from './hero/HeroContent';
import Navigation from './hero/Navigation';

export default function HeroSection() {
  return (
    <div id="home" className="relative overflow-hidden px-4 pb-16 pt-28 md:pb-20 md:pt-32">

      <Navigation />

      <div className="mx-auto mt-14 grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative order-2 lg:order-1">
          <ProfileCard />
        </div>

        <div className="order-1 pt-2 lg:order-2 lg:pt-12">
          <HeroContent />
        </div>
      </div>
    </div>
  );
}