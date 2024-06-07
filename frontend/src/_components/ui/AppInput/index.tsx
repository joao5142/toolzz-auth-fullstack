"use client";
import { InputContainer } from "./styles";

import { HTMLAttributes, forwardRef } from "react";

export interface IInput {
  wFull?: boolean;
  name: string;
}
interface InputProps extends HTMLAttributes<HTMLInputElement>, IInput {}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, onBlur, name, wFull = false, ...rest }, ref) => (
    <InputContainer
      as="input"
      {...rest}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      ref={ref}
    />
  )
);
