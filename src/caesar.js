// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesarEncode(input, shift) {
    const alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const lowerCaseInput = input.toLowerCase();
    let result = "";
    for (let i = 0; i < input.length; i++) {
      const char = lowerCaseInput[i];
      const charIndex = alphabet.indexOf(char);
      if (charIndex === -1) {
        result += char;
      } else {
        let shiftedCharIndex = charIndex + shift;
        if (shiftedCharIndex > 25) shiftedCharIndex += -26;
        if (shiftedCharIndex < 0) shiftedCharIndex += 26;
        result += alphabet[shiftedCharIndex];
      }
    }
    return result;
  }

  function caesarDecode(input, shift) {
    const alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const lowerCaseInput = input.toLowerCase();
    let result = "";
    for (let i = 0; i < input.length; i++) {
      const char = lowerCaseInput[i];
      const charIndex = alphabet.indexOf(char);
      if (charIndex === -1) {
        result += char;
      } else {
        let shiftedCharIndex = charIndex - shift;
        if (shiftedCharIndex > 25) shiftedCharIndex += -26;
        if (shiftedCharIndex < 0) shiftedCharIndex += 26;
        result += alphabet[shiftedCharIndex];
      }
    }
    return result;
  }

  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift > 25 || shift < -25) return false;

    if (encode) {
      return caesarEncode(input, shift);
    } else {
      return caesarDecode(input, shift);
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
