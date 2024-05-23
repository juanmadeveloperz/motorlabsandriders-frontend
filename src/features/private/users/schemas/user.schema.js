// Vendors
import * as z from "zod";

export const UserSchema = z.object({
  name: z
    .string({ required_error: "El nombre es obligatorio" })
    .min(1, { message: "El nombre es obligatorio" }),
  email: z
    .string({ required_error: "El email es obligatorio" })
    .min(1, { message: "El email es obligatorio" })
    .email({ message: "Email inválido" }),
  password: z.string().optional(),
  role: z.enum(["user", "admin"]),
});
