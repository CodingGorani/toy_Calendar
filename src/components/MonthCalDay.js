import React, { useState } from 'react';
import styled from 'styled-components';

const DayRec = styled.section`
  display: flex;
  border-right: ${(props) => (props.rightEdge ? 0 : '0.5px')} solid
    rgba(0, 0, 0, 0.1);
  border-bottom: ${(props) => (props.bottomEdge ? 0 : '0.5px')} solid
    rgba(0, 0, 0, 0.1);
  background: white;
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

function MonthCalDay({ today, origin, day, index }) {
  const setDayLetterColor = () => {
    let letterColor;
    if (!day.hasSame(origin, 'month')) {
      letterColor = 'rgba(0,0,0, 0.2';
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
    <DayRec rightEdge={index % 7 === 6} bottomEdge={index >= 35 && index <= 41}>
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
