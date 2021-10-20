import { useCallback, useEffect, useState } from "react";

import { Pokemon } from "types/pokemon";

import useSDK from "./useSDK";

export default function useBasket() {
  const { site } = useSDK();
  const [basket, setBasket] = useState<Pokemon[]>([]);

  const addInBasket = useCallback((selected: Pokemon) => {
    setBasket((oldState) => [...oldState, selected]);
  }, []);

  const removeFromBasket = useCallback((remove: Pokemon) => {
    setBasket((oldState) => oldState.filter((i) => i.name !== remove.name));
  }, []);

  useEffect(() => {
    const recovery = localStorage.getItem(`${site.type}/basket`);

    setBasket(recovery ? JSON.parse(recovery) : []);
  }, [site]);

  return { basket, addInBasket, removeFromBasket };
}
