"use client";
import ColorIcon from "@/assets/icons/colorIcon";
import PencilIcon from "@/assets/icons/pencilIcon";
import StarIcon from "@/assets/icons/starIcon";
import XIcon from "@/assets/icons/xIcon";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import PaletteColor from "../PaletteColor";

export function TodoCard() {
  const [isFavorite, setIfavorite] = useState(false);

  const handleFavorite = () => {
    setIfavorite(!isFavorite);
  };
  return (
    <Card className=" w-full max-w-96   rounded-[25px] py-4 shadow-none border-none">
      <div className="flex items-center border-b-1 pb-4  px-4 justify-between">
        <CardTitle className="font-bold text-[14px] text-[#4F4F4D]">
          Título
        </CardTitle>
        <StarIcon
          className="w-4 h-4 cursor-pointer"
          onClick={handleFavorite}
          color={isFavorite ? "#FFA000" : "rgba(255, 255, 255, 0.0)"}
        />
      </div>

      <CardContent className="h-80 font-normal px-4 text-[13px]">
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio animi
            doloribus, placeat ex laudantium perspiciatis distinctio maxime sed
            reiciendis, ad assumenda voluptate. Nesciunt quibusdam ad officia
            ducimus blanditiis quia recusandae?
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-3 items-center">
          <PencilIcon className="w-4 h-4 cursor-pointer" />
          <PaletteColor />
        </div>
        <XIcon className="w-[13px] h-[13px] cursor-pointer" color="#9E9E9E" />
      </CardFooter>
    </Card>
  );
}
