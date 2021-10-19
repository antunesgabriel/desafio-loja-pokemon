import { lazy } from "react";

const getHostname = function () {
  return window.location.hostname;
};

const loadSite = () => {
  const hostname = `${getHostname()}.json`;
  try {
    return require("@config/sites/" + hostname);
  } catch (e) {
    console.error(`ERROR: there is no site configured for domain ${hostname}`);
    return {};
  }
};

const site = loadSite();

export function loadStoreProvider(pathComponent: string) {
  return lazy(() => import("providers/" + site.path + pathComponent));
}
