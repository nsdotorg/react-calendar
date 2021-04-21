import React from "react";
import Styled from "styled-components";

import WeekView from "./WeekView";

const CalendarWrapper = Styled.section`
  padding: 0;
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  background: #00A8F4;
  display: flex;
  justify-content: center;
  align-items: center
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
