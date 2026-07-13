import { useState, useEffect, useRef } from "react";

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

export function useDebounce<T>(value: T, delay: number = 300) {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
}
