import styled from "styled-components";

export const QuotationWrapper = styled.div`
    min-height: 40rem;
    padding: 9rem 0;
    transition: .5s;
    overflow: hidden;
    transform:  ${({ detailsVisble }) =>
    detailsVisble ? 'translateY(-100%)' : ''};
`