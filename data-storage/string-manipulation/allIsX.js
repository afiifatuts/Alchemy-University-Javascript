function isAllX(string) {
  if (typeof string !== "string") {
    return false;
  }

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== "x" && string[i] !== "X") {
      return false;
    }
  }
  return true;
}

module.exports = isAllX;
