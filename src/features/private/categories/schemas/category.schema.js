// Vendors
import * as z from "zod";

export const CategorySchema = z.object({
  name: z
    .string({ required_error: "El nombre es obligatorio" })
    .min(1, { message: "El nombre debe tener al menos 1 carácter" }),
  description: z
    .string({ required_error: "La descripción es obligatoria" })
    .min(1, { message: "La descripción debe tener al menos 1 carácter" }),
});
