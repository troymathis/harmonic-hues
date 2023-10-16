import { FC } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "./ui/dialog";
import { cn } from "@/lib/utils";

interface ImageExpandProps {
  src: string;
  width: number;
  height: number;
  className?: string;
}

const ImageExpand: FC<ImageExpandProps> = ({ src, width, height, className }) => {
  return (
    <Dialog>
      <DialogTrigger className={cn("hover:opacity-80 transition-all", className)}>
        <Image
          src={src}
          priority
          alt={src}
          quality={100}
          width={width}
          height={height}

        />
      </DialogTrigger>
      <DialogContent>
        <DialogDescription>
          <Image
            src={src}
            priority
            alt={src}
            quality={100}
            width={width*1.5}
            height={height*1.5}
            className="scale-[1.5] w-full h-auto"
          />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ImageExpand;
