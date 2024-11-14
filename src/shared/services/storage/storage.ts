import cookie from 'js-cookie';

const saveStorage = (key: string, value: string) => cookie.set(key, value);
const getStorage = (key: string): string | null => cookie.get(key) ?? null;
const removeFromStorage = (key: string) => cookie.remove(key);

export { getStorage, removeFromStorage, saveStorage };
