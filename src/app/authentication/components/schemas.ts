import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().trim().min(1, { message: "Nome é obrigatório." }),
    email: z
      .string()
      .trim()
      .min(1, { message: "E-mail é obrigatório!" })
      .email({ message: "E-mail inválido." }),
    password: z
      .string()
      .trim()
      .min(8, { message: "A senha deve ter pelo o menos 8 caracteres." }),
    confirmPassword: z
      .string()
      .trim()
      .min(1, { message: "Confirmação de senha é obrigatória." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "E-mail é obrigatório!" })
    .email({ message: "E-mail inválido." }),
  password: z.string().trim().min(1, { message: "Senha é obrigatória." }),
});
