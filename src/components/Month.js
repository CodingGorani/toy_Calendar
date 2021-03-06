import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MonthCalHeader from './MonthCalHeader';
import MonthCalBody from './MonthCalBody';
import { composeOneMonthWith6Weeks } from './Utils';

const View = styled.div`
  padding: 3em;
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
  const [action, setAction] = useState(undefined);
  const [origin, setOrigin] = useState(today);
  const [weekCalendars, setWeekCalendars] = useState(() =>
    composeOneMonthWith6Weeks(today)
  );

  useEffect(() => {
    setWeekCalendars(composeOneMonthWith6Weeks(origin));
  }, [origin]);

  useEffect(() => {
    if (action === 'previous') {
      setOrigin((prev) => prev.minus({ month: 1 }));
      console.log('previous 작동');
    } else if (action === 'next') {
      setOrigin((prev) => prev.plus({ month: 1 }));
      console.log('next 작동');
    } else if (action === 'today') {
      setOrigin(today);
      console.log('today 작동');
    }
  }, [action]);

  useEffect(() => {
    setAction(undefined);
  });

  const handleDiff = (string) => {
    if (action !== undefined) {
      setAction(undefined);
    }
    setAction(string);
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
      <button
        name="today"
        onClick={() => {
          handleDiff('today');
        }}
      >
        오늘
      </button>
      <button
        name="next"
        onClick={() => {
          handleDiff('next');
        }}
      >
        후
      </button>
      <h1>
        {origin.year}년 {origin.month}월
      </h1>
      <View>
        <MonthCalBody
          handleDiff={handleDiff}
          today={today}
          origin={origin}
          weeksData={weekCalendars}
        />
      </View>
    </>
  );
}

export default Month;
