export function setItem(key: string, value: any): void {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key: string): any {
  const value = sessionStorage.getItem(key) || undefined;
  if (value) {
    return JSON.parse(value) as any;
  }
  return null;
}

export function deleteItem(key: string) {
  sessionStorage.removeItem(key);
}

export function clear() {
  sessionStorage.clear();
}
