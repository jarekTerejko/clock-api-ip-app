import styled from "styled-components";

export const QuotationWrapper = styled.div`
  min-height: 40rem;
  padding: 9rem 0;
  transition: 0.5s;
  overflow: hidden;
  transform: ${({ detailsVisble }) =>
    detailsVisble ? "translateY(-100%)" : ""};
  position: relative;
  max-width: 60rem;
`;

export const QuotationText = styled.h2`
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 54rem;
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
  top: 8.4rem;
  right: 0;
`;
export const QuotationBtnIcon = styled.img`
  margin: auto;
`;
