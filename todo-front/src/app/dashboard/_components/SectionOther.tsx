"use client";
import { TodoCard } from "@/components/TodoCard";
import { TodoCardSkeleton } from "@/components/TodoCard/skeleton";
import useTodoListStore from "@/features/store/todoListStore";

function SectionOther() {
  const { loading, todoList } = useTodoListStore();
  

  // filter out the favorite lists
  const filteredTodoList = todoList.filter((list) => !list.isFavorited);

  return (
    <div className="space-y-1.5">
      <div className="max-w-screen-xl mx-auto">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-6  justify-items-center-safe">
            <TodoCardSkeleton />
            <TodoCardSkeleton />
            <TodoCardSkeleton />
          </div>
        ) : (
          <>
            <h2>Outras</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-6  justify-items-center-safe">
              {filteredTodoList.length > 0 ? (
                filteredTodoList.map((list) => (
                  <TodoCard
                    key={list.id}
                    id={list.id}
                    title={list.title}
                    color={list.color}
                    notes={list.notes}
                    is_favorited={list.isFavorited}
                  />
                ))
              ) : (
                <div className="flex items-center justify-center">
                  <p>Nenhuma Lista</p>
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
