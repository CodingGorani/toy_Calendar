import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import MonthCalDay from './MonthCalDay';

const OneWeek = styled.div`
  background: transparent;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: calc(100% / 6);
  ${(props) =>
    props.basic &&
    css`
      animation: 0.8s ease-out 0s ${fadeIn};
    `}
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 100;
  }
`;

function MonthCalWeek({ today, origin, week }) {
  return (
    <OneWeek basic>
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
