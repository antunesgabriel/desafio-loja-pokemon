import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppRouteItem } from "types/route";
// import StoreLayout from "layout/store.layout";

function AppRoutes({ routes }: { routes: AppRouteItem[] }): React.ReactElement {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, component: Component, key }) => (
          <Route path={path} exact component={Component} key={key} />
        ))}
      </Switch>
    </Router>
  );
}

export default AppRoutes;
