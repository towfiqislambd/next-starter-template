// Hooks/useLocalStorage.ts
import { useState } from "react";
import { getItem, setItem, removeItem } from "@/lib/localStorage";

/**
 * A React hook to manage localStorage with state synchronization
 */
export default function useLocalStorage(
  key: string,
  initialValue: string | null
) {
  // Initialize state with localStorage value or fallback to initialValue
  const [value, setValue] = useState<string | null>(() => {
    const storedValue = getItem(key);
    return storedValue !== undefined ? storedValue : initialValue;
  });

  // Update both React state and localStorage
  const handleDispatch = (
    newValue: string | null | ((prev: string | null) => string | null)
  ) => {
    setValue(prev => {
      const finalValue =
        typeof newValue === "function" ? newValue(prev) : newValue;

      if (finalValue === null) {
        removeItem(key); // Clear if null
      } else {
        setItem(key, finalValue); // Update localStorage
      }

      return finalValue;
    });
  };

  // Clear both state and localStorage
  const clearState = () => {
    setValue(null);
    removeItem(key);
  };

  return [value, handleDispatch, clearState] as const;
}
