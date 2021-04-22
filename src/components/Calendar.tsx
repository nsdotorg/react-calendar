import React from "react";
import styled from "styled-components";

import WeekView from "./WeekView";

const CalendarWrapper = styled.section`
  padding: 0;
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  background: #00a8f4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Calendar = () => {
  return (
    <>
      <CalendarWrapper>
        <WeekView />
      </CalendarWrapper>
    </>
  );
};

export default Calendar;
