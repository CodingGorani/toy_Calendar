import { DateTime } from 'luxon';

console.log(
  DateTime.now()
    .setZone('America/New_York')
    .minus({ weeks: 1 })
    .endOf('day')
    .toISO()
);
