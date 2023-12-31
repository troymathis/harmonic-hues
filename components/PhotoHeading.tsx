import { HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Cinzel_Decorative } from "next/font/google";


const dmSerifDisplay = Cinzel_Decorative({ weight: "400", subsets: ["latin"] });

const headingVariants = cva(
  "text-black dark:text-white text-center lg:text-left font-extrabold leading-tight",
  {
    variants: {
      size: {
        photo: 'text-[75px]',
        default: "text-4xl md:text-5xl lg:text-6xl",
        lg: 'text-5xl md:text-6xl lg:text-7xl',
        sm: "text-2xl md:text-3xl lg:text-4xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface LargeHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const LargeHeading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(headingVariants({ size, className }), dmSerifDisplay.className)}
      >
        {children}
      </h1>
    );
  }
);

LargeHeading.displayName = 'LargeHeading'

export default LargeHeading;
