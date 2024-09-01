import { cn } from "@/lib/utils";

import HHero from "@/public/harmonic-homepage.svg";
import Image from "next/image";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={cn("dark:bg-[#1D2224] h-screen w-screen", className)}>
      <div className="logoContainer mx-auto w-1/2 bg-gray-500 h-screen relative p-8">

          <h1 className="text-white font-gambarino text-[800px] absolute bg-orange-500 leading-[40rem]">
            H
          </h1>
          <h1 className="text-white font-gambarino  text-[800px] absolute leading-[40rem]">
            H
          </h1>
      </div>
    </section>
  );
};

export default Hero;
