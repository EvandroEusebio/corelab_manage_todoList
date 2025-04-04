"use client";
import PencilIcon from "@/assets/icons/pencilIcon";
import StarIcon from "@/assets/icons/starIcon";
import XIcon from "@/assets/icons/xIcon";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import PaletteColor from "../PaletteColor";
import { TodoListInterface } from "@/types/todo_list_type";
import editTodoList from "@/service/routesAPI/todoList/edit";
import { toast } from "sonner";

export function TodoCard({
  id,
  title,
  color,
  notes,
  is_favorited,
}: TodoListInterface) {
  const [isFavorite, setIfavorite] = useState(is_favorited);
  const [colorCard, setColorCard] = useState(color);

  const handleFavorite = () => {
    setIfavorite(!isFavorite);
  };

  // edite color todo list
  const handleEditColorTodoList = async (color: string) => {
    setColorCard(color);
    await editTodoList(
      {
        color: color,
      },
      id
    )
      .then((res) => {
        if (res.status === 200) {
          toast.success("Cor da task editada com sucesso!");
        }
      })
      .catch((error) => {
        console.error("Error updating todo list color:", error);
        setColorCard("#FFFFFF");
      });
  };

  return (
    <Card
      className={`w-full max-w-96 rounded-[25px] py-4 shadow-none border-none`}
      style={{ backgroundColor: colorCard }}
    >
      <div className="flex items-center border-b-1 pb-4 px-4 justify-between">
        <CardTitle className="font-bold text-[14px] text-[#4F4F4D]">
          {title}
        </CardTitle>
        <StarIcon
          className="w-4 h-4 cursor-pointer"
          onClick={handleFavorite}
          color={isFavorite ? "#FFA000" : "rgba(255, 255, 255, 0.0)"}
        />
      </div>

      <CardContent className="h-80 font-normal px-4 text-[13px]">
        <div>
          <p>{notes}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-3 items-center">
          <PencilIcon className="w-4 h-4 cursor-pointer" />
          <PaletteColor onChangeColorCard={handleEditColorTodoList} />
        </div>
        <XIcon className="w-[13px] h-[13px] cursor-pointer" color="#9E9E9E" />
      </CardFooter>
    </Card>
  );
}
