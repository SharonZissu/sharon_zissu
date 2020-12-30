import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";

///components
import Tabs from "./components/Tabs";
import Spinner from "./components/Spinner";
import Chart from "./components/Chart";

const App = () => {
  const [data, setData] = useState([]);
  const [selectedTab, setSelectedTab] = useState("1 Minute");
  const [isLoading, setIsLoading] = useState(false);
  const [weekData, setWeekData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (newPeriod = 1, newPrecision = "Minutes") => {
    setIsLoading(true);
    const url = `https://www.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=${newPeriod}&Precision=${newPrecision}&StartTime=8/28/2020%2016:0&EndTime=9/4/2020%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`;
    const response = await fetch(url);
    const data = await response.json();
    setWeekData([data[0], data[data.length - 1]]);
    setData(data);
    setIsLoading(false);
  };

  const handleTabClicked = async (name, newPeriod, newPrecision) => {
    if (selectedTab === name) return;
    setSelectedTab(name);
    fetchData(newPeriod, newPrecision);
  };
  return (
    <>
      <Container>
        <Tabs handleTabClicked={handleTabClicked} selectedTab={selectedTab} />

        {isLoading ? (
          <Spinner />
        ) : (
          <Chart data={data} weekData={weekData} selectedTab={selectedTab} />
        )}
        <GlobalStyle />
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border: 1px solid black;
  padding: 2rem 3rem;
  box-shadow: 0 1rem 2rem 0.5rem rgba(0, 0, 0, 0.3);
`;
