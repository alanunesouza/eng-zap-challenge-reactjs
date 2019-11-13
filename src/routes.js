import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Portal from './pages/Portal';
import PortalDetails from './pages/PortalDetails';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Portal} />
      <Route path="/details/:portalId" exact component={PortalDetails} />
    </Switch>
  );
}
