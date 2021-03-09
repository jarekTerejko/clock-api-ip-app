import React, { useState, useEffect } from "react";
import Loader from "./Components/Loader";
import Clock from "./Components/Clock";
import { MainWrapper } from "./Components/MainWrapper";
import { Container } from "./Components/Container";
import Quotation from "./Components/Quotation";
import Details from "./Components/Details";

const App = () => {
  const apiOneEndPoint = "https://freegeoip.app/json/";
  const apiTwoEndPoint = "https://worldtimeapi.org/api/ip";

  const [apiOneData, setApiOneData] = useState(null);
  const [apiTwoData, setApiTwoData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [now, setNow] = useState(new Date());
  const [detailsVisble, setDetailsVisble] = useState(false);

  const handleBtnClick = () => {
    setDetailsVisble(!detailsVisble);
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      const responseDataOne = await fetch(apiOneEndPoint);
      const dataOne = await responseDataOne.json();

      const responseDataTwo = await fetch(apiTwoEndPoint);
      const dataTwo = await responseDataTwo.json();

      // console.log(dataTwo);
      // console.log(dataOne);

      setApiOneData(dataOne);
      setApiTwoData(dataTwo);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const tick = () => {
    setNow(new Date());
    // console.log(now);
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    // console.log(hour);
    // console.log(minute);
    // console.log(second);

    // fetch new data for new date
    if (hour === 0 && minute === 0 && second === 0) {
      getData();
      // console.log("new date");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      {isLoading ? <Loader /> : null}
      {apiOneData && apiTwoData ? (
        <MainWrapper hour={now.getHours()}>
          <Container>
            <Quotation detailsVisble={detailsVisble} />
            <Clock
              now={now}
              apiOneData={apiOneData}
              apiTwoData={apiTwoData}
              isLoading={isLoading}
              handleBtnClick={handleBtnClick}
              detailsVisble={detailsVisble}
            />
          </Container>
          <Details
            hour={now.getHours()}
            detailsVisble={detailsVisble}
            apiTwoData={apiTwoData}
          />
        </MainWrapper>
      ) : null}
    </>
  );
};

export default App;
