const makeTypist = (callback) => {
  const rate = 120;
  let timer = null;
  let currentChar = 0;
  let output = '';

  const unmount = () => {
    clearInterval(timer);
    timer = null;
  };

  const typeChar = (char) => {
    output += char;
    callback(output);
    currentChar += 1;
  };

  const deleteChar = () => {
    output = output.slice(0, -1);
    callback(output);
    currentChar -= 1;
  };

  return {
    stop() {
      unmount();
    },

    wait(t) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(), t);
      });
    },

    type(string) {
      return new Promise((resolve) => {
        let n = 0;

        timer = setInterval(() => {
          if (n >= string.length) {
            unmount();
            resolve();
            return;
          }

          typeChar(string[n]);
          n += 1;
        }, rate);
      });
    },

    backspace(n) {
      return new Promise((resolve) => {
        const initLength = output.length;

        timer = setInterval(() => {
          if (currentChar === initLength - n) {
            unmount();
            resolve();
            return;
          }

          deleteChar();
        }, rate);
      });
    },
  };
};

export default makeTypist;
