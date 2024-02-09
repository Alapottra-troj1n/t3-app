"use client";

import { useState } from "react";
import { CreateTodoSchema } from "~/server/api/schema/todos";
import { api } from "~/trpc/react";
import * as z from "zod";
import { useRouter } from "next/navigation";

const TodoInput = () => {
  const router = useRouter();
  type TodoType = z.infer<typeof CreateTodoSchema>;
  const [todo, setTodo] = useState<TodoType>({ task: "", progress: "backlog" });

  const addTodo = api.todos.create.useMutation({
    onSuccess: (data) => {
      console.log('returnData', data)
      router.refresh();
    },
    onError: ()=> {
      console.log('Error')
    }
  });

  return (
    <div className="w-full">
      <input
        onChange={(e) => setTodo({ ...todo, task: e.target.value })}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            addTodo.mutate(todo);
          }
        }}
        placeholder="Enter a Todo"
        type="text"
        name="todo-input"
        id="todo-input"
        className="h-8 w-full rounded-md p-3 py-5 placeholder:text-xs"
      />
    </div>
  );
};

export default TodoInput;
