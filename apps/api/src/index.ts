import { Hono } from "hono";
import { createHonoHandler } from "trpc-playground/handlers/hono";
import { initTRPC } from "@trpc/server";
import { getUserInputSchema, userOutputSchema } from "@sheltonScaffold/trpc-types";

const t = initTRPC.create();

export const appRouter = t.router({
  getUser: t.procedure
    .input(getUserInputSchema)
    .output(userOutputSchema)
    .query(({ input }) => ({
      id: input.id,
      name: "Alice",
    })),
});

export type AppRouter = typeof appRouter;

const app = new Hono();

app.use(
  "/trpc/*",
  createHonoHandler({
    router: appRouter,
    createContext: () => ({}),
  })
);

export default app;
