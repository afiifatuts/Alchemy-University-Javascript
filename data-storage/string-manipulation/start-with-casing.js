function startsWithX(string) {
  let firstChar = string.charAt(0);
  let toLower = firstChar.toLowerCase();
  if (toLower === "x") {
    return true;
  } else {
    return false;
  }
}

module.exports = startsWithX;
