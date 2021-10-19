import { lazy } from "react";
import { Site } from "types/site";

const getHostname = function () {
  return window.location.hostname;
};

const loadSite = (): Site => {
  const hostname = `${getHostname()}.json`;
  try {
    return require("configs/sites/" + hostname);
  } catch (e) {
    console.error(`ERROR: there is no site configured for domain ${hostname}`);
    return {} as Site;
  }
};

export const site = loadSite();

export function loadStoreProvider(pathComponent: string) {
  return lazy(() => import("providers/" + site.path + pathComponent));
}
