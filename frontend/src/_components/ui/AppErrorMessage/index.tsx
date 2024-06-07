import { PropsWithChildren, ReactNode } from "react";
import { ErrorMessageContainer } from "./styles";
import { IBox } from "@/styles/globalStyles";

interface IErrorMessageProps extends IBox, PropsWithChildren {}

export function AppErrorMessage({ children }: IErrorMessageProps) {
  return <ErrorMessageContainer>{children}</ErrorMessageContainer>;
}
