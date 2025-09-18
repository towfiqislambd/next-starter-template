export function setItem(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch (err) {
    console.error("LocalStorage setItem error:", err);
  }
}

export function getItem(key: string): string | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }

  try {
    const data = window.localStorage.getItem(key);
    return data ?? undefined;
  } catch (err) {
    console.error("LocalStorage getItem error:", err);
    return undefined;
  }
}

export function removeItem(key: string) {
  try {
    window.localStorage.removeItem(key);
  } catch (err) {
    console.error("LocalStorage removeItem error:", err);
  }
}
