import HeroSection from "@/components/ui/home/heroSection/HeroSection";
import Specialist from "@/components/ui/home/specialist/Specialist";
import TopRatedDoctors from "@/components/ui/home/topRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/ui/home/whyUs/WhyUs";




export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <Specialist></Specialist>
      <TopRatedDoctors></TopRatedDoctors>
      <WhyUs></WhyUs>
    </>
  );
}
