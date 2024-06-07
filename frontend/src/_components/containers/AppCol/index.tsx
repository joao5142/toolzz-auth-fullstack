"use client";
import { PropsWithChildren, ReactNode } from "react";
import { ColContainer } from "./styles";

export interface ICol {
  flex?: string;
  flexGrow?: string;
  flexShrink?: string;
  flexBasis?: string;
}
interface IColProps extends ICol, PropsWithChildren {}
export function AppCol({ children, ...rest }: IColProps) {
  return <ColContainer {...rest}>{children}</ColContainer>;
}
