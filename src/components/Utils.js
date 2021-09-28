// [[1주], [2주], [3주]....]
// 이중배열을 이용한다.
// 자신이 속해있는 주의 앞으로 25주, 뒤로 25주 불러온다.

export const composeCalendarWithWeeks = (date) => {
  let calendars = [];
  for (let i = -50; i <= 50; i++) {
    const firstDayOfWeek = date
      .plus({ weeks: i })
      .startOf('week')
      .minus({ day: 1 });
    calendars.push(
      Array(7)
        .fill()
        .map((_, i) => {
          return firstDayOfWeek.plus({ days: i });
        })
    );
  }
  return calendars;
};

export const getOneMonthCalendar = (date) => {
  const firstDay = date.startOf('month');
  return Array(42)
    .fill()
    .map((_, i) => {
      if (firstDay.weekday === 7) {
        return firstDay.plus({ days: i });
      } else {
        return firstDay.startOf('week').plus({ days: i - 1 });
      }
    });
};

export const get21MonthCalendar = (date) => {
  let calendars = [];
  for (let i = -10; i <= 10; i++) {
    const firstDay = date.plus({ months: i }).startOf('month');
    const calendar = Array(42)
      .fill()
      .map((_, i) => {
        if (firstDay.weekday === 7) {
          return firstDay.plus({ days: i });
        } else {
          return firstDay.startOf('week').plus({ days: i - 1 });
        }
      });
    calendars.push(calendar);
  }

  return calendars;
};
