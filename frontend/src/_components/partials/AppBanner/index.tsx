"use client";

import { useContext, useEffect, useRef, useState } from "react";

import {
  BannerContainer,
  BannerProgressContainer,
  BannerProgressItem,
  BannerSteps,
} from "./styles";

import AppButton from "../../ui/AppButton/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight,
  faChevronLeft,
  faMoon as faMoonFilled,
} from "@fortawesome/free-solid-svg-icons";

import { faMoon } from "@fortawesome/free-regular-svg-icons";

import { ThemeContext } from "@/contexts/ThemeContext";

import { AppRow } from "@/_components/containers/AppRow";
import { AppText } from "../../ui/AppText/index";
import { Box } from "../../../styles/globalStyles";

const bannerInfos = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/0098/a98c/088e5938770b5dba8d9f164aeb9bc062?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dGSHSxmj4jnnhDEtgbBR2ntkdOER9tikeu7-rl4NM-m1X7cUgStNRaOLEKJKXREzDSqxhpMvOYoCmXv5isNwe9d4sgYHPqwRoIGBD~Lg1Zye53IG0UdFKjvq8xnEqO6Tn9Qbc8Noj3Y-rglUp13O0XqA06RMN-nVGJPIpB8SrWBcr21WjSz6r16PtBVIkKLHr~kj2xDr8Ggfty8WBRloPEiQNi2FvA19YDnZGKqagMWEtpguX9m1jjCCL9TIH1ieoQ8cM1IKhHASsoNKtw-DG2x3Q9-C6vdhRAsGXpYW7Jje--FKt7vE-fucBb27aIrft~NR5fAhYAlt-W8QotNdWA__",
    title: "Plataforma de cursos completa 1",
    text: "Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum",
  },
  {
    image:
      "https://images.pexels.com/photos/2325729/pexels-photo-2325729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Plataforma de cursos completa 2",
    text: "Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum",
  },
  {
    image:
      "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Plataforma de cursos completa 3",
    text: "Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum",
  },
];

export default function AppBanner({ ...rest }) {
  const [bannerInfoIndex, setBannerInfoIndex] = useState<number>(0);
  const timerInterval = useRef<NodeJS.Timer | null>(null);

  const { toggleTheme, theme } = useContext(ThemeContext);

  function initInterval() {
    const timer = setInterval(() => {
      setBannerInfoIndex((prevIndex) => (prevIndex + 1) % bannerInfos.length);
    }, 4000);

    timerInterval.current = timer;
  }

  function handleGoToPrevious() {
    clearInterval(timerInterval.current as any);

    setBannerInfoIndex(
      (prevIndex) => (prevIndex - 1 + bannerInfos.length) % bannerInfos.length
    );

    initInterval();
  }

  function handleGoToNext() {
    clearInterval(timerInterval.current as any);
    setBannerInfoIndex((prevIndex) => (prevIndex + 1) % bannerInfos.length);
    initInterval();
  }

  useEffect(() => {
    initInterval();
    return () => clearInterval(timerInterval.current as any);
  }, []);

  return (
    <BannerContainer image={bannerInfos[bannerInfoIndex].image} {...rest}>
      <AppRow justify="between">
        <AppButton fab rounded outlined>
          <FontAwesomeIcon
            icon={faChevronLeft}
            color="white"
            fontSize="18px"
            width={18}
            height={18}
          />
        </AppButton>

        {theme == "light" ? (
          <AppButton fab rounded outlined onClick={toggleTheme}>
            <FontAwesomeIcon
              icon={faMoon}
              color="white"
              cursor="pointer"
              fontSize="22px"
              width={22}
              height={22}
            />
          </AppButton>
        ) : (
          <AppButton fab rounded background="white" onClick={toggleTheme}>
            <FontAwesomeIcon
              icon={faMoonFilled}
              color="black"
              cursor="pointer"
              fontSize="22px"
              width={22}
              height={22}
            />
          </AppButton>
        )}
      </AppRow>

      <Box>
        <AppButton size="sm" background="primary" marginBottom="1.5rem">
          <AppText element="span" color="white">
            Cursos
          </AppText>
        </AppButton>

        <Box>
          <AppText element="strong" color="white" size="xl">
            {bannerInfos[bannerInfoIndex].title}
          </AppText>

          <AppText element="p" color="neutral-500" size="lg" marginTop="1rem">
            {bannerInfos[bannerInfoIndex].text}
          </AppText>
        </Box>

        <AppRow justify="between" align="center" marginTop="5rem">
          <BannerProgressContainer>
            {bannerInfos.map((image, key) => {
              return (
                <BannerProgressItem
                  active={bannerInfoIndex == key}
                  key={"bannerItem" + key}
                ></BannerProgressItem>
              );
            })}
          </BannerProgressContainer>

          <BannerSteps>
            <FontAwesomeIcon
              onClick={handleGoToPrevious}
              icon={faChevronLeft}
              color="white"
              fontSize="32px"
            />
            <FontAwesomeIcon
              onClick={handleGoToNext}
              icon={faChevronRight}
              color="white"
              fontSize="32px"
            />
          </BannerSteps>
        </AppRow>
      </Box>
    </BannerContainer>
  );
}
