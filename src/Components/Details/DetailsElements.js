import styled from "styled-components";

export const DetailsWrapper = styled.div`
  background-image: unset;
  background: ${({ hour }) =>
    hour >= 7 && hour < 19 ? "#CBCBC9" : "rgba(0, 0, 0, .6)"};
  backdrop-filter: ${({ hour }) =>
    hour >= 7 && hour < 19 ? "blur(0)" : "blur(5px)"};
  min-height: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;
  transition: 0.3s opacity 0.3s;
  transform: ${({ detailsVisble }) =>
    detailsVisble ? "translateY(-100%)" : "translateY(0)"};
  opacity: ${({ detailsVisble }) => (detailsVisble ? "1" : "0")};
  min-height: ${({ detailsVisble }) => (detailsVisble ? "40rem" : "0")};

  @media screen and (max-width: 375px) {
    min-height: ${({ detailsVisble }) => (detailsVisble ? "22.7rem" : "0")};
  }
`;

export const DetailsCols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 115rem;
  padding: 9rem 2rem;
  margin: 0 auto;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 375px) {
    padding: 2rem;
  }
`;

export const DetailsCol = styled.div`
  &:first-child {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      right: -1px;
      width: 2px;
      height: 100%;
      background: ${({ hour }) =>
        hour >= 7 && hour < 19 ? "#a7a7a7" : "#cacaca"};
      /* background: #cacaca; */
      opacity: 0.5;

      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }

  &:nth-child(2) {
    padding-left: 5rem;

    @media screen and (max-width: 768px) {
      padding-left: 0;
    }
  }
`;

export const DetailsRow = styled.div`
  &:nth-child(1) {
    margin-bottom: 4rem;

    @media screen and (max-width: 375px) {
      margin-bottom: 2rem;
    }
  }

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 4rem;
    align-items: center;
    column-gap: 20px;
  }

  @media screen and (max-width: 375px) {
    margin-bottom: 2rem;
  }
`;

export const DetailsName = styled.p`
  text-transform: uppercase;
  font-size: 1.4rem;
  color: ${({ hour }) => (hour >= 7 && hour < 19 ? "#696969" : "#cacaca")};
  margin-bottom: 1.4rem;
  letter-spacing: 1px;

  @media screen and (max-width: 600px) {
    margin: 0;
  }

  @media screen and (max-width: 375px) {
    letter-spacing: unset;
  }
`;

export const DetailsValue = styled.h3`
  font-size: 5rem;
  font-weight: 600;
  color: ${({ hour }) => (hour >= 7 && hour < 19 ? "#1b1b1b" : "#fafafa")};

  @media screen and (max-width: 950px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 2rem;
    margin: 0;
    text-align: right;
  }

  @media screen and (max-width: 375px) {
    font-size: 1.6rem;
  }
`;
