"use client";
import { FC, useEffect, useLayoutEffect, useRef } from "react";
import { type slide } from "./Slides";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import scrollTween from "gsap/ScrollTrigger";
import LargeHeading from "./PhotoHeading";
import FP from "../public/FeelPowerfulCurved.png";

export const pics: slide[] = [
  {
    href: "https://i.imgur.com/6XoPrfE.jpg",
    tag: "clean",
  },
  {
    href: "https://i.imgur.com/mj70fQa.jpg",
    tag: "cos",
  },
  {
    href: "https://i.imgur.com/QGyefVC.jpg",
    tag: "grad",
  },
  {
    href: "https://i.imgur.com/4qImwfJ.jpg",
    tag: "grad",
  },
  {
    href: "https://i.imgur.com/ZhN1QJF.jpg",
    tag: "car",
  },
  {
    href: "https://i.imgur.com/3e7Wj9v.jpg",
    tag: "party",
  },
  {
    href: "https://i.imgur.com/1xQulxj.jpg",
    tag: "clean",
  },
  {
    href: "https://i.imgur.com/I0VhYA9.jpg",
    tag: "party",
  },
  {
    href: "https://i.imgur.com/CPkIvjX.jpg",
    tag: "grad",
  },
  {
    href: "https://i.imgur.com/cBWfYwH.jpg",
    tag: "car",
  },
  {
    href: "https://i.imgur.com/wj47xuV.jpg",
    tag: "car",
  },
  {
    href: "https://i.imgur.com/BzEOlOq.jpg",
    tag: "cos",
  },
  {
    href: "https://i.imgur.com/2Q2DR7y.jpg",
    tag: "party",
  },
];

interface PortfolioProps {}

gsap.registerPlugin(ScrollTrigger);

