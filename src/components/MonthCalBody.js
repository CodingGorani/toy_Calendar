import React, { useRef, useEffect, useState } from 'react';
import MonthCalWeek from './MonthCalWeek';
import styled from 'styled-components';
import MonthCalDay from './MonthCalDay';

const CalendarBody = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding-top: 50px;
  width: 100%;
  height: 80vh;
`;

function MonthCalBody({ today, origin, monthData }) {
  return (
    <>
      <div></div>
      <CalendarBody>
        {monthData &&
          monthData.map((day) => (
            <MonthCalDay ket={day.ts} today={today} origin={origin} day={day} />
          ))}
      </CalendarBody>
      <div></div>
    </>
  );
}

export default MonthCalBody;
