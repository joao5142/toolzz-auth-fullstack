"use client";

import { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { InputContainer, InputElement, IconContainer } from "./styles";

export interface IInput {
  wFull?: boolean;
  prependIcon: ReactNode;
}
export interface IInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    IInput {}

export function AppInput({ wFull = false, prependIcon, ...rest }: IInputProps) {
  return (
    <InputContainer wFull={wFull}>
      <IconContainer>{prependIcon}</IconContainer>
      <InputElement {...rest}></InputElement>
    </InputContainer>
  );
}
