import styled from "styled-components";

import dayBgDesktop from "../images/desktop/bg-image-daytime.jpg";
import nightBgDesktop from "../images/desktop/bg-image-nighttime.jpg";
import dayBgTablet from "../images/tablet/bg-image-daytime.jpg";
import nightBgTablet from "../images/tablet/bg-image-nighttime.jpg";
import dayBgMobile from "../images/mobile/bg-image-daytime.jpg";
import nightBgMobile from "../images/mobile/bg-image-nighttime.jpg";

export const MainWrapper = styled.main`
  background: ${({ hour }) =>
    hour >= 7 && hour < 19 ? `url(${dayBgDesktop})` : `url(${nightBgDesktop})`};
  max-height: 80rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    background: ${({ hour }) =>
      hour >= 7 && hour < 19 ? `url(${dayBgTablet})` : `url(${nightBgTablet})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media screen and (max-width: 375px) {
    background: ${({ hour }) =>
      hour >= 7 && hour < 19 ? `url(${dayBgMobile})` : `url(${nightBgMobile})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
