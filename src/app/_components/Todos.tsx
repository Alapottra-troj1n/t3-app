"use client";

import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { RouterOutputs } from "~/trpc/shared";

const Todos = ({ todos }: { todos: RouterOutputs["todos"]["getLatest"] }) => {
  const router = useRouter();
  const deleteTodo = api.todos.delete.useMutation({
    onSuccess: (data) => {
      console.log(data,'data')
      router.refresh();
    },
  });

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold uppercase text-orange-500">Task List</h2>

      <div className="mt-3 space-y-3">
        {todos.map((todo) => (
          <div
            className="relative flex w-full cursor-pointer justify-between rounded-md bg-slate-300 p-4 py-3 text-sm transition hover:bg-slate-400/50"
            key={todo.id}
          >
            <p>{todo.task}</p>
            <span className="text-xs text-zinc-400">{todo.progress}</span>
            <span onClick={()=> deleteTodo.mutate(todo.id)} className="absolute left-1 top-0 text-xs font-bold text-red-600">
              x
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
