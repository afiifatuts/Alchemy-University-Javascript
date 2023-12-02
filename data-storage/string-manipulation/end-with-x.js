function endsWithX(string) {
  let totalChar = string.length;
  let lastChar = string.charAt(totalChar - 1);
  console.log(totalChar)
  console.log(lastChar)
  let lastCharlower = lastChar.toLowerCase();
  if (lastCharlower === "x") {
    return true;
  } else {
    return false;
  }
}

// module.exports = endsWithX;
console.log(endsWithX("abcX")); // Output: false
console.log(endsWithX("Hellox")); // Output: true
// module.exports = endsWithX;
