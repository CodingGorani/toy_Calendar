import React, { useRef, useEffect, useState, createRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import MonthCalHeader from './MonthCalHeader';
import { v4 as uuidv4 } from 'uuid';
import MonthCalMonth from './MonthCalMonth';

const Dummy = styled.div`
  padding: 2em 0;
  height: 100%;
  width: 100%;
  scroll-snap-align: center;
`;

const CalendarBody = styled.div`
  border-radius: 2em 1em;
  padding: 2em;
  background: white;
  width: 80%;
  max-width: 1000px;
  height: 80vh;
  box-shadow: 0 1px 35px 1px rgba(0, 0, 0, 0.1);
  overflow: auto;
  scroll-snap-type: y mandatory;
`;

function MonthCalBody({ today, origin, monthData, handleDiff }) {
  const [goingUpOrDown, setGoingUpOrDown] = useState(undefined);
  const monthRef = useRef(null);

  useEffect(() => {
    const children = monthRef.current.children;
    const distance = children[0].clientHeight + children[1].clientHeight;
    monthRef.current.scrollTo(0, distance);
    console.log(monthRef.current.children[2].clientHeight);
  }, []);

  return (
    <>
      <MonthCalHeader />
      <CalendarBody ref={monthRef}>
        {monthData
          ? monthData.map((month, index) => (
              <MonthCalMonth
                ref={monthRef.current[index]}
                key={uuidv4()}
                today={today}
                origin={origin}
                month={month}
              />
            ))
          : Array(5)
              .fill()
              .map((_, i) => <Dummy key={i} />)}
      </CalendarBody>
    </>
  );
}

export default MonthCalBody;
