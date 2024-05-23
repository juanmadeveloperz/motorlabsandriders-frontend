// Vendors
import * as z from "zod";

export const CommentSchema = z.object({
  content: z
    .string({ required_error: "La descripción es obligatoria" })
    .min(1, { message: "La descripción debe tener al menos 1 carácter" }),
});
