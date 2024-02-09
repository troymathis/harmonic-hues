import { FC } from "react";
import ImageExpand from "./ImageExpand";
import LargeHeading from "./PhotoHeading";
import { EmblaCarousel } from "./EmblaCarousel";
import { portfolioArray } from "@/public/assets/PortfolioImages";
import Image from "next/image";

interface MobilePortfolioProps {}

const MobilePortfolio: FC<MobilePortfolioProps> = ({}) => {
  return (
    <div className="xl:hidden h-full z-20">
      <LargeHeading  className="mb-16 flex justify-center items-center">
          Portfolio
        </LargeHeading>
        <EmblaCarousel data-scroll data-scroll-speed="2" className="">
          {portfolioArray.map((pht, i) => {
            return (
              <div key={i} className="relative h-screen flex-[0_0_100%]">
                <Image
                  src={pht.src}
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
  );
};

export default MobilePortfolio;
