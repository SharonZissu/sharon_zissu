import React from "react";
import styled from "styled-components";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const areas = ["Open", "High", "Low", "Volume"];

const Chart = ({ data, weekData, selectedTab }) => {
  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={selectedTab === "1 Week" ? weekData : data}
          margin={{ top: 5, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey={selectedTab === "1 Week" ? "Date" : "StartTime"} />
          <YAxis dataKey="Close" fontSize="1.6rem" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />

          {selectedTab !== "1 Week" && (
            <Area
              type="monotone"
              dataKey={"StartDate"}
              fillOpacity={0}
              strokeWidth={0}
            />
          )}

          <Area
            type="monotone"
            dataKey="Close"
            fillOpacity={1}
            stroke="#82ca9d"
            fill="url(#colorGreen)"
          />
          {areas.map((area) => (
            <Area
              type="monotone"
              dataKey={area}
              fillOpacity={0}
              strokeWidth={0}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Chart;

const Container = styled.div`
  width: 100%;
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
