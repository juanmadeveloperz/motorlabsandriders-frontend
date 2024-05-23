// Vendors
import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "El email es obligatorio",
  }),
  password: z
    .string({ required_error: "La contraseña es obligatoria" })
    .min(1, { message: "La contraseña es obligatoria" })
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});
