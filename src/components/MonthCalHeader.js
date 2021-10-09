import styled from 'styled-components';

const WeekdayBar = styled.header`
  position: relative;
  padding: 0;
  max-width: 1000px;
  height: 25px;
  display: flex;
`;

const WeekdayRec = styled.div`
  color: black;
  flex: 1 1;
  text-align: center;
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
