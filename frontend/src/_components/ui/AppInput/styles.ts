import styled, { css } from "styled-components";

import { IInput } from ".";

export const InputElement = styled.input`
  color: ${({ theme }) => theme.colors["text-normal"]};

  background: none;

  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors["text-normal"]};
  }

  &:invalid {
    border-color: ${({ theme }) => theme.colors["border-error"]};
  }
`;

export const InputContainer = styled.div<{ wFull: boolean }>`
  height: 46px;

  padding: 0.75rem;

  display: flex;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors["border-normal"]};

  border-radius: 4px;

  ${(props) =>
    props.wFull &&
    css`
      width: 100%;
    `};
`;

export const IconContainer = styled.div`
  margin-right: 1rem;
`;
