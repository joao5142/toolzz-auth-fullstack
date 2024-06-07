import { Box, IBox } from "@/styles/globalStyles";
import { ColorTypes } from "@/styles/theme";
import styled, { css } from "styled-components";
import { ButtonSizeTypes } from ".";

interface IButtonProps {
  background: ColorTypes;
  wFull: boolean;
  fab?: boolean;
  rounded?: boolean;
  outlined?: boolean;
  borderColor?: ColorTypes;
  size: ButtonSizeTypes;
}

function getButtonBackgroundStyle(color: ColorTypes) {
  return css`
    background: ${(props) => props.theme.colors[color]};
  `;
}

function getButtonSizeStyle(size: ButtonSizeTypes) {
  if (size == "sm") {
    return css`
      padding: 0.3rem 0.75rem;
      border-radius: ${(props) => props.theme.radius["sm"]};
    `;
  } else if (size == "md") {
    return css`
      padding: 0.75rem 1rem;

      border-radius: ${(props) => props.theme.radius["xs"]};
    `;
  } else if (size === "lg") {
    return css`
      padding: 1rem;
      border-radius: ${(props) => props.theme.radius["xs"]};
    `;
  }
}

export const ButtonContainer = styled(Box)<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  ${(props) => props.background && getButtonBackgroundStyle(props.background)}

  ${(props) => props.size && getButtonSizeStyle(props.size)}

  ${(props) =>
    props.fab &&
    css`
      width: 3rem;
      height: 3rem;
      padding: 0.5rem;
    `}

  ${(props) =>
    props.rounded &&
    css`
      border-radius: 50%;
    `}

  ${(props) =>
    props.wFull &&
    css`
      width: 100%;
    `}

   ${(props) =>
    props.outlined &&
    props.borderColor &&
    css`
      border: 1px solid ${props.theme.colors[props.borderColor]};
      background: none;
    `}
`;
