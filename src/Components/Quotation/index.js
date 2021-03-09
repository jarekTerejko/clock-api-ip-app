import React, { useEffect, useState } from "react";
import {
  QuotationWrapper,
  QuotationText,
  QuotationAuthor,
  QuotationBtn,
  QuotationBtnIcon,
} from "./QuotationElements";
import RefreshIcon from "../../images/desktop/icon-refresh.svg";
import { quotes } from "../../quotes";


const Quotation = ({ detailsVisble }) => {
  const [quotation, setQuotation] = useState(null);

  const getRandomQuotation = () => {
    const randomNum = Math.floor(Math.random() * quotes.length + 1);
    const newQuotation = quotes[randomNum];
    setQuotation(newQuotation);
  };

  useEffect(() => {
    getRandomQuotation();
    // return () => {
    //   cleanup
    // }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {quotation && quotes ? (
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
