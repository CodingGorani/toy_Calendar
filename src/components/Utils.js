// [[1주], [2주], [3주]....]
// 이중배열을 이용한다.
// 자신이 속해있는 주의 앞으로 25주, 뒤로 25주 불러온다.

export const composeCalendarWithWeeks = (date) => {
  let calendars = [];
  const weekDiffFromFirstdayOfOneMonthBefore = (today) => {
    let firstDay = today.minus({ months: 1 }).startOf('month');
    let result = firstDay.weekNumber - today.weekNumber;
    if (firstDay.weekday === 7) {
      return result + 1;
    }
    return result;
  };
  const weekDiffFromLastdayOfOneMonthLater = (today) => {
    let lastDay = today.plus({ months: 1 }).endOf('month');
    let result = lastDay.weekNumber - today.weekNumber;
    if (lastDay.weekday === 7) {
      return result + 1;
    }
    return result;
  };
  console.group('composeCalendarWithWeeks');
  console.log(weekDiffFromFirstdayOfOneMonthBefore(date));
  console.log(weekDiffFromLastdayOfOneMonthLater(date));
  console.groupEnd();

  for (
    let i = weekDiffFromFirstdayOfOneMonthBefore(date);
    i <= weekDiffFromLastdayOfOneMonthLater(date);
    i++
  ) {
    const firstDayOfWeek = date
      .plus({ weeks: i })
      .startOf('week')
      .minus({ day: 1 });
    calendars.push(
      Array(7)
        .fill()
        .map((_, index) => {
          return firstDayOfWeek.plus({ days: index });
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

export const get5MonthCalendar = (date) => {
  let calendars = [];
  for (let i = -2; i <= 2; i++) {
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
