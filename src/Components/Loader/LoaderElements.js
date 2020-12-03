import styled, { keyframes } from "styled-components";

const animateMinuteHand = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const animateHourHand = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const ClockBg = styled.div`
  background: #000;
  width: 100%;
  height: 100vh;
`;

export const CLockFace = styled.div`
  border-radius: 70px;
  border: 3px solid #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 120px;
  height: 120px;

  &:after {
    content: "";
    position: absolute;
    background-color: #fff;
    top: 13px;
    left: 48%;
    height: 50px;
    width: 4px;
    border-radius: 5px;
    transform-origin: 50% 97%;
    animation: ${animateMinuteHand} 5s linear infinite;
  }

  &:before {
    content: "";
    position: absolute;
    background-color: #fff;
    top: 24px;
    left: 48%;
    height: 40px;
    width: 4px;
    border-radius: 5px;
    transform-origin: 50% 94%;
    animation: ${animateHourHand} 12s linear infinite;
  }
`;
