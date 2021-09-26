export const getOneMonthCalendar = (date) =>
  Array(42)
    .fill()
    .map((_, i) =>
      date
        .startOf('month')
        .startOf('week')
        .plus({ days: i - 1 })
    );
