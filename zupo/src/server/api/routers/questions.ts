import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const questionSchema = z.object({
  question: z.string(),
  frequency: z.string(),
});

export const questionRouter = createTRPCRouter({
  create: protectedProcedure
    .input(questionSchema)
    .mutation(async ({ ctx, input }) => {
      // Check if the user is authenticated
      if (!ctx.session || !ctx.session.user) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }

      const { question, frequency } = input;
      const userId = ctx.session.user.id;

      // Create the new question
      const newQuestion = await ctx.db.questions.create({
        data: {
          question,
          frequency,
          userId,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });

      return newQuestion;
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

// Testing purposes only
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
