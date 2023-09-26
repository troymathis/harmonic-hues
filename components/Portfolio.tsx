"use client";
import { FC, useEffect, useLayoutEffect, useRef } from "react";
import { type slide } from "./Slides";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import scrollTween from "gsap/ScrollTrigger";
import LargeHeading from "./PhotoHeading";

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
      console.log(panels);
      gsap.to(".box-2", {
        x: 120,
        backgroundColor: "#1e90ff",
        ease: "none",
        scrollTrigger: {
          trigger: ".box-2",
          start: "center 80%",
          end: "center 20%",
          scrub: true,
          id: "2",
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="App bg-black z-20" ref={component}>
      <div ref={slider} className="flex flex-wrap w-[400vw] h-[100vh] ">
        <div className="description panel blue w-[100vw] h-[100vh]">
          <div className="flex flex-wrap flex-col m-8 justify-around content-between h-screen  flex-grow min-w-0">
            <LargeHeading className="box-2 absolute top-[25vh] right-[55vw] font-extrabold w-96 border-2 p-12 ">
              Once in a lifetime
            </LargeHeading>
            <Image
              src="https://i.imgur.com/GgI4poM.jpg"
              priority
              alt="tdub"
              quality={100}
              width={555}
              height={300}
              className="border-stone-300 border-solid border-2 absolute ml-[64vw] mb-48 hover:-rotate-3 hover:cursor-pointer transition-all ease-in-out"
            />
            <Image
              src="https://i.imgur.com/4qImwfJ.jpg"
              priority
              alt="lucas"
              quality={100}
              width={400}
              height={300}
              className=" border-stone-300 border-solid border-2 absolute ml-[20vw] mt-[45vh]"
            />
            <Image
              src="https://i.imgur.com/QGyefVC.jpg"
              priority
              alt="andrea"
              quality={100}
              width={300}
              height={300}
              className=" border-stone-300 border-solid border-2 absolute ml-[45vw] mb-[1vh]"
            />
            <Image
              src="https://i.imgur.com/FDOYGqq.jpg"
              priority
              alt="abigail"
              quality={100}
              width={300}
              height={300}
              className="border-stone-300 border-solid border-2"
            />
          </div>
        </div>
        <div className="panel red bg-red-500 w-[100vw] h-[100vh]">TWO</div>
        <div className="panel orange bg-orange-500 w-[100vw] h-[100vh]">
          THREE
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
