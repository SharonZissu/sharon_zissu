import React from "react";
import styled, { css } from "styled-components";

const tabs = [
  { tabName: "1 Minute", period: 1, precision: "Minutes" },
  { tabName: "5 Minutes", period: 5, precision: "Minutes" },
  { tabName: "1 Hours", period: 1, precision: "Hours" },
  { tabName: "1 Week", period: 1, precision: "Minutes" },
];

const Tabs = ({ handleTabClicked, selectedTab }) => {
  return (
    <TabsContainer>
      {tabs.map(({ tabName, period, precision }, i) => (
        <Tab
          key={i}
          onClick={() => handleTabClicked(tabName, period, precision)}
          selected={selectedTab === tabName}
        >
          {tabName}
        </Tab>
      ))}
    </TabsContainer>
  );
};

export default Tabs;

const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Tab = styled.label`
  font-size: 2rem;
  cursor: pointer;
  padding: 0.6rem 2rem;
  border: 2px solid #58a75b;
  color: #58a75b;
  &:not(:last-child) {
    margin-right: 2rem;
  }
  &:hover {
    background-color: #58a75b;
    color: white;
  }
  ${({ selected }) =>
    selected &&
    css`
      background-color: #58a75b;
      color: white;
    `}
`;
