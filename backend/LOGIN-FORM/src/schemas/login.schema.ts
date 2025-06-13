import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, "El nombre de usuario es obligatorio"),
  password: z.string().min(1, "La contraseña es obligatoria"),
});

export type LoginDTO = z.infer<typeof loginSchema>;
