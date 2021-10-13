import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import MonthCalDay from './MonthCalDay';

const OneWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: calc(100% / 6);
`;

function MonthCalWeek({ today, origin, week }) {
  return (
    <OneWeek>
      {week &&
        week.map((day, i) => (
          <MonthCalDay
            index={i}
            key={uuidv4()}
            today={today}
            origin={origin}
            day={day}
          />
        ))}
    </OneWeek>
  );
}

export default MonthCalWeek;
