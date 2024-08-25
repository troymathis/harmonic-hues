import { cn } from "@/lib/utils";

import HHero from "@/public/harmonic-homepage.svg";
import Image from "next/image";



interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={cn("dark:bg-[#1D2224] h-screen w-screen", className)}>
      <div className="logo m-auto p-[10%] w-1/2">
        <Image src={HHero} alt="Hero Image"/>
        <h1>Hi how are ya
        </h1>
      </div>
    </section>
  );
};

export default Hero;
