import { IBox } from "@/styles/globalStyles";
import { TextContainer } from "./styles";

import { HtmlHTMLAttributes, ReactNode } from "react";
import { ColorTypes, FontSizeTypes } from "@/styles/theme";

export type TextAlignTypes = "center" | "start" | "end";
export interface IText {
  size?: FontSizeTypes;
  color?: ColorTypes;
  weight?: string;
  lineHeight?: string;
  block?: boolean;
  align?: TextAlignTypes;
}

interface ITextProps
  extends IBox,
    IText,
    Omit<HtmlHTMLAttributes<HTMLElement>, "color"> {
  element?: any;
  text?: string;
  children?: ReactNode;
}

export function AppText({
  text,
  element = "span",
  size = "md",
  color = "text-pure",
  weight = "400",
  lineHeight = "130%",
  block = false,
  children,
  align = "start",
  ...rest
}: ITextProps) {
  return (
    <TextContainer
      {...rest}
      color={color}
      weight={weight}
      size={size}
      lineHeight={lineHeight}
      block={block}
      align={align}
      as={element}
    >
      {children ? children : text}
    </TextContainer>
  );
}
