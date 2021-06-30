import React, { Suspense } from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import store from "./store/index";

const ViewUser = React.lazy(() => import("./views/app"));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Suspense fallback={<div className="loading" />}>
          <Router>
            <Switch>
              <Route path="/app" render={(props) => <ViewUser {...props} />} />
              <Redirect to="/app" />
            </Switch>
          </Router>
        </Suspense>
      </Provider>
    </div>
  );
}

export default App;
