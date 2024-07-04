import AnotherHero from "@/components/UI/HomePage/HeroSection/AnotherHero";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import Partner from "@/components/UI/HomePage/Partner/Partner";

import TryBestSection from "@/components/UI/HomePage/TryBestSection/TryBestSection";
import Work from "@/components/UI/HomePage/Work/Work";
import HomeSchooling from "@/components/UI/HomeSchooling/HomeSchooling";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HomeSchooling />
      {/* <StudentTestimonial /> */}
      <Partner />
      <AnotherHero />
      <Work />
      <TryBestSection />
    </>
  );
};

export default HomePage;
