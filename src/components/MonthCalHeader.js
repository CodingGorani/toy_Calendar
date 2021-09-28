import styled from 'styled-components';

const WeekdayBar = styled.header`
  position: fixed;
  width: 95vw;
  height: 50px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
`;

const WeekdayRec = styled.div`
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border-width: 0 0.5px 0.5px 0;
  border-style: solid;
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
