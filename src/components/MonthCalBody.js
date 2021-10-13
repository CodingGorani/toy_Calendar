import React, { useRef, useEffect, useState, createRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import MonthCalHeader from './MonthCalHeader';
import { v4 as uuidv4 } from 'uuid';
import MonthCalMonth from './MonthCalMonth';
import MonthCalWeek from './MonthCalWeek';

const Dummy = styled.div`
  padding: 2em 0;
  height: 100%;
  width: 100%;
  scroll-snap-align: center;
`;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2em 1em;
  padding: 2em;
  background: white;
  width: 80%;
  max-width: 1000px;
  height: 80vh;
  box-shadow: 0 1px 35px 1px rgba(0, 0, 0, 0.1);
  overflow: none;
`;

const CalendarBody = styled.div`
  flex: 1;
  width: 100%;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
`;

const createScrollStopListener = (element, callback, timeout) => {
  let removed = false;
  let handle = null;
  const onScroll = () => {
    if (handle) {
      clearTimeout(handle);
    }
    handle = setTimeout(callback, timeout || 200);
  };
  element.addEventListener('scroll', onScroll);
  return () => {
    if (removed) {
      return;
    }
    removed = true;
    if (handle) {
      clearTimeout(handle);
    }
    element.removeEventListener('scroll', onScroll);
  };
};

function MonthCalBody({ today, origin, weeksData, handleDiff }) {
  const containerRef = useRef();
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    setWeeks(weeksData);
  }, [weeksData]);

  useEffect(() => {
    const destroyListener = createScrollStopListener(
      containerRef.current,
      () => {
        console.log('onscrollstop');
      }
    );

    return () => destroyListener();
  }, []);

  return (
    <CalendarContainer>
      <MonthCalHeader />
      <CalendarBody ref={containerRef}>
        {weeks
          ? weeks.map((week, index) => (
              <MonthCalWeek
                key={uuidv4()}
                today={today}
                origin={origin}
                week={week}
              />
            ))
          : Array(7)
              .fill()
              .map((_, i) => <Dummy key={i} />)}
      </CalendarBody>
    </CalendarContainer>
  );
}

export default MonthCalBody;
