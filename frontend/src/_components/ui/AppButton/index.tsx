"use client";
import { ColorTypes } from "@/styles/theme";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { ButtonContainer } from "./styles";
import { IBox } from "@/styles/globalStyles";

export type ButtonSizeTypes = "sm" | "md" | "lg";

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren,
    IBox {
  background?: ColorTypes;
  wFull?: boolean;
  fab?: boolean;
  rounded?: boolean;
  outlined?: boolean;
  borderColor?: ColorTypes;
  size?: ButtonSizeTypes;
}
export default function AppButton({
  wFull = false,
  fab = false,
  rounded = false,
  background = "background",
  outlined = false,
  borderColor = "white",
  children,
  size = "md",
  ...rest
}: IButtonProps) {
  return (
    <ButtonContainer
      wFull={wFull}
      background={background}
      fab={fab}
      rounded={rounded}
      outlined={outlined}
      borderColor={borderColor}
      size={size}
      as="button"
      {...rest}
    >
      {children}
    </ButtonContainer>
  );
}
