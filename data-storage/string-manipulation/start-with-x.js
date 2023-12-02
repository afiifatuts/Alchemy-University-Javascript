function startsWithX(string) {
  let firstChar = string.charAt(0);
  if (firstChar === "x") {
    return true;
  } else {
    return false;
  }
}

module.exports = startsWithX;
