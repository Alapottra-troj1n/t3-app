import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { CreateTodoSchema } from "../schema/todos";
import { todos } from "~/server/db/schema";

export const todosRouter = createTRPCRouter({

 create: publicProcedure.input(CreateTodoSchema).mutation(async({ctx,input}) => {
    const res = await ctx.db.insert(todos).values(input).execute();
    return res;
 }),
  getLatest: publicProcedure.query(({ ctx }) => {
   return ctx.db.query.todos.findMany();
  }),

});
