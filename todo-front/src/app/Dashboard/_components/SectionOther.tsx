import { TodoCard } from "@/components/TodoCard";
function SectionOther() {
  return (
    <div className="space-y-1.5" >
      <div className="max-w-screen-xl mx-auto">
        <h2>Outras</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-6  justify-items-center-safe" >
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
}

export default SectionOther;