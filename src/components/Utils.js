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
