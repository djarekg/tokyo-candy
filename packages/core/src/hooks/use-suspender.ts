import { useState } from 'react';

export const useSuspender = () => {
  const [loading, setLoading] = useState(false);
  const { promise, resolve } = Promise.withResolvers<unknown>();

  return {
    load() {
      setLoading(true);
      throw promise;
    },
    complete() {
      if (loading) {
        resolve(void 0);
        setLoading(false);
      }
    },
  };
};
