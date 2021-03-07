import React, { useState } from "react";
import {
  QuotationWrapper,
  QuotationText,
  QuotationAuthor,
  QuotationBtn,
  QuotationBtnIcon,
} from "./QuotationElements";
import RefreshIcon from "../../images/desktop/icon-refresh.svg";

const Quotation = ({ detailsVisble, quotes }) => {
  const randomNum = Math.floor(Math.random() * quotes.length + 1);

  const [quotation, setQuotation] = useState(quotes[randomNum]);

  const getRandomQuotation = () => {
    const quotation = quotes[randomNum];
    setQuotation(quotation);
  };

  return (
    <>
      {quotation ? (
        <QuotationWrapper detailsVisble={detailsVisble}>
          <QuotationText>{quotation.text}</QuotationText>
          <QuotationAuthor>
            {!quotation.author ? "Author unknown" : quotation.author}
          </QuotationAuthor>
          <QuotationBtn>
            <QuotationBtnIcon src={RefreshIcon} onClick={getRandomQuotation} />
          </QuotationBtn>
        </QuotationWrapper>
      ) : null}
    </>
  );
};

export default Quotation;
