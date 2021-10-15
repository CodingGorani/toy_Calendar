export const composeOneMonthWith6Weeks = (today) => {
  const firstDay = today.startOf('month').startOf('week').minus({ days: 1 });
  let adder = 0;
  return Array(6)
    .fill()
    .map((_) => {
      return Array(7)
        .fill()
        .map((_) => {
          const result = firstDay.plus({ days: adder });
          adder++;
          return result;
        });
    });
};
