// Vendors
import * as z from "zod";

export const RegisterSchema = z.object({
  name: z
    .string({ required_error: "El nombre es obligatorio" })
    .min(1, { message: "El nombre es obligatorio" }),
  email: z
    .string({ required_error: "El email es obligatorio" })
    .min(1, { message: "El email es obligatorio" })
    .email({ message: "Email inválido" }),
  password: z
    .string({ required_error: "La contraseña es obligatoria" })
    .min(1, { message: "La contraseña es obligatoria" })
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});
