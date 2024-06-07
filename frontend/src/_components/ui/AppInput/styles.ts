import styled, { css } from "styled-components";

export const InputContainer = styled.input`
  height: 46px;

  padding: 0.75rem;

  border: 1px solid ${({ theme }) => theme.colors["border-normal"]};

  border-radius: 4px;

  color: ${({ theme }) => theme.colors["text-normal"]};

  &::placeholder {
    color: ${({ theme }) => theme.colors["text-normal"]};
  }

  &:invalid {
    border-color: ${({ theme }) => theme.colors["border-error"]};
  }
`;
