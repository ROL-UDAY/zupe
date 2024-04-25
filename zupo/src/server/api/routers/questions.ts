import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const questionSchema = z.object({
  question: z.string(),
  frequency: z.string(),
});

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

  getQuestionCountByUser: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;
    const questionCount = await ctx.db.questions.count({
      where: {
        userId,
      },
    });

    return questionCount;
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

getQuestionCountByUser: protectedProcedure.query(async ({ ctx }) => {
  const userId = ctx.session.user.id;
  const questionCount = await ctx.db.questions.count({
    where: {
      userId,
    },
  });

  return questionCount;
});
