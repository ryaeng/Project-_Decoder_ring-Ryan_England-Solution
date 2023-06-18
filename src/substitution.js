// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const alphabetProper = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const containsUniqueCharacters = (alphabet) => {
    // The variable that contains the unique values
    let unique = "";
    
    for (let i = 0; i < alphabet.length; i++) {
      const char = alphabet[i];
      // Checking if the uniq contains the character
      if (unique.indexOf(char) !== -1) {
        // If uniq includes the character
        // return false
        return false;
      } else {
        // Otherwise append the character to uniq
        unique += char;
      }
    }
    return true;
  }

  function substitutionEncode(message, alphabet = "") {
    // Expect false if the alphabet includes repeating characters
    const unique = containsUniqueCharacters(alphabet);
    if (alphabet.length !== 26 || !unique) return false;

    let result = "";
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      // Preserve spaces
      if (char === " ") {
        result += char;
        continue;
      }
      // Use the index number of the character from alphabet proper
      // to select the character from the alphabet provided
      charIndex = alphabetProper.indexOf(char);
      result += alphabet[charIndex];
    }
    return result;
  }

  function substitutionDecode(message, alphabet) {
    let result = "";
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      // Preserve spaces
      if (char === " ") {
        result += char;
        continue;
      }
      // Use the index number of the character from alphabet provided
      // to select the character from the alphabet proper
      charIndex = alphabet.indexOf(char);
      result += alphabetProper[charIndex];
    }
    return result;
  }

  function substitution(message, alphabet, encode = true) {
    // your solution code here
   if(encode) {
    return substitutionEncode(message, alphabet);
   } else {
    return substitutionDecode(message, alphabet);
   }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
