"use client";

import { Heading1 } from "lucide-react";
import { FC, useEffect } from "react";
import { Cinzel_Decorative } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Variants, motion, useAnimation, useInView, useScroll } from "framer-motion";
import Image from "next/image";

interface LogoProps {}

const playfair = Cinzel_Decorative({ weight: "400", subsets: ["latin"] });
const Logo: FC<LogoProps> = ({}) => {
  return (

      <div
      id="logo"
      data-scroll-section
        className={cn(
          "z-20 relative flex justify-center text-3xl top-1/2",
          
          playfair.className
        )}
      >
        <Link href="/" data-scroll data-scroll-speed='0.1' data-scroll-sticky>
          <h1>H a r m o n i c&nbsp;&nbsp;&nbsp;H u e s</h1>
        </Link>
      </div>
  );
};

export default Logo;
