import { useEffect, useRef } from "react";

type Callback = () => void;

export function useOutsideClick<T extends HTMLElement>(callback: Callback) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClick = (e: Event) => {
      if (ref.current && !ref.current?.contains(e.target as Node)) {
        callback();
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);

  return ref;
}
