import { unstable_noStore as noStore } from "next/cache";
import Todos from "./_components/Todos";
import TodoInput from "./_components/TodoInput";
import { api } from "~/trpc/server";

export default async function Home() {
  noStore();

  const todos = await api.todos.getLatest.query();

 

  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <div className="flex w-full max-w-[20rem] min-h-[10rem] flex-col items-start justify-center rounded-md bg-slate-200 p-4 text-zinc-800">
        <Todos todos={todos} />

        <div className="mt-14 w-full">
        <TodoInput />
        </div>
      </div>
    </main>
  );
}
