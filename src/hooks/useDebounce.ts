import { useEffect } from "react";

let $event: NodeJS.Timeout;

export default function useDebounce(
  value: string,
  delay: number,
  fn: (text: string) => void
) {
  useEffect(() => {
    if ($event) {
      clearTimeout($event);
    }

    $event = setTimeout(() => {
      fn(value);
    }, delay);

    return () => {
      clearTimeout($event);
    };
  }, [value, delay, fn]);
}
