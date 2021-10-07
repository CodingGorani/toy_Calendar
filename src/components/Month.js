import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MonthCalHeader from './MonthCalHeader';
import MonthCalBody from './MonthCalBody';
import { composeCalendarWithWeeks, getOneMonthCalendar } from './Utils';

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
  overflow: auto;
  height: 100vh;
  width: 100vw;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function Month({ today }) {
  const [diff, setDiff] = useState(0);
  const [origin, setOrigin] = useState(today);
  const [monthData, setMonthData] = useState(null);

  useEffect(() => {
    setOrigin(today.plus({ month: diff }));
  }, [diff, today]);

  useEffect(() => {
    setMonthData(getOneMonthCalendar(origin));
  }, [origin]);

  const handleDiff = (action) => {
    setDiff((prev) => {
      if (action === 'previous') {
        return prev - 1;
      } else if (action === 'next') {
        return prev + 1;
      }
    });
  };

  return (
    <>
      <button
        name="previous"
        onClick={() => {
          handleDiff('previous');
        }}
      >
        전
      </button>
      오늘은 {origin.year}년 {origin.month}월 {origin.day}일 입니다.
      <button
        name="next"
        onClick={() => {
          handleDiff('next');
        }}
      >
        후
      </button>
      <View>
        <MonthCalBody
          handleDiff={handleDiff}
          today={today}
          origin={origin}
          monthData={monthData}
        />
      </View>
    </>
  );
}

export default Month;
