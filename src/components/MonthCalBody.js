import React, { useRef, useEffect, useState } from 'react';
import MonthCalWeek from './MonthCalWeek';
import styled, { css, keyframes } from 'styled-components';
import MonthCalDay from './MonthCalDay';
import { v4 as uuidv4 } from 'uuid';

const nextMonth = keyframes`
  0%{
    transform: translateY(0%);
  }
  100%{
    transform: translateY(100%);
  }
`;

const CalendarBody = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-radius: 2em 1em;
  padding: 2em;
  background: white;
  width: 80%;
  max-width: 1200px;
  height: 80vh;
  box-shadow: 0 1px 35px 1px rgba(0, 0, 0, 0.1);

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
      top: -10px;
      filter: brightness(98%);
    `}

  ${(props) =>
    props.next &&
    css`
      position: absolute;
      z-index: -2;
      top: 70px;
      filter: brightness(98%);
    `}
  animation: ${(props) => {
    if (props.goNextMonth) {
      return `${nextMonth} 2s ease-in 1s infinite;`;
    } else if (props.goPreviousMonth) {
      return `${nextMonth} 2s ease-in 1s infinite;`;
    }
    return 'none';
  }}
`;

function MonthCalBody({ today, origin, monthData, handleDiff }) {
  const [dragging, setDragging] = useState(false);
  const [goingDown, setGoingDown] = useState(false);
  const [goingUp, setGoingUp] = useState(false);
  const draggingNode = useRef(null);
  const moveRef = useRef(null);

  const handleDragStart = (e) => {
    draggingNode.current = e.target;
    moveRef.current = e.pageY;
    draggingNode.current.addEventListener('dragend', handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleMouseDown = (e) => {
    moveRef.current = e.pageY;
  };

  const handleMouseUp = (e) => {
    if (e.pageY < moveRef.current) {
      handleDiff('next');
      setGoingUp(true);
    } else if (e.pageY > moveRef.current) {
      handleDiff('previous');
      setGoingDown(true);
    }
    moveRef.current = null;
    setTimeout(() => {
      setGoingUp(false);
      setGoingDown(false);
    }, 0);
  };

  const handleDragEnd = (e) => {
    draggingNode.current.removeEventListener('dragend', handleDragEnd);

    if (e.pageY < moveRef.current) {
      handleDiff('next');
      setGoingUp(true);
    } else if (e.pageY > moveRef.current) {
      handleDiff('previous');
      setGoingDown(true);
    }

    draggingNode.current = null;
    moveRef.current = null;
    setDragging(false);
    setGoingUp(false);
    setGoingDown(false);
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
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        dragging={dragging}
        goNextMonth={goingUp}
        goPreviousMonth={goingDown}
      >
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
