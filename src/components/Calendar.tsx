import React from "react";
import styled from "styled-components";

import WeekView from "./WeekView";

const CalendarWrapper = styled.section`
  padding: 0;
  margin: 0;
  width: 80vw;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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