const Portfolio: FC<PortfolioProps> = ({}) => {
  const component = useRef(null);
  const slider = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      let scrollTween = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "power1",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + slider.current.offsetWidth,
          markers: true,
        },
      });

      const rotatingText = document.querySelector(".curved-fp");

      const t = gsap.to(rotatingText, {
        rotation: 360,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
      t.iteration(1000);

      const speedFactor = 1;
      let tl;

      var rotate = gsap.timeline({
        scrollTrigger: {
          trigger: "html",
          start: "top top",
          end: "+=10000",
          onUpdate: (self) => {
            tl && tl.kill();
            tl = gsap
              .timeline()
              .to(t, { timeScale: speedFactor * self.direction, duration: 0.1 })
              .to(t, { timeScale: self.direction, duration: 1 }, "+=0.5");
          },
        },
      });

      console.log(panels);
      gsap.to(".box-2", {
        x: -1900,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".portfolio",
          start: "top top",
          endTrigger: "#photoshoot",
          scrub: true,
          id: "2",
        },
      });
      gsap.to(".box-2a", {
        x: 1900,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".portfolio",
          start: "top top",
          endTrigger: "#photoshoot",
          scrub: true,
          id: "2",
        },
      });
      gsap.to(".box-3", {
        y: 100,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".portfolio",
          start: "top top",
          endTrigger: ".blue",
          end: "+=500",
          scrub: true,
          id: "3",
        },
      });
      gsap.to(".box-4", {
        y: -100,
        opacity: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".portfolio",
          start: "+=800",
          toggleActions: "play pause resume pause",
          id: "3",
        },
      });
      gsap.to(".box-5", {
        y: 100,
        opacity: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".portfolio",
          start: "+=1100",
          toggleActions: "play pause resume pause",
          id: "3",
        },
      });
      gsap.to(".box-6", {
        y: -100,
        opacity: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".portfolio",
          start: "+=1200",
          toggleActions: "play pause resume pause",
          id: "3",
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="portfolio z-20" ref={component}>
      <div ref={slider} className="flex flex-wrap w-[400vw] h-[100vh] ">
        <div className="description panel blue w-[100vw] h-[100vh]">
          <div className="h-full w-full p-12 flex flex-col -z-10 absolute">
            <LargeHeading
              size="photo"
              className="box-2 w-[600vw] overflow-visible bg-gradient-to-r -mt-10"
            >
              ONCE IN A LIFETIME • ONCE IN A LIFETIME • ONCE IN A LIFETIME • ONCE IN A LIFETIME • ONCE IN A LIFETIME
            </LargeHeading>
            {/* <LargeHeading
              size="photo"
              className=" box-2a w-[600vw] overflow-visible  relative right-1/2"
            >
              ONCE IN A LIFETIME • ONCE IN A LIFETIME • ONCE IN A LIFETIME • ONCE IN A
              LIFETIME • ONCE IN A LIFETIME
            </LargeHeading> */}
          </div>
          <div className="flex flex-wrap flex-col justify-around content-between h-screen flex-grow min-w-0 z-10 mx-12 relative">
            <div className="box-3 opacity-0 "><Image
              src="https://i.imgur.com/GgI4poM.jpg"
              priority
              alt="tdub"
              quality={100}
              width={555}
              height={300}
              className="hover:scale-105 hover:cursor-pointer hover:opacity-75 duration-700 transition-all border-stone-300 border-solid border-2"
            /></div>
            <div className="box-4 opacity-0"><Image
              src="https://i.imgur.com/4qImwfJ.jpg"
              priority
              alt="lucas"
              quality={100}
              width={400}
              height={300}
              className="hover:scale-105 hover:cursor-pointer hover:opacity-75 duration-700 transition-all border-stone-300 border-solid border-2 ml-[32vw] mt-[100px]"
            /></div>
            <div className="box-5 opacity-0"><Image
              src="https://i.imgur.com/QGyefVC.jpg"
              priority
              alt="andrea"
              quality={100}
              width={300}
              height={300}
              className="hover:scale-105 hover:cursor-pointer hover:opacity-75 duration-700 transition-all border-stone-300 border-solid border-2"
            /></div>
            <div className="box-6 opacity-0"><Image
              src="https://i.imgur.com/FDOYGqq.jpg"
              priority
              alt="abigail"
              quality={100}
              width={300}
              height={300}
              className="hover:scale-105 hover:cursor-pointer hover:opacity-75 duration-700 transition-all border-stone-300 border-solid border-2 ml-[20vw]"
            /></div>
          </div>
        </div>
        <div className="panel red  w-[100vw] h-[100vh]">
          <div className="bg-gradient-to-r from-transparent to-slate-300 w-1/5 h-full absolute"></div>
          <div className="bg-slate-300 h-full w-4/5 absolute left-[20%]"></div>
          <div className="curved-fp absolute top-[36%] left-1/3 z-0">
            <Image src={FP} alt="text-curved" className="dark:invert"/>
          </div>
          <div className="flex flex-wrap flex-col justify-around content-between h-screen flex-grow min-w-0 z-10 relative mx-12">
            {/* PLACEHOLDERS */}
            <div className=""><Image
              src="https://i.imgur.com/BzEOlOq.jpg"
              priority
              alt="nightwing"
              quality={100}
              width={400}
              height={300}
              className="hover:scale-105 hover:cursor-pointer hover:opacity-75 duration-700 transition-all border-stone-300 border-solid border-2  mb-[12rem]"
            /></div>
            <div className=""><Image
              src="https://i.imgur.com/mj70fQa.jpg"
              priority
              alt="champloo"
              quality={100}
              width={300}
              height={300}
              className="hover:scale-105 hover:cursor-pointer hover:opacity-75 duration-700 transition-all border-stone-300 border-solid border-2 mb-[28rem] ml-12"
            /></div>
            
            <div className=""><Image
              src="https://i.imgur.com/tTYoSms.jpg"
              priority
              alt="shock"
              quality={100}
              width={300}
              height={300}
              className="hover:scale-105 hover:cursor-pointer hover:opacity-75 duration-700 transition-all border-stone-300 border-solid border-2 mt-[32rem] ml-36"
            /></div>
            <div className=""><Image
              src="https://i.imgur.com/MVT5jCV.jpg"
              priority
              alt="pink"
              quality={100}
              width={300}
              height={300}
              className="hover:scale-105 hover:cursor-pointer hover:opacity-75 duration-700 transition-all border-stone-300 border-solid border-2 mb-[30rem]"
            /></div>
          </div>
        </div>
        <div className="panel orange bg-orange-500 w-[100vw] h-[100vh]">
          THREE
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
