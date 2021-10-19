import { Site } from "types/site";
import { site } from "drivers/loader";

import {
  useListPokemon,
  UseListPokemon,
  usePokemon,
  UsePokemon,
} from "./services/pokemon";

type SDK = {
  site: Site;
  useListPokemon: UseListPokemon;
  usePokemon: UsePokemon;
};

export default function useSDK(): SDK {
  return { site, useListPokemon, usePokemon };
}
