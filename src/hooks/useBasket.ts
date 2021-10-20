import { useCallback, useEffect, useState } from "react";

import { Pokemon } from "types/pokemon";

import useSDK from "./useSDK";

export default function useBasket() {
  const { site } = useSDK();
  const [basket, setBasket] = useState<Pokemon[]>([]);

  const addInBasket = useCallback(
    (selected: Pokemon) => {
      setBasket((oldState) => {
        const newState = [...oldState, selected];
        localStorage.setItem(`${site.type}/basket`, JSON.stringify(newState));
        return newState;
      });
    },
    [site]
  );

  const removeFromBasket = useCallback(
    (remove: Pokemon) => {
      setBasket((oldState) => {
        const newState = oldState.filter((i) => i.name !== remove.name);
        localStorage.setItem(`${site.type}/basket`, JSON.stringify(newState));

        return newState;
      });
    },
    [site]
  );

  useEffect(() => {
    const recovery = localStorage.getItem(`${site.type}/basket`);

    setBasket(recovery ? JSON.parse(recovery) : []);
  }, [site]);

  return { basket, addInBasket, removeFromBasket };
}
