import styled from "styled-components";

export const ClockWrapper = styled.div`
  min-height: 50vh;
  padding: 9rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ClockGreetingParagraph = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  display: flex;
  align-items: center;
`;

export const ClockSunMoonIcon = styled.img`
  margin-right: 1rem;
`;

export const ClockHeading = styled.h1`
  display: flex;
  align-items: center;
  font-size: 10rem;
  font-weight: 600;
`;

export const ClockInner = styled.span`
  font-size: ${({ small }) => (small ? "2rem" : "")};
  font-weight: ${({ small }) => (small ? "300" : "")};
  margin-left: ${({ small }) => (small ? ".5rem" : "")};

  &.hour {
    position: relative;
    margin-right: 3rem;

    &::before {
      content: ":";
      position: absolute;
      left: 100%;
      bottom: 9px;
    }
  }
`;

export const ClockInnerWrapper = styled.span`
  display: flex;
  flex-direction: column;
`;

export const ClockCityParagraph = styled.p`
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 1px;
`;
