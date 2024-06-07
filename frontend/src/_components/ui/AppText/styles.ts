import styled, { css } from "styled-components";

import { IText } from ".";
import { Box } from "@/styles/globalStyles";
import { FontSizeTypes } from "@/styles/theme";

function getFontSize(size: FontSizeTypes) {
  return css`
    font-size: ${(props) => props.theme.fontSizes[size]};
  `;
}

export const TextContainer = styled(Box)<IText>`
  color: ${({ theme, color }) => theme.colors[color!]};

  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weight};
    `}

  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight};
    `}

    ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};
    `}

 	 ${(props) => props.size && getFontSize(props.size)}

   ${(props) =>
    props.block &&
    css`
      display: block;
    `}
`;
