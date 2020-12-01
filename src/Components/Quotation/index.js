import React, { useEffect, useState } from "react";
import {
  QuotationWrapper,
  QuotationText,
  QuotationAuthor,
  QuotationBtn,
  QuotationBtnIcon,
} from "./QuotationElements";
import RefreshIcon from "../../images/desktop/icon-refresh.svg";

const Quotation = ({ detailsVisble, quotes }) => {
  const [quotation, setQuotation] = useState(null);

  const getRandomQuotation = () => {
    const randomNum = Math.floor(Math.random() * quotes.length + 1);
    const quotation = quotes[randomNum];
    setQuotation(quotation);
  };

  useEffect(() => {
    getRandomQuotation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <QuotationWrapper detailsVisble={detailsVisble}>
      {quotation ? (
        <>
          <QuotationText>{quotation.text}</QuotationText>
          <QuotationAuthor>{quotation.author}</QuotationAuthor>
        </>
      ) : null}
      <QuotationBtn>
        <QuotationBtnIcon src={RefreshIcon} onClick={getRandomQuotation} />
      </QuotationBtn>
    </QuotationWrapper>
  );
};

export default Quotation;
