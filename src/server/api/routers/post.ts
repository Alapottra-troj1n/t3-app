import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({

 

  getLatest: publicProcedure.query(({ ctx }) => {
   return ctx.db.query.todos.findMany();
  }),

});
