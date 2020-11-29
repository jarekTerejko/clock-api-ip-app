import React from "react";
import {
  ClockWrapper,
  ClockHeading,
  ClockInner,
  ClockInnerWrapper,
  ClockCityParagraph,
  ClockGreetingParagraph,
  ClockSunMoonIcon,
} from "./ClockElements";
import SunIcon from "../../images/desktop/icon-sun.svg";
import MoonIcon from "../../images/desktop/icon-moon.svg";

const Clock = ({ now, apiTwoData, apiOneData, isLoading }) => {
  // console.log(now, apiTwoData, apiOneData);

  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  // console.log(hour);
  // console.log(minute);
  // console.log(second);

  const chooseGreeting = () => {
    if (hour >= 5 && hour < 12) {
      return "Morning";
    } else if (hour > 12 && hour < 17) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  };

  if (isLoading) {
    return null;
  } else {
    return (
      <>
        <ClockWrapper>
          <ClockGreetingParagraph>
            <ClockSunMoonIcon
              src={hour >= 5 && hour < 19 ? SunIcon : MoonIcon}
            />
            Good {chooseGreeting()}, it's currently
          </ClockGreetingParagraph>
          <ClockHeading>
            <ClockInner className="hour">{hour}</ClockInner>
            <ClockInner>{minute < 10 ? `0${minute}` : minute}</ClockInner>
            <ClockInnerWrapper>
              <ClockInner small="true">
                {second < 10 ? `0${second}` : second}
              </ClockInner>
              <ClockInner small="true">
                {apiTwoData ? apiTwoData.abbreviation : ""}
              </ClockInner>
            </ClockInnerWrapper>
          </ClockHeading>
          <ClockCityParagraph>
            In {apiOneData ? apiOneData.city : ""},{" "}
            {apiOneData ? apiOneData.country_code : ""}
          </ClockCityParagraph>
        </ClockWrapper>
      </>
    );
  }
};

export default Clock;
