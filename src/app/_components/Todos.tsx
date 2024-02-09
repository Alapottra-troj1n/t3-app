"use client";

import { RouterOutputs } from "~/trpc/shared";

const Todos = ({ todos }: { todos: RouterOutputs["todos"]["getLatest"] }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold uppercase text-orange-500" >Task List</h2>

      <div className="mt-3 space-y-3">
      {todos.map((todo) => (
        <div className="w-full bg-slate-300 p-2 cursor-pointer hover:bg-slate-400/50 transition rounded-md text-sm py-3 flex justify-between" key={todo.id}>
            <p>{todo.task}</p>
            <span className="text-xs text-zinc-400">{todo.progress}</span>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Todos;
