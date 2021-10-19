import { useQuery, UseQueryResult } from "react-query";

import client from "configs/client";
import { site } from "drivers/loader";

export type UseListPokemon = () => UseQueryResult<PokeType[], unknown>;
export type UsePokemon = (
  name: string
) => UseQueryResult<PokeDetailsPayload, unknown>;

type PokeType = {
  pokemon: {
    name: string;
    url: string;
  };
  slot: number;
};

type TypeEndpointPayload = {
  name: string;
  id: number;
  pokemon: PokeType[];
};

type PokeDetailsPayload = {
  sprites: {
    front_default: string;
  };
};

const _requestListPokemon = async () => {
  const { data } = await client.get<TypeEndpointPayload>(`type/${site.type}`);

  return data.pokemon;
};

export const useListPokemon = () => {
  return useQuery(`${site.type}_list`, _requestListPokemon);
};

export const usePokemon = (name: string) => {
  const _requestPokemonDetails = async () => {
    const { data } = await client.get<PokeDetailsPayload>(`pokemon/${name}`);

    return data;
  };

  return useQuery(name, _requestPokemonDetails);
};
