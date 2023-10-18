"use client";
import Navbar from "@/components/Navbar";
import { slides } from "@/components/Slides";
import Welcome from "@/components/Welcome";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import MobilePortfolio from "@/components/MobilePortfolio";

export default function Home() {
  useEffect(() => {
    let scroll: LocomotiveScroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true,
      });
    });

    // `useEffect`'s cleanup phase
    return () => {
      if (scroll) scroll.destroy();
    };
  });

  return (
    <div className="App flex flex-col gap-20" data-scroll-container>
      <div className="h-screen" id="welcome">
        <Welcome slides={slides} />
      </div>
      <Portfolio data-scroll-container/>
      <MobilePortfolio />
      <div
        className="bg-orange-500 h-screen"
        id="photoshoot"
        data-scroll-section
      ></div>
      <div className="bg-orange-500 h-screen" data-scroll-section></div>
      <div className="h-screen bg-transparent" id="about" data-scroll-section>
        <About />
      </div>
    </div>
  );
}
