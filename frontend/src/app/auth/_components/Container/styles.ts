import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;

  & > :nth-child(1) {
    flex: 2;
  }
  & > :nth-child(2) {
    flex: 1;
  }

  @media (max-width: 900px) {
    & [data-element="banner"] {
      display: none;
    }
  }
`;
