import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import StoreLayout from "layout/store.layout";
import { AppRouteItem } from "types/route";

function AppRoutes({ routes }: { routes: AppRouteItem[] }): React.ReactElement {
  return (
    <Router>
      <StoreLayout>
        <Switch>
          {routes.map(({ path, component: Component, key }) => (
            <Route path={path} exact component={Component} key={key} />
          ))}
        </Switch>
      </StoreLayout>
    </Router>
  );
}

export default AppRoutes;
