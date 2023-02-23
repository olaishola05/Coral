import * as React from 'react';

const useToggle = (initialValue: boolean) => {
  const [value, setValue] = React.useState(initialValue);
  const toggle = React.useCallback(() => setValue((value) => !value), []);
  return [value, toggle] as const;
}

export default useToggle;