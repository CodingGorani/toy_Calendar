import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getOneMonthCalendar } from './Utils';
import Day from './Day';

const MonthCalendar = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

function Month({ today }) {
  const [diff, setDiff] = useState(0);
  const [origin, setOrigin] = useState(today);
  const [days, setDays] = useState(null);

  useEffect(() => {
    setOrigin(today.plus({ month: diff }));
  }, [diff]);

  useEffect(() => {
    setDays(getOneMonthCalendar(origin));
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

  console.log('함수?', getOneMonthCalendar(origin));
  return (
    <div>
      <button name="previous" onClick={handleDiffBtn}>
        전
      </button>
      오늘은 {origin.year}년 {origin.month}월 {origin.day}일 입니다.
      <button name="next" onClick={handleDiffBtn}>
        후
      </button>
      <MonthCalendar>
        {days
          ? days.map((dt) => <Day key={dt.ts} month={origin.month} day={dt} />)
          : 'loading'}
      </MonthCalendar>
    </div>
  );
}

export default Month;
