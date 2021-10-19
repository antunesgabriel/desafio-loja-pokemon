import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PageLoading from "components/page_loading/page_loading.component";
import { AppRouteItem } from "types/route";
// import StoreLayout from "layout/store.layout";

function AppRoutes({ routes }: { routes: AppRouteItem[] }): React.ReactElement {
  return (
    <Suspense fallback={<PageLoading />}>
      <Router>
        <Switch>
          {routes.map(({ path, component: Component, key }) => (
            <Route path={path} exact component={Component} key={key} />
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default AppRoutes;
