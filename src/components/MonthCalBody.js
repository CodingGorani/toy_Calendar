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
  width: 100%;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
`;

function MonthCalBody({ today, origin, weeksData, handleDiff }) {
  const weeksRef = useRef(null);

  // useEffect(() => {
  //   const children = monthRef.current.children;
  //   const distance = children[0].clientHeight + children[1].clientHeight;
  //   monthRef.current.scrollTo(0, distance);
  //   console.log(monthRef.current.children[2].clientHeight);
  // });

  // const handleScroll = (e) => {
  //   if (
  //     monthRef.current.scrollTop === monthRef.current.children[1].scrollHeight
  //   ) {
  //     handleDiff('previous');
  //   } else if (
  //     monthRef.current.scrollTop === monthRef.current.children[2].scrollHeight
  //   ) {
  //     handleDiff('next');
  //   }
  // };

  return (
    <CalendarContainer>
      <MonthCalHeader />
      <CalendarBody>
        {weeksData
          ? weeksData.map((week, index) => (
              <MonthCalWeek
                key={uuidv4()}
                today={today}
                origin={origin}
                week={week}
              />
            ))
          : Array(5)
              .fill()
              .map((_, i) => <Dummy key={i} />)}
      </CalendarBody>
    </CalendarContainer>
  );
}

export default MonthCalBody;
