"use client";

import { cn } from "@/lib/utils";
import LocomotiveScroll from "locomotive-scroll";
import { Lancelot } from "next/font/google";
import Link from "next/link";
import { FC, useEffect } from "react";
import MobileSidebar from "./MobileSidebard";
import ThemeToggle from "./ui/themetoggle";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

interface NavbarProps {
  className?: string;
}

const dmSerifDisplay = Lancelot({ weight: "400", subsets: ["latin"] });
const navBarEls = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Portfolio",
    href: "#portfolio",
  },
  {
    label: "Photoshoot",
    href: "#photoshoot",
  },
  {
    label: "Photo Booth",
    href: "#photobooth",
  },
  {
    label: "Contact",
    href: "#contact",
  },
  {
    label: "Store",
    href: "#store",
  },
];

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="absolute w-full h-full top-0 left-0">
      <div
        className={cn(
          "md:flex md:flex-row md:gap-32 md:justify-center relative hidden mt-8 w-full items-center z-20 ",
          className,
          dmSerifDisplay.className
        )}
      >
        {navBarEls.map((el) => (
          <Link
            href={el.href}
            key={el.href}
            id={el.href}
            className="hover:scale-125 transition-all hover:animate-pulse"
          >
            {el.label}
          </Link>
        ))}
        <ThemeToggle />
      </div>
      <div className="md:hidden flex fixed z-10 justify-center w-full">
        <MobileSidebar navigation={navBarEls} />
      </div>
    </div>
  );
};

export default Navbar;
