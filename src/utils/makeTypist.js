const makeTypist = (string, callback) => {
  const rate = 120;
  let timer = null;
  let currentChar = 0;
  let output = '';

  const typeChar = () => {
    if (currentChar >= string.length) {
      return;
    }

    output += string[currentChar];
    callback(output);
    currentChar += 1;
  };

  return {
    type() {
      timer = setInterval(() => {
        typeChar();
      }, rate);
    },

    stop() {
      clearInterval(timer);
      timer = null;
    },
  };
};

export default makeTypist;
