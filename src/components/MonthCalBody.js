import React, { useRef, useEffect, useState } from 'react';
import MonthCalWeek from './MonthCalWeek';
import styled from 'styled-components';

const CalendarBody = styled.div`
  width: 100%;
  height: 90vh;
  margin-top: 50px;
  overflow-y: scroll;
  scroll-snap-type: y proximity;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function MonthCalBody({ today, origin, monthData }) {
  const [scrolling, setScrolling] = useState(false);
  const weekElements = useRef();

  const handleScroll = (e) => {
    setScrolling(true);
    if (scrolling) {
      window.requestAnimationFrame(() => {
        console.log(weekElements.current.scrollTop);
      });
      setScrolling(false);
    }
  };

  return (
    <CalendarBody ref={weekElements} onScroll={handleScroll}>
      {monthData
        ? monthData.map((week) => {
            return (
              <MonthCalWeek
                key={week[0].ts}
                today={today}
                origin={origin}
                week={week}
              />
            );
          })
        : 'loading'}
    </CalendarBody>
  );
}

export default MonthCalBody;
