import { useState } from "react";
import { getItem, setItem, removeItem } from "@/lib/localStorage";

export default function useLocalStorage(
  key: string,
  initialValue: string | null
) {
  const [value, setValue] = useState<string | null>(() => {
    const storedValue = getItem(key);
    return storedValue !== undefined ? storedValue : initialValue;
  });

  const handleDispatch = (
    newValue: string | null | ((prev: string | null) => string | null)
  ) => {
    setValue(prev => {
      const finalValue =
        typeof newValue === "function" ? newValue(prev) : newValue;

      if (finalValue === null) {
        removeItem(key);
      } else {
        setItem(key, finalValue);
      }

      return finalValue;
    });
  };

  const clearState = () => {
    setValue(null);
    removeItem(key);
  };

  return [value, handleDispatch, clearState] as const;
}
