// lib/localStorage.ts

/**
 * Safely saves data to localStorage
 */
export function setItem(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch (err) {
    console.error("LocalStorage setItem error:", err);
  }
}

/**
 * Safely retrieves data from localStorage
 */
export function getItem(key: string): string | undefined {
  try {
    const data = window.localStorage.getItem(key);
    return data ?? undefined;
  } catch (err) {
    console.error("LocalStorage getItem error:", err);
    return undefined;
  }
}

/**
 * Safely removes data from localStorage
 */
export function removeItem(key: string) {
  try {
    window.localStorage.removeItem(key);
  } catch (err) {
    console.error("LocalStorage removeItem error:", err);
  }
}
