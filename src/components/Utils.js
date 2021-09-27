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
    const firstDay = date.plus({ month: i }).startOf('month');
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
