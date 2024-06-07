import { IBox } from "@/styles/globalStyles";
import { TextContainer } from "./styles";

import { HtmlHTMLAttributes, ReactNode } from "react";
import { ColorTypes, FontSizeTypes } from "@/styles/theme";

export interface IText {
  size?: FontSizeTypes;
  color?: ColorTypes;
  weight?: string;
  lineHeight?: string;
}

interface TextProps
  extends IBox,
    IText,
    Omit<HtmlHTMLAttributes<HTMLElement>, "color"> {
  element: any;
  text?: string;
  children?: ReactNode;
}

export function AppText({
  text,
  element,
  size = "md",
  color = "text-pure",
  weight = "400",
  lineHeight = "130%",
  children,
  ...rest
}: TextProps) {
  return (
    <TextContainer
      {...rest}
      color={color}
      weight={weight}
      size={size}
      lineHeight={lineHeight}
      as={element}
    >
      {children ? children : text}
    </TextContainer>
  );
}
