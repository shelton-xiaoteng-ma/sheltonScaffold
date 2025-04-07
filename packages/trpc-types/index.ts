import { z } from "zod";

export const getUserInputSchema = z.object({
  id: z.string().uuid(),
});

export const userOutputSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
});

export type GetUserInput = z.infer<typeof getUserInputSchema>;
export type UserOutput = z.infer<typeof userOutputSchema>;
