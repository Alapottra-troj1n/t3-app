import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const todosRouter = createTRPCRouter({

 

  getLatest: publicProcedure.query(({ ctx }) => {
   return ctx.db.query.todos.findMany();
  }),

});
