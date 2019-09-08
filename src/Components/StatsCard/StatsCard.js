import React from "react";
import styled from "styled-components";

const StatsCardWrapper = styled.div`
  border: 1px solid red;
  padding: 0.2rem;
`;

const DashboardWrapper = styled.div`
  border: 1px solid orange;
  margin: 0.2rem;
  height: 40vh;
`;

const DashTableWrapper = styled.div`
  border: 1px solid green;
  margin: 0.2rem;
  height: 30vh;
`;

const StatsCard = props => {
  return (
    <StatsCardWrapper>
      <DashboardWrapper>dashboard</DashboardWrapper>
      <DashTableWrapper>statstable</DashTableWrapper>
    </StatsCardWrapper>
  );
};

export default StatsCard;
