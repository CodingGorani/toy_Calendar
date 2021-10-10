import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import MonthCalDay from './MonthCalDay';

const OneWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: calc(100% / 6);
  scroll-snap-align: ${(props) => (props.isFirstWeek ? 'start' : 'none')};
`;

function MonthCalWeek({ today, origin, week }) {
  console.log(week);
  const isFirstWeek = () => {
    return (
      !week[0].hasSame(week[6], 'month') || week[0] === week[0].startOf('month')
    );
  };

  return (
    <OneWeek isFirstWeek={isFirstWeek()}>
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
