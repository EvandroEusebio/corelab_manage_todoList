"use client";
import StarIcon from "@/assets/icons/starIcon";
import createTodoList from "@/service/routesAPI/todoList/create";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

// Definir o esquema de validação com Zod
const todoSchema = z.object({
  title: z.string().min(1, { message: "Título é obrigatório" }),
  notes: z.string().min(1, { message: "Nota é obrigatória" }),
  is_favorited: z.boolean(),
});

type TodoFormData = z.infer<typeof todoSchema>;

function TodoInput() {
  const [isFavorite, setIfavorite] = useState(false);
  const [loading, setLoading] = useState(false);

  // Configurar o React Hook Form com Zod
  const todoForm = useForm<z.infer<typeof todoSchema>>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: "",
      notes: "",
      is_favorited: isFavorite,
    },
  });

  // Monitorar os valores de title e notes
  const { watch } = todoForm;
  const title = watch("title");
  const notes = watch("notes");

  // Mostrar o botão apenas quando title e notes estiverem preenchidos
  const showBtn = title && notes;

  // Função para alternar o estado do favorito
  const handleFavorite = () => {
    const changeFavoritedStatus = !isFavorite;
    setIfavorite(changeFavoritedStatus);
    todoForm.setValue("is_favorited", changeFavoritedStatus);
  };

  // Função de submissão
  const onSubmit = (data: TodoFormData) => {
    console.log(data);
    setLoading(true);
    createTodoList(data)
      .then((response) => {
        console.log(response.statusText);
        toast.success("Lista de tarefa criada com sucesso!");
        window.location.reload();
        todoForm.reset();
      })
      .catch((error) => {
        console.error("Erro ao criar a lista de tarefas:", error);
        toast.error("Erro ao criar a lista de tarefas");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Form {...todoForm}>
      <form
        onSubmit={todoForm.handleSubmit(onSubmit)}
        className="w-full max-w-96 bg-white rounded-[25px] sm:rounded-[3px] border-1 border-[#D9D9D9] shadow-md shadow-[#95959540]"
      >
        <div className="flex py-1 px-4 items-center gap-2 border-b-1 justify-between border-[#D9D9D9]">
          <FormField
            control={todoForm.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Título"
                    type="text"
                    {...field}
                    className="border-0 w-full focus-visible:border-none focus-visible:ring-[none] p-0 text-[14px] font-bold text-[#333333]"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <StarIcon
            onClick={handleFavorite}
            className="w-4 h-4 cursor-pointer"
            color={isFavorite ? "#FFA000" : "rgba(255, 255, 255, 0.0)"}
          />
        </div>

        <FormField
          control={todoForm.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Criar nota"
                  {...field}
                  className="border-none px-4 text-[13px] focus-visible:border-none focus-visible:ring-[none] resize-none font-light"
                />
              </FormControl>
            </FormItem>
          )}
        />

        {showBtn && (
          <div className="flex justify-end py-4 px-4">
            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={loading}
            >
              {loading && <Loader2 className="animate-spin" />}
              Quardar
            </Button>
          </div>
        )}
      </form>
    </Form>
  );
}

export default TodoInput;
