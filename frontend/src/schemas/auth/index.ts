import * as zod from "zod";

export const FormLogin = zod.object({
  email: zod
    .string({ message: "Preencha o campo corretamente" })
    .email()
    .min(1, "Preencha o Campo"),
  password: zod
    .string({ message: "Preencha o campo corretamente" })
    .email()
    .min(1, "Preencha o Campo"),
});

export type FormLoginSchema = zod.infer<typeof FormLogin>;
