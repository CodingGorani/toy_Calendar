import React from 'react';
import Day from './Day';
import Weekdays from './Weekdays';
import styled from 'styled-components';

const Calendar = styled.div`
  display: grid;
  height: 90vh;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  text-align: right;
  border-width: 0.5px 0 0 0.5px;
  border-style: solid;
`;

function MonthCal({ today, origin, days }) {
  return (
    <Calendar>
      {days
        ? days.map((dt) => (
            <Day key={dt.ts} today={today} month={origin.month} day={dt} />
          ))
        : 'loading'}
    </Calendar>
  );
}

export default MonthCal;
