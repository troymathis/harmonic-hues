import { FC } from "react";
import { portImg } from "@/public/assets/PortfolioImages";
import ImageExpand from "./ImageExpand";

interface MobilePortfolioProps {}

const MobilePortfolio: FC<MobilePortfolioProps> = ({}) => {
  return (
    <div className="xl:hidden h-screen z-20">
      <div className="gallery h-screen w-screen flex flex-wrap">
        <div className="bg-blue-500 w-1/3 h-1/4 overflow-hidden">
          <ImageExpand
            src={portImg.kim.src}
            width={portImg.kim.width}
            height={portImg.kim.height}
            className="w-72"
          />
        </div>
        <div className="flex-none bg-red-500 w-1/3 h-1/4 overflow-hidden">
          <ImageExpand
            src={portImg.lucas.src}
            width={portImg.lucas.width}
            height={portImg.lucas.height}
            className="w-72 object-center "
            
          />
        </div>
        <div className="flex-none bg-blue-500 w-1/3 h-1/4 overflow-hidden">
          <ImageExpand
            src={portImg.abigail.src}
            width={portImg.abigail.width}
            height={portImg.abigail.height}
            className="w-72 object-center "
            
          />
        </div>
        <div className="flex-none bg-red-500 w-1/3 h-1/4 overflow-hidden">
          <ImageExpand
            src={portImg.andrea.src}
            width={portImg.andrea.width}
            height={portImg.andrea.height}
            className="w-72 object-center "
            
          />
        </div>
        <div className="flex-none bg-blue-500 w-1/3 h-1/4 overflow-hidden">
          <ImageExpand
            src={portImg.nightwing.src}
            width={portImg.nightwing.width}
            height={portImg.nightwing.height}
            className="w-72 object-center "
            
          />
        </div>
        <div className="flex-none bg-red-500 w-1/3 h-1/4 overflow-hidden">
          <ImageExpand
            src={portImg.champloo.src}
            width={portImg.champloo.width}
            height={portImg.champloo.height}
            className="w-72 object-center "
            
          />
        </div>
        <div className="flex-none bg-blue-500 w-1/3 h-1/4 overflow-hidden">
          <ImageExpand
            src={portImg.pink.src}
            width={portImg.pink.width}
            height={portImg.pink.height}
            className="w-72 object-center "
            
          />
        </div>
        <div className="flex-none bg-red-500 w-1/3 h-1/4 overflow-hidden">
          <ImageExpand
            src={portImg.shock.src}
            width={portImg.shock.width}
            height={portImg.shock.height}
            className="w-72 object-center "
          />
        </div>
      </div>
    </div>
  );
};

export default MobilePortfolio;
