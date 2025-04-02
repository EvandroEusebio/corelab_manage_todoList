"use client";
import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ColorIcon from "@/assets/icons/colorIcon";

interface HandlePopoverChangeProps {
  open: boolean;
}

function PaletteColor() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handlePopoverChange = (open: HandlePopoverChangeProps["open"]) => {
    setIsPopoverOpen(open);
  };

  return (
    <Popover onOpenChange={handlePopoverChange}>
      <PopoverTrigger asChild>
        <Toggle
          className={`cursor-pointer hover:bg-[#ffe3b388] rounded-full
            ${isPopoverOpen ? "bg-[#FFE3B3]" : "bg-transparent"} 
            transition-colors duration-300 ease-in-out`}
        >
          <ColorIcon className="w-4 h-4 " color="#FFA000" />
        </Toggle>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="start" className="w-64 sm:w-96">
        <div className="flex gap-2 flex-wrap justify-between">
          <div className="w-9 h-9 bg-[#FFE3B3] rounded-full cursor-pointer"></div>
          <div className="w-9 h-9 bg-[#FFB74D] rounded-full cursor-pointer"></div>
          <div className="w-9 h-9 bg-[#FFA000] rounded-full cursor-pointer"></div>
          <div className="w-9 h-9 bg-[#FF8F00] rounded-full cursor-pointer"></div>
          <div className="w-9 h-9 bg-[#FF6F00] rounded-full cursor-pointer"></div>
          <div className="w-9 h-9 bg-[#FF5722] rounded-full cursor-pointer"></div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default PaletteColor;
