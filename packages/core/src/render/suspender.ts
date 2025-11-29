export const suspender = () => {
  const API_DELAY = 1000;
  let done = false;
  let promise: Promise<unknown> | null = null;

  return {
    read() {
      if (done) {
        return;
      }

      if (promise) {
        throw promise;
      }

      promise = new Promise(resolve => {
        setTimeout(() => {
          done = true;
          promise = null;
          resolve(void 0);
        }, API_DELAY);
      });

      throw promise;
    },
  };
};
