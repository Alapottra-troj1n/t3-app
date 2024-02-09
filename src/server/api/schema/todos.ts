import * as z from "zod";

export const CreateTodoSchema = z.object({
  progress: z.enum(["backlog", "in-progress", "done"]),
  task: z.string().min(1),
});
