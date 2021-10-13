export const composeOneMonth = (today) => {
  let oneWeekCalendars = [];
  const firstWeekDifference = -Math.round(
    today.diff(today.startOf('month'), 'weeks').toObject().weeks
  );
  const lastWeekDifference = -Math.round(
    today.diff(today.endOf('month'), 'weeks').toObject().weeks
  );
  for (let i = firstWeekDifference; i <= lastWeekDifference; i++) {
    const firstDayOfWeek = today
      .plus({ weeks: i })
      .startOf('week')
      .minus({ day: 1 });
    const oneWeek = Array(7)
      .fill()
      .map((_, i) => {
        return firstDayOfWeek.plus({ days: i });
      });
    oneWeekCalendars.push(oneWeek);
  }

  return oneWeekCalendars;
};
