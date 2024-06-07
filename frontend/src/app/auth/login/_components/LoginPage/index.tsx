"use client";

import Image from "next/image";

import { ContainerBrands, LoginContainer, Separator } from "./styles";

import LogoLight from "@/assets/images/logo-light.png";
import LogoDark from "@/assets/images/logo-dark.png";

import { AppText } from "@/_components/ui/AppText/index";
import { AppRow } from "@/_components/containers/AppRow/index";
import AppButton from "@/_components/ui/AppButton";

import TzLogoDark from "@/assets/images/tz-icon-dark.svg";
import TzLogoLight from "@/assets/images/tz-icon-light.svg";

import {
  faFacebook,
  faApple,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useTheme } from "styled-components";

import LoginForm from "./LoginForm";

import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

export default function LoginPage() {
  const { theme } = useContext(ThemeContext);
  const { colors } = useTheme();
  return (
    <LoginContainer>
      <AppRow justify="between" align="center">
        <Image src={theme === "dark" ? LogoDark : LogoLight} alt="Logo tz" />
        <AppText element="span" color="primary" weight="500">
          Criar Conta
        </AppText>
      </AppRow>

      <AppText
        block
        marginTop="2.5rem"
        element="strong"
        size="1xl"
        weight="600"
      >
        Boas Vindas
      </AppText>

      <AppText
        block
        marginTop="15px"
        size="md"
        color="text-normal"
        weight="500"
      >
        Entre utilizando uma das opções abaixo
      </AppText>

      <ContainerBrands>
        <AppButton outlined borderColor="icon">
          <Image
            src={theme === "dark" ? TzLogoDark : TzLogoLight}
            alt="Logo tz"
          />
        </AppButton>

        <AppButton outlined borderColor="icon">
          <FontAwesomeIcon
            icon={faFacebook}
            color={colors.icon}
            size="lg"
            fontSize="20px"
            width={20}
            height={20}
          />
        </AppButton>

        <AppButton outlined borderColor="icon">
          <FontAwesomeIcon
            icon={faApple}
            color={colors.icon}
            size="lg"
            fontSize="20px"
            width={20}
            height={20}
          />
        </AppButton>

        <AppButton outlined borderColor="icon">
          <FontAwesomeIcon
            icon={faTwitter}
            color={colors.icon}
            size="lg"
            fontSize="20px"
            width={20}
            height={20}
          />
        </AppButton>
      </ContainerBrands>

      <Separator> Ou </Separator>

      <LoginForm />
    </LoginContainer>
  );
}
