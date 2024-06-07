import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

interface IBannerContainerProps {
  image: string;
}

export const BannerContainer = styled.div<IBannerContainerProps>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;

  position: relative;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  padding: 5rem 3.5rem;

  isolation: isolate;

  &::before {
    content: "";

    position: absolute;

    left: 0;
    top: 0;

    height: 100%;
    width: 100%;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);

    z-index: -1;
  }
`;

export const BannerProgressContainer = styled.div`
  max-width: 300px;
  width: 100%;

  display: grid;
  grid-template-columns: auto;
  grid-auto-flow: column;
  grid-template-rows: 1;
  gap: 0.5rem;
`;

interface IBannerProgressItemProps {
  active: boolean;
}

export const BannerProgressItem = styled.div<IBannerProgressItemProps>`
  height: 4px;

  background: ${(props) => props.theme.colors["neutral-500"]};

  ${(props) =>
    props.active &&
    css`
      background: ${props.theme.colors.white};
    `}
`;

export const BannerSteps = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;

  & > * {
    cursor: pointer;
  }
`;
