import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Portal from './pages/Portal';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Portal} />
    </Switch>
  );
}
