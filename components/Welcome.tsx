"use client";

import { FC, useLayoutEffect, useRef } from "react";
import { EmblaCarousel } from "./EmblaCarousel";
import { type slide } from "./Slides";
import Image from "next/image";
import Navbar from "./Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "./Logo";
import { useEffect } from "react";

interface WelcomeProps {
  slides: slide[];
}

const Welcome: FC<WelcomeProps> = ({ slides }) => {
  const scrollGif = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=1000px",
        scrub: true,
        markers: true,
      },
    });

    timeline.fromTo(scrollGif.current, {
      opacity: 1
    }, {
      opacity: 0
  });
  }, []);

  return (
    <div className="h-full relative w-full">
      <Navbar />
      <Logo />
      <div>
        <EmblaCarousel data-scroll data-scroll-speed="2" className="h-full w-full fixed top-0 left-0 opacity-30 z-10">
          {slides.map((src, i) => {
            return (
              <div key={i} className="relative h-screen flex-[0_0_100%]">
                <Image
                  src={src.href}
                  quality={100}
                  priority
                  fill
                  className="object-cover"
                  alt="alt"
                />
              </div>
            );
          })}
        </EmblaCarousel>
      </div>
      <div
        data-scroll
        className="relative md:h-20 md:w-40 hidden md:flex md:justify-center md:items-center md:top-3/4 md:left-1/2 md:mt-32 md:-ml-16 opacity-50"
      >
        <Image src="/scroll.gif" fill alt="scroll" ref={scrollGif} className="dark:invert-0 invert"/>
      </div>
    </div>
  );
};

export default Welcome;
