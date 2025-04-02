"use client";
import StarIcon from "@/assets/icons/starIcon";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

function TodoInput() {
  const [isFavorite, setIfavorite] = useState(false);

  const handleFavorite = () => {
    setIfavorite(!isFavorite);
  };
  return (
    <div className="w-full max-w-96 bg-white rounded-[25px] sm:rounded-[3px] border-1 border-[#D9D9D9] shadow-md shadow-[#95959540]">
      <div className="flex p-3 items-center gap-2 border-b-1 justify-between border-[#D9D9D9]">
        <Input
          placeholder="Pesquisar notas"
          type="text"
          defaultValue={"Titulo"}
          className="border-0 w-full focus-visible:border-none focus-visible:ring-[none] p-0 text-[14px] font-bold text-[#333333]"
        />
        <Button
          variant="ghost"
          className="hover:bg-[none] hover:text-[none] cursor-pointer"
          onClick={handleFavorite}
        >
          <StarIcon
            className="w-4 h-4 cursor-pointer"
            color={isFavorite ? "#FFA000" : "rgba(255, 255, 255, 0.0)"}
          />
        </Button>
      </div>
      <div>
        <Textarea
          placeholder="Criar nota"
          className="border-none  focus-visible:border-none focus-visible:ring-[none] resize-none font-light"
        />
      </div>
    </div>
  );
}
export default TodoInput;
