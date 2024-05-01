import HeroSection from "@/components/ui/home/heroSection/HeroSection";
import Specialist from "@/components/ui/home/specialist/Specialist";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <Specialist></Specialist>
    </>
  );
}
