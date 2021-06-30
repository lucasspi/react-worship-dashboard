import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const TeamDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-default" */ "./Default")
);
const Modalidade = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-content" */ "./Modalidade")
);
const Integrante = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-content" */ "./Integrante")
);

const Dashboards = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/default`} />
      <Route
        path={`${match.url}/default`}
        render={(props) => <TeamDefault {...props} />}
      />
      <Route
        path={`${match.url}/modalidade`}
        render={(props) => <Modalidade {...props} />}
      />
      <Route
        path={`${match.url}/integrante`}
        render={(props) => <Integrante {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Dashboards;
