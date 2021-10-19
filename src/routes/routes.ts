import { lazy } from "react";
import { AppRouteItem } from "types/route";

const HomePage = lazy(() => import("pages/home/home.page"));

const routes: AppRouteItem[] = [
  {
    key: "/home",
    path: "/",
    title: "Pokémon Store",
    component: HomePage,
  },
];

export default routes;
