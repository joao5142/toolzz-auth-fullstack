import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: var(--font-inter)
    }

    button,select,textarea,input{
        outline: 0;
        border: none;
    }

    body {
        ${({ theme }) =>
          theme?.colors &&
          css`
            background: ${theme.colors.background};
          `} 
        -webkit-font-smoothing: antialiased;
    }
    
    html{
        @media (max-width: 700px) {
            &{font-size:0.9rem}
        }

        @media (max-width: 500px) {
            &{font-size:0.8rem}
        }
    }
`;

export interface IBox {
  margin?: string;
  padding?: string;

  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;

  paddingTop?: string;
  paddingBottom?: string;
  paddingRight?: string;
  paddingLeft?: string;
}

export const Box = styled.div<IBox>`
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}

  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `}
    
    ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: ${marginBottom};
    `}

    ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${marginLeft};
    `}

    ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: ${marginRight};
    `}

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}

    ${({ paddingTop }) =>
    paddingTop &&
    css`
      padding-top: ${paddingTop};
    `}

    ${({ paddingBottom }) =>
    paddingBottom &&
    css`
      padding-bottom: ${paddingBottom};
    `}
    ${({ paddingLeft }) =>
    paddingLeft &&
    css`
      padding-left: ${paddingLeft};
    `}
    ${({ paddingRight }) =>
    paddingRight &&
    css`
      padding-right: ${paddingRight};
    `}
`;
