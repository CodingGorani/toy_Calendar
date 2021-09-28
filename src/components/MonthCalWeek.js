import React from 'react';
import MonthCalDay from './MonthCalDay';
import styled from 'styled-components';

const Week = styled.div`
  display: grid;
  height: 20%;
  width: 100%;
  grid-template-columns: repeat(7, 1fr);
  text-align: right;
  scroll-snap-align: ${(props) => props.scrollSnap || 'none'};
  scroll-padding: 50px;
`;

function MonthCalWeek({ today, origin, week }) {
  const isStartOrEndOfMonth =
    week[0].hasSame(week[0].startOf('month'), 'day') ||
    !week[0].hasSame(week[6], 'month');

  return (
    <Week scrollSnap={isStartOrEndOfMonth && 'start'}>
      {week.map((dt) => (
        <MonthCalDay key={dt.ts} today={today} origin={origin} day={dt} />
      ))}
    </Week>
  );
}

export default MonthCalWeek;
