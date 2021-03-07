import styled, { keyframes } from "styled-components";

import dayBgDesktop from "../images/desktop/bg-image-daytime.jpg";
import nightBgDesktop from "../images/desktop/bg-image-nighttime.jpg";
import dayBgTablet from "../images/tablet/bg-image-daytime.jpg";
import nightBgTablet from "../images/tablet/bg-image-nighttime.jpg";
import dayBgMobile from "../images/mobile/bg-image-daytime.jpg";
import nightBgMobile from "../images/mobile/bg-image-nighttime.jpg";

const show = keyframes`
  from {
    opacity: 0;
  }
  to {
   opacity: 1;
  }
`;

export const MainWrapper = styled.main`
  background-image: ${({ hour }) =>
    hour >= 7 && hour < 19
      ? `linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .1)), url(${dayBgDesktop})`
      : `linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .1)), url(${nightBgDesktop})`};
  max-height: 80rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  opacity: 0;
  animation: ${show} 0.3s linear forwards 0.1s;

  @media screen and (max-width: 768px) {
    max-height: 102.4rem;
    background: ${({ hour }) =>
      hour >= 7 && hour < 19
        ? `linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .1)), url(${dayBgTablet})`
        : `linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .1)), url(${nightBgTablet})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media screen and (max-width: 375px) {
    max-height: 66.7rem;
    background: ${({ hour }) =>
      hour >= 7 && hour < 19
        ? `linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .1)), url(${dayBgMobile})`
        : `linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .1)), url(${nightBgMobile})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
