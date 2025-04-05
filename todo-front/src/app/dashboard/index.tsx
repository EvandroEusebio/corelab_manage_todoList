"use client";
import TodoInput from "@/components/TodoInput";
import SectionOther from "./_components/SectionOther";
import useTodoListStore from "@/features/store/todoListStore";
import getTodoLists from "@/service/routesAPI/todoList/all";
import { useEffect } from "react";
import SectionFavorite from "./_components/SectionFavorite";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const { setTodoList, setLoading } = useTodoListStore();

  // obter o valor da query string
  const searchQuery = searchParams?.get("q") ?? "";

  useEffect(() => {
    setLoading(true);
    getTodoLists(searchQuery)
      .then((response) => {
        //console.log("Listas de Tarefas:", response.data.lists);
        setTodoList(response.data.lists);
      })
      .catch((error) => {
        console.error("Erro ao buscar listas de tarefas:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchQuery]);

  return (
    <div className="min-h-screen pt-8 pb-20 space-y-8 font-[family-name:var(--font-geist-sans)] lg:px-20 px-4">
      <div className="flex justify-center">
        <TodoInput />
      </div>
      <SectionFavorite />
      <SectionOther />
    </div>
  );
}
