import React from 'react';
import MonthCalDay from './MonthCalDay';
import styled from 'styled-components';

const Week = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(7, 1fr);
  text-align: right;
  scroll-snap-align: top;
`;

function MonthCalWeek({ today, origin, week }) {
  return (
    <Week>
      {week.map((dt) => (
        <MonthCalDay key={dt.ts} today={today} origin={origin} day={dt} />
      ))}
    </Week>
  );
}

export default MonthCalWeek;
