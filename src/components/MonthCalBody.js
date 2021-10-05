import React, { useRef, useEffect, useState } from 'react';
import MonthCalWeek from './MonthCalWeek';
import styled, { css } from 'styled-components';
import MonthCalDay from './MonthCalDay';

const CalendarBody = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-top: 0.5px solid;
  border-left: 0.5px solid;
  background: white;
  width: 80%;
  max-width: 1200px;
  height: 80vh;
  z-index: 99999;
  position: relative;
  top: ${(props) => props.top || 0}
  left: ${(props) => props.left || 0}
`;

function MonthCalBody({ today, origin, monthData, handleDiff }) {
  const [dragging, setDragging] = useState(false);
  const draggingNode = useRef(null);
  const moveRef = useRef(null);

  const handleDragStart = (e) => {
    console.log('drag시작');
    console.log(e.pageX, e.pageY);
    draggingNode.current = e.target;
    moveRef.current = e.pageY;
    draggingNode.current.addEventListener('dragend', handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnd = (e) => {
    draggingNode.current.removeEventListener('dragend', handleDragEnd);

    if (e.pageY < moveRef.current) {
      handleDiff('next');
    } else if (e.pageY > moveRef.current) {
      handleDiff('previous');
    }

    draggingNode.current = null;
    moveRef.current = null;
  };

  return (
    <>
      <CalendarBody onDragStart={handleDragStart} draggable>
        {monthData &&
          monthData.map((day) => (
            <MonthCalDay key={day.ts} today={today} origin={origin} day={day} />
          ))}
      </CalendarBody>
    </>
  );
}

export default MonthCalBody;
