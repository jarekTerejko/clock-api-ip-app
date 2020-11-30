import styled from "styled-components";

export const DetailsWrapper = styled.div`
  /* min-height: 40rem; */
  /* padding: 9rem 0; */
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
`;

export const DetailsCols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 9rem 0;
  max-width: 115rem;
  padding: 9rem 2rem;
  margin: 0 auto;
`;
export const DetailsCol = styled.div``;

export const DetailsRow = styled.div``;

export const DetailsName = styled.p`
  text-transform: uppercase;
  font-size: 1.4rem;
  color: ${({ hour }) => (hour >= 7 && hour < 19 ? "#696969" : "#cacaca")};
  margin-bottom: 1.4rem;
  letter-spacing: 1px;
`;

export const DetailsValue = styled.h3`
  font-size: 5rem;
  margin-bottom: 4rem;
  font-weight: 600;
  color: ${({ hour }) => (hour >= 7 && hour < 19 ? "#1b1b1b" : "#fafafa")};
`;
