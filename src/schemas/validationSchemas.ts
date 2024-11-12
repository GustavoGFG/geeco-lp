// src/schemas/validationSchemas.ts
import { z } from "zod";

const brazilianPhoneRegex = /^\(?[1-9]{2}\)?\s?(?:9\d{4}|\d{4})-?\d{4}$/;

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Nome é obrigatório" }),
  phone: z
  .string()
  .regex(brazilianPhoneRegex, { message: "Telefone inválido. Use o formato (11) 91234-5678" }),
  email: z.string().email({ message: "Email inválido" }),
  message: z
  .string()
  .min(10, { message: "A mensagem deve ter pelo menos 10 caracteres" })
  .max(1000, { message: "A mensagem deve ter no máximo 1000 caracteres" }),
  company: z.string().min(2, { message: "Empresa é obrigatória" }),
});
