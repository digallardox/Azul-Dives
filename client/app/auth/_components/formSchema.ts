import { z } from "zod";

export const schema = z.object({
  username: z.string().trim().min(4, {
    message: "Username is required",
  }),
  password: z.string().trim().min(6, {
    message: "Password must be atleast six characters",
  }),
});
export type FormSchema = z.output<typeof schema>
