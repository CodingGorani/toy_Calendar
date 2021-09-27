import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Weekdays from './Weekdays';
import { getOneMonthCalendar, get21MonthCalendar } from './Utils';
import MonthCal from './MonthCal';

function Month({ today }) {
  const [diff, setDiff] = useState(0);
  const [origin, setOrigin] = useState(today);
  const [months, setMonths] = useState(null);

  useEffect(() => {
    setOrigin(today.plus({ month: diff }));
  }, [diff]);

  useEffect(() => {
    setMonths(get21MonthCalendar(origin));
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

  console.log('함수?', get21MonthCalendar(origin));
  return (
    <>
      <button name="previous" onClick={handleDiffBtn}>
        전
      </button>
      오늘은 {origin.year}년 {origin.month}월 {origin.day}일 입니다.
      <button name="next" onClick={handleDiffBtn}>
        후
      </button>
      <Weekdays />
      {months.map((month) => {
        return <MonthCal today={today} origin={origin} days={month} />;
      })}
    </>
  );
}

export default Month;
