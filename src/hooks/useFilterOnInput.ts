import { useCallback, useEffect, useState } from "react";

import useDebounce from "./useDebounce";

type UseFilterOnInpurReturns = {
  search: string;
  handleChangeValue: (
    $e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export default function useFilterOnInput<T>(
  items: Array<T>,
  pathToFilter: string[]
): UseFilterOnInpurReturns & { filtered: T[] } {
  const [filtered, setFiltered] = useState<T[]>(items);
  const [search, setSearch] = useState("");

  const execFilter = useCallback(
    (name: string) => {
      if (!name.trim()) {
        return setFiltered(items);
      }

      setFiltered(
        items.filter((item: any) => {
          let finded: any = item;
          let contains = false;

          pathToFilter.forEach((path, idx) => {
            if (finded && finded[path]) {
              finded = finded[path];

              if (idx === pathToFilter.length - 1) {
                contains = finded.indexOf(name) !== -1;
              }
            } else {
              finded = null;
            }
          });

          return contains;
        })
      );
    },
    [items, pathToFilter]
  );

  useDebounce(search, 1000, execFilter);

  const handleChangeValue = useCallback(
    ($e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = $e.target;
      setSearch(value);
    },
    []
  );

  useEffect(() => {
    setFiltered(items);
  }, [items]);

  return {
    search,
    handleChangeValue,
    filtered,
  };
}
