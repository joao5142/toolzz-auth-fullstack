"use client";

import { PropsWithChildren } from "react";

import { Container as StyledContainer } from "./styles";

export default function Container({ children }: PropsWithChildren) {
  return <StyledContainer>{children}</StyledContainer>;
}
