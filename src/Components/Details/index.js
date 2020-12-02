import React from "react";
import {
  DetailsWrapper,
  DetailsCols,
  DetailsCol,
  DetailsRow,
  DetailsName,
  DetailsValue,
} from "./DetailsElements";

const Details = ({ apiTwoData, detailsVisble, hour }) => {
  return (
    <DetailsWrapper detailsVisble={detailsVisble} hour={hour}>
      <DetailsCols>
        <DetailsCol hour={hour}>
          <DetailsRow>
            <DetailsName hour={hour}>Current timezone</DetailsName>
            <DetailsValue hour={hour}>
              {apiTwoData ? apiTwoData.timezone : ""}
            </DetailsValue>
          </DetailsRow>
          <DetailsRow>
            <DetailsName hour={hour}>Day of the year</DetailsName>
            <DetailsValue hour={hour}>
              {apiTwoData ? apiTwoData.day_of_year : ""}
            </DetailsValue>
          </DetailsRow>
        </DetailsCol>
        <DetailsCol>
          <DetailsRow>
            <DetailsName hour={hour}>Day of the week</DetailsName>
            <DetailsValue hour={hour}>
              {apiTwoData ? apiTwoData.day_of_week + 1 : ""}
            </DetailsValue>
          </DetailsRow>
          <DetailsRow>
            <DetailsName hour={hour}>Week number</DetailsName>
            <DetailsValue hour={hour}>
              {apiTwoData ? apiTwoData.week_number : ""}
            </DetailsValue>
          </DetailsRow>
        </DetailsCol>
      </DetailsCols>
    </DetailsWrapper>
  );
};

export default Details;
