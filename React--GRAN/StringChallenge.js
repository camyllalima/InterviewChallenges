function StringChallenge(str, num) {
  const ChallengeToken = "hpzevq0ufcb";

  const shiftChar = (char, shift) => {
    if (char >= "a" && char <= "z") {
      return String.fromCharCode(
        ((((char.charCodeAt(0) - "a".charCodeAt(0) + shift) % 26) + 26) % 26) +
          "a".charCodeAt(0)
      );
    }

    if (char >= "A" && char <= "Z") {
      return String.fromCharCode(
        ((((char.charCodeAt(0) - "A".charCodeAt(0) + shift) % 26) + 26) % 26) +
          "A".charCodeAt(0)
      );
    }

    return char;
  };

  const shiftedString = str
    .split("")
    .map((char) => shiftChar(char, num))
    .join("");

  const reversedString = shiftedString.split("").reverse().join("");
  const reversedToken = ChallengeToken.split("").reverse().join("");

  const result = `${reversedString}:${reversedToken}`;
  return result;
}

console.log(StringChallenge(readline()));
