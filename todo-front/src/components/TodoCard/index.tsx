"use client";
import PencilIcon from "@/assets/icons/pencilIcon";
import StarIcon from "@/assets/icons/starIcon";
import XIcon from "@/assets/icons/xIcon";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import editTodoList from "@/service/routesAPI/todoList/edit";
import { TodoListInterface } from "@/types/todo_list_type";
import { useState } from "react";
import { toast } from "sonner";
import PaletteColor from "../PaletteColor";
import deleteTodoList from "@/service/routesAPI/todoList/delete";
import { Toggle } from "../ui/toggle";
import { Textarea } from "../ui/textarea";

export function TodoCard({
  id,
  title,
  color,
  notes,
  is_favorited,
}: TodoListInterface) {
  const [isFavorite, setIsFavorite] = useState(is_favorited);
  const [colorCard, setColorCard] = useState(color);
  const [enableNoteEdit, setEnableNoteEdit] = useState(true);
  const [newNote, setNewNote] = useState(notes);

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
        console.log("Todo list color updated:", res.statusText);
        toast.success("Cor da task editada com sucesso!");
      })
      .catch((error) => {
        console.error("Error updating todo list color:", error);
        setColorCard("#FFFFFF");
      });
  };

  // edite note todo list
  const handleEditNote = async (note: string) => {
    await editTodoList(
      {
        notes: note,
      },
      id
    )
      .then((res) => {
        console.log("Todo list note updated:", res.statusText);
        toast.success("Nota editada com sucesso!");
      })
      .catch((error) => {
        console.error("Error updating todo list Note:", error);
        toast.error("Não é possível editar a nota");
      });
  };

  const handleDeleteTodoList = async () => {
    await deleteTodoList(id)
      .then((response) => {
        console.log("Task deleted:", response.statusText);
        toast.success("Task deleted with sucess!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
        toast.error("Error deleting task");
      });
  };

  // Função para editar a tarefa como favorita
  const handleFavoritedTask = async (favoriteValue: boolean) => {
    await editTodoList(
      {
        is_favorited: favoriteValue,
      },
      id
    )
      .then((res) => {
        console.log("Todo list updated:", res.statusText);
        toast.success("Nota editada com sucesso!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating todo:", error);
        toast.error("Não foi possível editar a nota");
      });
  };

  // Função para alternar o estado do favorito
  const handleFavorite = () => {
    let favoriteValue = !isFavorite;
    setIsFavorite(favoriteValue);
    handleFavoritedTask(favoriteValue);
  };

  // Função para tratar a mudança de estado do Toggle e salvar a nota quando desmarcado
  const handleToggleEditNoteChange = () => {
    setEnableNoteEdit(!enableNoteEdit);
    // When the Toggle is unchecked (i.e. from editable to non-editable),
    // the note is automatically saved.
    if (!enableNoteEdit && newNote !== notes) {
      handleEditNote(newNote); // Save the note when the Toggle is unchecked
    }
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
        <Textarea
          className="w-full h-full border-none px-4 text-[13px] focus-visible:border-none focus-visible:ring-[none] resize-none font-light shadow-none"
          defaultValue={notes}
          onChange={(e) => setNewNote(e.target.value)}
          disabled={enableNoteEdit}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-3 items-center">
          <Toggle
            onClick={handleToggleEditNoteChange}
            className={`cursor-pointer hover:bg-[#ffe3b388] rounded-full 
            ${
              enableNoteEdit ? "bg-transparent" : "data-[state=on]:bg-[#FFE3B3]"
            } 
            transition-colors duration-300 ease-in-out`}
          >
            <PencilIcon className="w-4 h-4 cursor-pointer" />
          </Toggle>

          <PaletteColor onChangeColorCard={handleEditColorTodoList} />
        </div>
        <XIcon
          className="w-[13px] h-[13px] cursor-pointer"
          color="#9E9E9E"
          onClick={() => handleDeleteTodoList()}
        />
      </CardFooter>
    </Card>
  );
}
