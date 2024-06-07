"use client";

import { AppInput } from "@/_components/ui/AppInput";
import { AppText } from "@/_components/ui/AppText";
import { Box } from "@/styles/globalStyles";
import { AppRow } from "@/_components/containers/AppRow/index";
import { Captcha, Checkbox, FormContainer } from "./styles";
import AppButton from "@/_components/ui/AppButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "styled-components";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import { useForm } from "react-hook-form";

import * as zod from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { AppErrorMessage } from "@/_components/ui/AppErrorMessage";
import { FormLogin, FormLoginSchema } from "@/schemas/auth/index";

export default function LoginForm() {
  const { colors } = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginSchema>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(FormLogin),
  });

  async function handleFormSubmit(data: FormLoginSchema) {
    console.log(data);
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
      <Box marginTop="1rem">
        <label htmlFor="name">
          <AppText block marginBottom="0.4rem">
            Usuário
          </AppText>
        </label>
      </Box>

      <AppInput
        prependIcon={
          <FontAwesomeIcon
            icon={faUser}
            color={colors["text-normal"]}
            cursor="pointer"
          />
        }
        id="email"
        wFull
        placeholder="aluno290_1u"
        {...register("email")}
      />

      {errors.email && (
        <AppErrorMessage marginTop="0.4rem">
          {errors.email.message}
        </AppErrorMessage>
      )}

      <Box marginTop="1.4rem">
        <label htmlFor="password">
          <AppText block marginBottom="0.4rem">
            Senha
          </AppText>
        </label>

        <AppInput
          prependIcon={
            <FontAwesomeIcon
              icon={faUser}
              color={colors["text-normal"]}
              cursor="pointer"
            />
          }
          id="password"
          wFull
          type="password"
          placeholder="*******"
          {...register("password")}
        />

        {errors.password && (
          <AppErrorMessage marginTop="0.4rem">
            {errors.password.message}
          </AppErrorMessage>
        )}
      </Box>

      <Box margin="1.3rem 0rem">
        <AppRow gap={10} align="center">
          <Checkbox></Checkbox>
          <AppText element="strong" size="sm" weight="500">
            Manter conectado
          </AppText>
        </AppRow>
      </Box>

      <Captcha />

      <AppButton wFull size="lg" background="primary" marginTop="1.4rem">
        <AppText color="white" size="md">
          Entrar
        </AppText>
      </AppButton>

      <Box marginTop="3rem">
        <AppText align="center" block color="text-normal">
          Esqueceu sua senha? <AppText color="primary">Recuperar senha</AppText>
        </AppText>
      </Box>
    </FormContainer>
  );
}
