import React, { useState, useEffect } from 'react';
import { getOneMonthCalendar } from './Utils';

function Month({ today }) {
  const [diff, setDiff] = useState(0);
  const [origin, setOrigin] = useState(today);

  useEffect(() => {
    setOrigin(today.plus({ month: diff }));
  }, [diff]);

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
      오늘은 {origin.month}월 {origin.day}일 입니다.
      <button name="next" onClick={handleDiffBtn}>
        후
      </button>
    </div>
  );
}

export default Month;
