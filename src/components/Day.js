import React, { useState } from 'react';
import styled from 'styled-components';

const DayRec = styled.section`
  border: 0.5px dotted;
`;

function Day({ month, day }) {
  const setDayLetterColor = () => {
    let letterColor;
    if (day.month !== month) {
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
      <h3 style={setDayLetterColor()}>{day.day}</h3>
    </DayRec>
  );
}

export default Day;
