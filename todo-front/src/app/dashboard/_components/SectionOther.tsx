"use client";
import { TodoCard } from "@/components/TodoCard";
import { TodoCardSkeleton } from "@/components/TodoCard/skeleton";
import getTodoLists from "@/service/routesAPI/todoList/all";
import { TodoListInterface } from "@/types/todo_list_type";
import { useEffect, useState } from "react";

function SectionOther() {
  const [todoLists, setTodoLists] = useState<TodoListInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getTodoLists()
      .then((response) => {
        console.log("Todo Lists:", response.data.lists);
        setTodoLists(response.data.lists);
      })
      .catch((error) => {
        console.error("Error fetching todo lists:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="space-y-1.5">
      <div className="max-w-screen-xl mx-auto">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-6  justify-items-center-safe">
            <TodoCardSkeleton />
            <TodoCardSkeleton />
            <TodoCardSkeleton />
          </div>
        ) : (
          <>
            <h2>Outras</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-6  justify-items-center-safe">
              {todoLists.length > 0 ? (
                todoLists.map((todoList) => (
                  <TodoCard
                    key={todoList.id}
                    id={todoList.id}
                    title={todoList.title}
                    color={todoList.color}
                    notes={todoList.notes}
                    is_favorited={todoList.is_favorited}
                  />
                ))
              ) : (
                <div className="flex items-center justify-center">
                  <p>No Todo Lists Available</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SectionOther;
