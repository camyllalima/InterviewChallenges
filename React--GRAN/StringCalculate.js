function MathChallenge(str) {
  let param = str.replace(/\)\(/g, ")*(");
  param = param.replace(/(\d+)\(/g, "$1*(");

  try {
    return Function('"use strict"; return (' + param + ")")();
  } catch (e) {
    return "Invalid Expression";
  }
}

console.log(MathChallenge(readline()));
