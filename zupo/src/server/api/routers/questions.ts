import { questionSchema } from "~/pages/test";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const questionRouter = createTRPCRouter({
  create: protectedProcedure
    .input(questionSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.questions.create({
        data: {
          userId: ctx.session.user.id,
          question: input.question,
          frequency: input.frequency,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    }),

  getContributionCount: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.questions.count({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),
});

export const sessionRouter = createTRPCRouter({
  getAllSessionData: protectedProcedure.query(async ({ ctx }) => {
    const sessionData = await ctx.db.session.findMany({
      orderBy: {
        expires: "asc",
      },
    });
    return sessionData;
  }),
});
