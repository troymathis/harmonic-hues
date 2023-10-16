"use client";
import { FC, useEffect, useLayoutEffect, useRef } from "react";
import { type slide } from "./Slides";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LargeHeading from "./PhotoHeading";
import FP from "../public/FeelPowerfulCurved.png";
import { portImg } from "@/public/assets/PortfolioImages";
import ImageExpand from "./ImageExpand";
import { Mate_SC } from "next/font/google";
import { cn } from "@/lib/utils";
import SplitType from 'split-type'

interface PortfolioProps {}

gsap.registerPlugin(ScrollTrigger);

const abril = Mate_SC({ weight: "400", subsets: ["latin"] });

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

      const speedFactor = 1.4;
      let tl: any;
      let loveWhat = new SplitType('.love-what', { types: 'chars' })
      const lwChars = loveWhat.chars
      let youDo = new SplitType('.you-do', { types: 'chars' })
      const ydChars = youDo.chars

      var rotate = gsap.timeline({
        scrollTrigger: {
          trigger: "html",
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
      gsap.fromTo(
        lwChars,
        { 
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: ".portfolio",
            start: "+=5000",
            end: "+=2500",
            toggleActions: "play reverse play play",
            id: "10",
          },
        },
      )
      gsap.fromTo(
        ydChars,
        { 
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: ".portfolio",
            start: "+=6750",
            end: "+=2250",
            toggleActions: "play reverse play play",
            id: "10",
          },
        },
      );
      gsap.to(".curved-fp", {
        opacity: 0,
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".portfolio",
          start: "+=2000",
          end: '+=2400',
          scrub: true,
          id: "1",
        },
      });
      gsap.to(".box-2", {
        x: -1900,
        opacity: 0,
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".portfolio",
          start: "top top",
          end: '+=2300',
          scrub: true,
          id: "1",
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
        y:100,
        opacity: 1,
        ease: "elastic.out(1,0.3)",
        duration: 2.5,
        scrollTrigger: {
          trigger: ".portfolio",
          start: "top top",
          end: "+=1500",
          toggleActions: "play reverse play play",
          id: "3",
        },
      });
      gsap.to(".box-4", {
        y:-100,
        opacity: 1,
        ease: "elastic.out(1,0.3)",
        duration: 2.5,
        scrollTrigger: {
          trigger: ".portfolio",
          start: "+=800",
          end: "+=1500",
          toggleActions: "play reverse play play",
          id: "4",
        },
      });
      gsap.to(".box-5", {
        y:100,
        opacity: 1,
        ease: "elastic.out(1,0.3)",
        duration: 2.5,
        scrollTrigger: {
          trigger: ".portfolio",
          start: "+=1100",
          end: "+=1400",
          toggleActions: "play reverse play play",
          id: "5",
        },
      });
      gsap.to(".box-6", {
        y:-100,
        opacity: 1,
        ease: "elastic.out(1,0.3)",
        duration: 2.5,
        scrollTrigger: {
          trigger: ".portfolio",
          start: "+=1150",
          end: "+=1200",
          toggleActions: "play reverse play play",
          id: "6",
        },
      });
      gsap.to(".box-7", {
        y:100,
        opacity: 1,
        ease: "elastic.out(1,0.3)",
        duration: 2.5,
        scrollTrigger: {
          trigger: ".portfolio",
          start: "+=1650",
          end: "+=1675",
          toggleActions: "play reverse play play",
          id: "7",
        },
      });
      gsap.to(".box-8", {
        y:-100,
        opacity: 1,
        ease: "elastic.out(1,0.3)",
        duration: 2.5,
        scrollTrigger: {
          trigger: ".portfolio",
          start: "+=2000",
          end: "+=1500",
          toggleActions: "play reverse play play",
          id: "8",
        },
      });
      gsap.to(".box-9", {
        y:100,
        opacity: 1,
        ease: "elastic.out(1,0.3)",
        duration: 2.5,
        scrollTrigger: {
          trigger: ".portfolio",
          start: "+=2550",
          end: "+=1500",
          toggleActions: "play reverse play play",
          id: "9",
        },
      });
      gsap.to(".box-10", {
        y:-100,
        opacity: 1,
        ease: "elastic.out(1, 0.3)",
        duration: 2.5,
        scrollTrigger: {
          trigger: ".portfolio",
          start: "+=2575",
          end: "+=2000",
          toggleActions: "play reverse play play",
          id: "10",
        },
      });
      gsap.to(".box-11", {
        y:-100,
        opacity: 1,
        ease: "elastic.out(1, 0.3)",
        duration: 2.5,
        scrollTrigger: {
          trigger: ".portfolio",
          start: "+=5250",
          end: "+=2750",
          toggleActions: "play reverse play play",
          id: "10",
        },
      });
      gsap.to(".box-12", {
        y:-100,
        opacity: 1,
        ease: "elastic.out(1, 0.3)",
        duration: 2.5,
        scrollTrigger: {
          trigger: ".portfolio",
          start: "+=5375",
          end: "+=2750",
          toggleActions: "play reverse play play",
          id: "10",
        },
      });
      gsap.to(".box-13", {
        y:-100,
        opacity: 1,
        ease: "elastic.out(1, 0.3)",
        duration: 2.5,
        scrollTrigger: {
          trigger: ".portfolio",
          start: "+=6650",
          end: "+=1250",
          toggleActions: "play reverse play play",
          id: "10",
        },
      });
      gsap.to(".box-14", {
        y:-100,
        opacity: 1,
        ease: "elastic.out(1, 0.3)",
        duration: 2.5,
        scrollTrigger: {
          trigger: ".portfolio",
          start: "+=6750",
          end: "+=1250",
          toggleActions: "play reverse play play",
          id: "10",
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
              ONCE IN A LIFETIME • ONCE IN A LIFETIME • ONCE IN A LIFETIME •
              ONCE IN A LIFETIME •
              ONCE IN A LIFETIME
            </LargeHeading>
            {/* <LargeHeading
              size="photo"
              className=" box-2a w-[600vw] overflow-visible  relative right-1/2"
            >
              ONCE IN A LIFETIME • ONCE IN A LIFETIME • ONCE IN A LIFETIME • ONCE IN A
              LIFETIME • ONCE IN A LIFETIME
            </LargeHeading> */}
          </div>
          <div className="w-full h-screen mt-16 mx-12 gap-4">
            <div className="box-3 opacity-0 absolute scale-[1]">
              <ImageExpand
                src={portImg.kim.src}
                width={portImg.kim.width}
                height={portImg.kim.height}
              />
            </div>
            <div className="box-4 opacity-0 absolute scale-[1] left-1/2 top-1/4">
              <ImageExpand
                src={portImg.lucas.src}
                width={portImg.lucas.width}
                height={portImg.lucas.height}
              />
            </div>
            <div className="box-5 opacity-0 absolute scale-[1] left-1/3 top-1/3">
              <ImageExpand
                src={portImg.abigail.src}
                width={portImg.abigail.width}
                height={portImg.abigail.height}
              />
            </div>
            <div className="box-6 opacity-0 absolute scale-[1.5] left-[85%] top-1/2">
              <ImageExpand
                src={portImg.andrea.src}
                width={portImg.andrea.width}
                height={portImg.andrea.height}
              />
            </div>
          </div>
        </div>
        <div className="panel red w-[100vw] h-[100vh]">
          <div className="curved-fp absolute top-[25%] left-1/3 z-0">
            <Image src={FP} alt="text-curved" className="dark:invert" />
          </div>
          <div className="w-full h-screen mt-16 mx-12 gap-4">
            {/* PLACEHOLDERS */}
            <div className="box-7 opacity-0 absolute left-[25%] bottom-1/2">
              <ImageExpand
                src={portImg.nightwing.src}
                width={portImg.nightwing.width}
                height={portImg.nightwing.height}
              />
            </div>
            <div className="box-8 opacity-0 absolute top-1/2 left-[6%]">
              <ImageExpand
                src={portImg.champloo.src}
                width={portImg.champloo.width}
                height={portImg.champloo.height}
              />
            </div>
            <div className="box-9 opacity-0 absolute left-[55%] top-1/3">
              <ImageExpand
                src={portImg.pink.src}
                width={portImg.pink.width}
                height={portImg.pink.height}
              />
            </div>
            <div className="box-10 opacity-0 absolute left-3/4 top-[15%]">
              <ImageExpand
                src={portImg.shock.src}
                width={portImg.shock.width}
                height={portImg.shock.height}
              />
            </div>
          </div>
        </div>
        <div className="panel orange w-[100vw] h-[100vh]">
          <div className="absolute h-screen w-full flex top-[15%] mx-16">
          <LargeHeading size='photo' className={cn(abril.className, 'love-what relative overflow-hidden text-[10rem] bottom-[10%]')}>LOVE WHAT</LargeHeading>
          <LargeHeading size='photo' className={cn(abril.className, 'you-do relative overflow-hidden text-[10rem] top-[60%] ')}>YOU DO</LargeHeading>
          </div>
          <div className="w-full h-screen mt-16 mx-12 gap-4">
            {/* PLACEHOLDERS */}
            <div className="box-11 opacity-0 absolute left-[25%] top-[45%]">
              <ImageExpand
                src={portImg.extporsche.src}
                width={portImg.extporsche.width}
                height={portImg.extporsche.height}
              />
            </div>
            <div className="box-12 opacity-0 absolute top-1/2 left-[3%]">
              <ImageExpand
                src={portImg.lambo.src}
                width={portImg.lambo.width}
                height={portImg.lambo.height}
              />
            </div>
            <div className="box-13 opacity-0 absolute left-[75%] top-[15%]">
              <ImageExpand
                src={portImg.lambodoor.src}
                width={portImg.lambodoor.width}
                height={portImg.lambodoor.height}
              />
            </div>
            <div className="box-14 opacity-0 absolute left-[42%] top-[35%] scale-[.8]">
              <ImageExpand
                src={portImg.racecar.src}
                width={portImg.racecar.width}
                height={portImg.racecar.height}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
