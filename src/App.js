import React, { useState, useEffect } from "react";
import Loader from "./Components/Loader/Loader";
import Clock from "./Components/Clock/Clock";
import { MainWrapper } from "./Components/MainWrapper";
import { Container } from "./Components/Container";

const App = () => {
  const apiOneEndPoint = "https://freegeoip.app/json/";
  const apiTwoEndPoint = "http://worldtimeapi.org/api/ip";

  const [apiOneData, setApiOneData] = useState(null);
  const [apiTwoData, setApiTwoData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [now, setNow] = useState(new Date());

  const getApiOneData = async () => {
    try {
      const response = await fetch(apiOneEndPoint);
      const data = await response.json();

      console.log(data);

      setApiOneData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getApiTwoData = async () => {
    try {
      const response = await fetch(apiTwoEndPoint);
      const data = await response.json();

      console.log(data);

      setApiTwoData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      const responseDataOne = await fetch(apiOneEndPoint);
      const dataOne = await responseDataOne.json();

      const responseDataTwo = await fetch(apiTwoEndPoint);
      const dataTwo = await responseDataTwo.json();

      console.log(dataTwo);
      console.log(dataOne);

      setApiOneData(dataOne);
      setApiTwoData(dataTwo);
    } catch (error) {
      console.log(error);
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

    if ((hour === 0) & (minute === 0) & (second === 0)) {
      getApiOneData();
      getApiTwoData();
      console.log("new date");
    }
  };

  useEffect(() => {
    getData();

    // return () => {
    //   cleanup
    // }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <>
        <MainWrapper hour={now.getHours()}>
          <Container>
            <Clock
              now={now}
              apiOneData={apiOneData}
              apiTwoData={apiTwoData}
              isLoading={isLoading}
            />
          </Container>
        </MainWrapper>
      </>
    );
  }
};

export default App;
