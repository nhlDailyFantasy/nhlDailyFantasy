import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Dashboard from '../pages/dashboard/dashboard';
import Players from '../pages/players/players';
import Teams from '../pages/teams/teams';
import Standings from '../pages/standings/standings';
import Metrics from '../pages/advancedmetrics/metrics'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/teams" component={Teams} />
      <Route path="/standings" component={Standings} />
      <Route path="/metrics" component={Metrics} />
      <Route path="/players" component={Players} />

      <Route path="/dashboard" component={Dashboard} />

      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Dashboard} />
    </Switch>
  );
}
