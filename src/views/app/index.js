import React, { Suspense } from "react";
import AppLayout from "../../components/AppLayout";
import { Route, Switch, Redirect } from "react-router-dom";

const Teams = React.lazy(() => import("./teams"));

function AppRouter({ match }) {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Route
              path={`${match.url}/team`}
              render={(props) => <Teams {...props} />}
            />
          </Switch>
          <Redirect to="/app/team" />
        </Suspense>
      </div>
    </AppLayout>
  );
}

export default AppRouter;
