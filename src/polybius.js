// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  // offset x & y by one in order to utilize 1-5 as opposed to 0-4
  const grid = [
    ["a", "f", "l", "q", "v"],
    ["b", "g", "m", "r", "w"],
    ["c", "h", "n", "s", "x"],
    ["d", "i/j", "o", "t", "y"],
    ["e", "k", "p", "u", "z"],
  ];

  function polybiusEncode(input) {
    input = input.toLowerCase();
    /*let result = "";

    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (char === "i" || char === "j") {
        result += 42;
      } else if (char === " ") {
        result += char;
      } else {
        for (let x = 1; x < grid.length; x++) {
          const charIndex = grid[x].indexOf(char);
          if (charIndex !== -1) {
            result += `${x}${charIndex}`;
          }
        }
      }
    }*/

    let result = "";
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      switch (char) {
        case "i":
        case "j":
          result += 42;
          break;
        case " ":
          result += char;
          break;
        default:
          for (let y = 0; grid.length; y++) {
            const x = grid[y].indexOf(char);
            if (x !== -1) {
              result += `${y + 1}${x + 1}`
              break
            };
          }
      }
    }
    return result;
  }

  function polybiusDecode(input) {
    input = input.toLowerCase().split(" ");

    // Ensure the number lengths are even
    const totalLengthAllNumbers = input.reduce((total, numbers) => {
      total += numbers.length;
      return total;
    }, 0);
    if ((totalLengthAllNumbers % 2) != 0) return false;

    const result = [];
    input.forEach((number) => {
      let str = "";
      // Increment by two to check number pairs
      for (let i = 0; i < number.length; i += 2) {
        const j = i + 2;
        const coordinates = number.slice(i, j);
        const x = coordinates[1] - 1;
        const y = coordinates[0] - 1;
        str += grid[y][x];      
      }
      result.push(str);
    });
    return result.join(" ");
  }

  function polybius(input, encode = true) {
    if (encode) {
      return polybiusEncode(input);
    } else {
      return polybiusDecode(input);
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
