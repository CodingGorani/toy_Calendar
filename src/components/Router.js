import React, { useState } from 'react';
import Month from './Month';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Day from './MonthCalDay';
import { DateTime } from 'luxon';

function AppRouter() {
  const [today, setToday] = useState(DateTime.now());

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Month today={today} />
        </Route>
        <Route exact path="/day">
          <Day today={today} />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
