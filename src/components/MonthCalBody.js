import React, { useRef, useEffect, useState } from 'react';
import MonthCalWeek from './MonthCalWeek';
import styled, { css, keyframes } from 'styled-components';
import MonthCalDay from './MonthCalDay';
import MonthCalHeader from './MonthCalHeader';
import { v4 as uuidv4 } from 'uuid';

const toNext = keyframes`
  0%{
    transform: translateY(0%);
  }
  100%{
    transform: translateY(-90%);
  }
`;

const toPrevious = keyframes`
0%{
  transform: translateY(0%);
}
100%{
  transform: translateY(90%);
}
`;

const calendarTransition = css`
  animation: ${(props) => (props.motion === 'up' ? toNext : toPrevious)} 0.5s
    ease-in 0s;
`;

const CalendarBody = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-radius: 2em 1em;
  padding: 2em;
  background: white;
  width: 80%;
  max-width: 1000px;
  height: 80vh;
  box-shadow: 0 1px 35px 1px rgba(0, 0, 0, 0.1);

  ${(props) => (props.motion ? calendarTransition : 'animation: none;')};

  ${(props) =>
    props.dragging &&
    css`
      display: none;
    `}

  ${(props) =>
    props.previous &&
    css`
      position: absolute;
      z-index: -1;
      top: -50px;
      filter: brightness(98%);
      transform: scale(0.98, 0.98);
    `}

  ${(props) =>
    props.next &&
    css`
      position: absolute;
      z-index: -2;
      top: 70px;
      filter: brightness(98%);
      transform: scale(0.98, 0.98);
    `}
`;

function MonthCalBody({ today, origin, monthData, handleDiff }) {
  const [goingUpOrDown, setGoingUpOrDown] = useState(undefined);
  const [diff, setDiff] = useState(0);

  const handleMouseWheel = async (e) => {
    console.log(e.deltaY);
    await setDiff((prev) => {
      if (Math.abs(prev) < Math.abs(e.deltaY)) {
        return e.deltaY;
      }
      return 0;
    });
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        setGoingUpOrDown('down');
        handleDiff('previous');
      } else if (diff > 0) {
        setGoingUpOrDown('up');
        handleDiff('next');
      }
      setDiff(0);
      setTimeout(() => {
        setGoingUpOrDown(undefined);
      }, 1000);
    }
  };

  return (
    <>
      <CalendarBody previous>
        {monthData &&
          monthData.map((day, i) => {
            const previousMonthDay = day.minus({ months: 1 });
            return (
              <MonthCalDay
                index={i}
                key={uuidv4()}
                today={today}
                origin={origin}
                day={previousMonthDay}
              />
            );
          })}
      </CalendarBody>
      <CalendarBody
        onWheelCapture={handleMouseWheel}
        motion={goingUpOrDown}
        diff={diff}
      >
        <MonthCalHeader />
        {monthData &&
          monthData.map((day, i) => (
            <MonthCalDay
              index={i}
              key={uuidv4()}
              today={today}
              origin={origin}
              day={day}
            />
          ))}
      </CalendarBody>
      <CalendarBody next>
        {monthData &&
          monthData.map((day, i) => {
            const nextMonthDay = day.plus({ months: 1 });
            return (
              <MonthCalDay
                index={i}
                key={uuidv4()}
                today={today}
                origin={origin}
                day={nextMonthDay}
              />
            );
          })}
      </CalendarBody>
    </>
  );
}

export default MonthCalBody;
