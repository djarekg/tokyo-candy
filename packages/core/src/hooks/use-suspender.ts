export const useSuspender = () => {
  const { promise, resolve } = Promise.withResolvers<unknown>();

  return {
    load() {
      throw promise;
    },
    complete() {
      resolve(void 0);
    },
  };
};
