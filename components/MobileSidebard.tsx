"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Navbar from "./Navbar";
import { FC, useEffect, useState } from "react";
import { DM_Serif_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";


interface MobileSidebarProps {
    navigation: Array<{label: string, href: string}>
}
const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

const MobileSidebar: FC<MobileSidebarProps> = ({ navigation }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div>
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="flex flex-col items-center">
        {navigation.map((el) => (
            <Link className={cn(dmSerifDisplay.className, "")} href={el.href} key={el.href} id={el.href}>
            <p>{el.label}</p>
          </Link>
        ))}
      </SheetContent>
    </Sheet>
    </div>
  );
};

export default MobileSidebar;
