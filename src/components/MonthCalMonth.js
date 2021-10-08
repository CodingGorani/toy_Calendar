import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import MonthCalDay from './MonthCalDay';

const OneMonth = styled.div`
  margin-bottom: 2em;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  scroll-snap-align: center;
`;

function MonthCalMonth({ today, origin, month }) {
  return (
    <OneMonth>
      {month &&
        month.map((day, i) => (
          <MonthCalDay
            index={i}
            key={uuidv4()}
            today={today}
            origin={origin}
            day={day}
          />
        ))}
    </OneMonth>
  );
}

export default MonthCalMonth;
