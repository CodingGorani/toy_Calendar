import styled from 'styled-components';

const WeekdayBar = styled.header`
  position: fixed;
  width: 80%;
  max-width: 1000px;
  height: 50px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
`;

const WeekdayRec = styled.div`
  color: black;

  height: 100%;
  line-height: 50px;
`;

function MonthCalHeader() {
  return (
    <WeekdayBar>
      <WeekdayRec>일</WeekdayRec>
      <WeekdayRec>월</WeekdayRec>
      <WeekdayRec>화</WeekdayRec>
      <WeekdayRec>수</WeekdayRec>
      <WeekdayRec>목</WeekdayRec>
      <WeekdayRec>금</WeekdayRec>
      <WeekdayRec>토</WeekdayRec>
    </WeekdayBar>
  );
}

export default MonthCalHeader;
