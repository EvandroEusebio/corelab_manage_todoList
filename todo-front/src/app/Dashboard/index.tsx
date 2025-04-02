import TodoInput from "@/components/TodoInput";
import SectionOther from "./_components/SectionOther";

export default function Home() {
  return (
    <div className=" min-h-screen pt-8 pb-20 space-y-8  font-[family-name:var(--font-geist-sans)] lg:px-20 px-4">
      <div className="flex justify-center ">
        <TodoInput />
      </div>
      <SectionOther />
    </div>
  );
}
