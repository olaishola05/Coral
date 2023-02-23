// create a reusable hook to show messages

import { useState } from 'react';

const useMessage = () => {
  const [msg, setMsg] = useState('');

  return [msg, setMsg] as const;
}

export default useMessage;