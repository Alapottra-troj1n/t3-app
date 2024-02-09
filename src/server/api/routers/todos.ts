import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { CreateTodoSchema } from "../schema/todos";
import { todos } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export const todosRouter = createTRPCRouter({
  create: publicProcedure
    .input(CreateTodoSchema)
    .mutation(async ({ ctx, input }) => {
      const res = await ctx.db.insert(todos).values(input).execute();
      return res;
    }),
  delete: publicProcedure
    .input(z.number())
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(todos).where(eq(todos.id, input)).execute();
      return input
    }),
  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.todos.findMany();
  }),
});
