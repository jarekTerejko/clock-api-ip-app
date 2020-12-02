import styled from "styled-components";

export const ClockWrapper = styled.div`
  min-height: 40rem;
  padding: 9rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  transition: 0.5s;
  transform: ${({ detailsVisble }) =>
    detailsVisble ? "translateY(-100%)" : "translateY(0)"};

  @media screen and (max-width: 768px) {
    min-height: 51.2rem;
  }

  @media screen and (max-width: 375px) {
    transform: ${({ detailsVisble }) =>
      detailsVisble ? "translateY(-22.7rem)" : "translateY(0)"};
    min-height: 44rem;
    padding: 7rem 0 3rem 0;
    display: block;
  }
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
  margin-bottom: 5rem;
`;

export const ClockBtn = styled.button`
  background: #fafafa;
  padding: 0.8rem;
  position: absolute;
  right: 0;
  bottom: 90px;
  display: flex;
  align-items: center;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  font-family: "Inter", sans-serif;

  @media screen and (max-width: 768px) {
    position: initial;
    align-self: flex-start;
  }
`;

export const ClockBtnText = styled.span`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 1.4rem;
  padding: 0 2rem;
  width: 10rem;
  text-align: center;
`;

export const ClockBtnArrow = styled.img`
  transition: 0.3s transform;
  transform: ${({ detailsVisble }) =>
    detailsVisble ? "ratate(0)" : "rotate(180deg)"};
`;
