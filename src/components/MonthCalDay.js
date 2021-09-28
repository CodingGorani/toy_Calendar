import React, { useState } from 'react';
import styled from 'styled-components';

const DayRec = styled.section`
  display: flex;
  border-width: 0px 0.5px 0.5px 0px;
  border-style: solid;
`;

const TodayMarked = styled.div`
  background: red;
  color: white;
  width: 3em;
  height: 3em;
  border-radius: 1.5em;
  text-align: center;
  line-height: 1em;
`;

function MonthCalDay({ today, origin, day }) {
  const setDayLetterColor = () => {
    let letterColor;
    if (!day.hasSame(origin, 'month')) {
      letterColor = 'grey';
    } else if (day.weekday === 7) {
      letterColor = 'red';
    } else if (day.weekday === 6) {
      letterColor = 'blue';
    } else {
      letterColor = 'black';
    }

    return { color: letterColor };
  };
  return (
    <DayRec>
      {day.hasSame(today, 'day') ? (
        <TodayMarked>
          <h3>{day.day}일</h3>
        </TodayMarked>
      ) : (
        <h3 style={setDayLetterColor()}>
          {day.day === 1 ? `${day.month}월 ${day.day}일` : `${day.day}일`}
        </h3>
      )}
    </DayRec>
  );
}

export default MonthCalDay;
