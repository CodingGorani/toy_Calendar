import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DateTime } from 'luxon';

console.log(
  DateTime.now()
    .setZone('America/New_York')
    .minus({ weeks: 1 })
    .endOf('day')
    .toISO()
);

ReactDOM.render(<App />, document.getElementById('root'));
