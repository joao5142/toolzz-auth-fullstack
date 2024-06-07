import styled from "styled-components";

export const LoginContainer = styled.div`
  padding: 3.6rem 2.5rem;

  @media (max-width: 400px) {
    padding: 3.6rem 1.5rem;
  }
`;

export const ContainerBrands = styled.div`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  & > * {
    flex: 1;
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Separator = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-block: 2rem;

  color: ${(props) => props.theme.colors["text-normal"]};

  font-weight: 500;

  &::before,
  &::after {
    content: "";

    width: 50%;
    height: 1px;
    background-color: ${(props) => props.theme.colors["neutral-200"]};
  }
`;
