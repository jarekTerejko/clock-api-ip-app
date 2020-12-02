import styled from "styled-components";

export const QuotationWrapper = styled.div`
  min-height: 40rem;
  padding: 9rem 0;
  transition: 0.5s;
  overflow: hidden;
  transform: ${({ detailsVisble }) =>
    detailsVisble ? "translateY(-100%)" : ""};
  position: relative;
  max-width: 56rem;

  @media screen and (max-width: 768px) {
    min-height: 51.2rem;
  }

  @media screen and (max-width: 375px) {
    min-height: 22.7rem;
    padding: 4rem 0 0;
  }
`;

export const QuotationText = styled.h2`
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 54rem;
  padding-right: 5rem;
`;
export const QuotationAuthor = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const QuotationBtn = styled.button`
  border: none;
  cursor: pointer;
  padding: 1rem;
  background: none;
  display: flex;
  position: absolute;
  top: 84px;
  right: 0;

  @media screen and (max-width: 375px) {
    top: 34px;
  }
`;
export const QuotationBtnIcon = styled.img`
  margin: auto;
`;
