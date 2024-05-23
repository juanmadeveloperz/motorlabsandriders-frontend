// Vendors
import * as z from "zod";

export const ThreadSchema = z.object({
  title: z
    .string({ required_error: "El título es obligatorio" })
    .min(1, { message: "El título debe tener al menos 1 carácter" }),
  content: z
    .string({ required_error: "El contenido es obligatorio" })
    .min(1, { message: "El contenido debe tener al menos 1 carácter" }),
  categoryId: z.string({ required_error: "La categoría es obligatoria" }),
});
