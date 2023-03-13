import { useState } from 'react';

const useLocalStorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = window.localStorage.getItem(key);
      console.log(storedValue);
      return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  }
  );

  const setStoredValue = (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value(value) : value;
      setValue(valueToStore);

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }

  }
  return [value, setStoredValue] as const;
}

export default useLocalStorage;