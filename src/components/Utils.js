// [[1주], [2주], [3주]....]
// 이중배열을 이용한다.
// 자신이 속해있는 주의 앞으로 25주, 뒤로 25주 불러온다.
const weekDiffFromFirstdayOfTwoMonthBefore = (today) => {
  let firstDayOfTwoMonthBefore = today.minus({ months: 2 }).startOf('month');
  let result = -today.diff(firstDayOfTwoMonthBefore, 'weeks').toObject().weeks;
  if (firstDayOfTwoMonthBefore.weekday === 7) {
    return result + 1;
  }
  return result;
};
const weekDiffFromLastdayOfTwoMonthLater = (today) => {
  let lastDayOfTwoMonthLater = today
    .plus({ months: 2 })
    .startOf('month')
    .plus({ weeks: 6 });

  let result = -today.diff(lastDayOfTwoMonthLater, 'weeks').toObject().weeks;
  if (lastDayOfTwoMonthLater.weekday === 7) {
    return result + 1;
  }
  return result;
};

const isFirstWeekOfMonth = (firstDay, lastDay) => {
  return (
    firstDay.hasSame(firstDay.startOf('month'), 'day') ||
    !firstDay.hasSame(lastDay, 'month')
  );
};

export const composeCalendarWithWeeks = (date) => {
  let resultObj = {
    calendars: undefined,
    firstWeeks: undefined,
  };
  let calendars = [];
  let firstWeeks = [];

  for (
    let i = weekDiffFromFirstdayOfTwoMonthBefore(date);
    i <= weekDiffFromLastdayOfTwoMonthLater(date);
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

  calendars.map((el, idx) => {
    if (isFirstWeekOfMonth(el[0], el[6])) {
      firstWeeks.push(idx);
    }
  });

  resultObj.calendars = calendars;
  resultObj.firstWeeks = firstWeeks;

  return resultObj;
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
