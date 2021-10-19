import { Site } from "types/site";
import { site } from "drivers/loader";

type SDK = {
  site: Site;
};

export default function useSDK(): SDK {
  return { site };
}
