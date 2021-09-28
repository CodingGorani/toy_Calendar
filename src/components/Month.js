import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MonthCalHeader from './MonthCalHeader';
import {
  getOneMonthCalendar,
  get21MonthCalendar,
  composeCalendarWithWeeks,
} from './Utils';
import MonthCalWeek from './MonthCalWeek';

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  height: 100vh;
  width: 95vw;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MonthCalBody = styled.div`
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

function Month({ today }) {
  const [diff, setDiff] = useState(0);
  const [origin, setOrigin] = useState(today);
  const [weeksData, setWeeksData] = useState(null);

  useEffect(() => {
    setOrigin(today.plus({ month: diff }));
  }, [diff]);

  useEffect(() => {
    setWeeksData(composeCalendarWithWeeks(origin));
  }, [origin]);

  const handleDiffBtn = (e) => {
    const { name } = e.target;
    setDiff((prev) => {
      if (name === 'previous') {
        return prev - 1;
      } else if (name === 'next') {
        return prev + 1;
      }
    });
  };

  return (
    <>
      <button name="previous" onClick={handleDiffBtn}>
        전
      </button>
      오늘은 {origin.year}년 {origin.month}월 {origin.day}일 입니다.
      <button name="next" onClick={handleDiffBtn}>
        후
      </button>
      <View>
        <MonthCalHeader />
        <MonthCalBody>
          {weeksData
            ? weeksData.map((week) => {
                return (
                  <MonthCalWeek today={today} origin={origin} week={week} />
                );
              })
            : 'loading'}
        </MonthCalBody>
      </View>
    </>
  );
}

export default Month;
