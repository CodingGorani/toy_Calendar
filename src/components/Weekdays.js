import styled from 'styled-components';

const WeekdayBar = styled.header`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: right;
`;

function Weekdays() {
  return (
    <WeekdayBar>
      <div>일</div>
      <div>월</div>
      <div>화</div>
      <div>수</div>
      <div>목</div>
      <div>금</div>
      <div>토</div>
    </WeekdayBar>
  );
}

export default Weekdays;