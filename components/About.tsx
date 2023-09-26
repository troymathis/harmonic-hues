"use client"

import { FC } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Cinzel_Decorative } from "next/font/google";

interface AboutProps {}

const cinzel = Cinzel_Decorative({ weight: "400", subsets: ["latin"] });

const About: FC<AboutProps> = ({}) => {
  return (
    <div className="">
      <div
      id="logo"
      data-scroll-section
        className={cn(
          cinzel.className,
          "hidden md:fixed "
        )}
      >
        <Link href="/">
          <h1>H a r m o n i c&nbsp;&nbsp;&nbsp;H u e s</h1>
        </Link>
      </div>
    </div>
  );
};

export default About;
