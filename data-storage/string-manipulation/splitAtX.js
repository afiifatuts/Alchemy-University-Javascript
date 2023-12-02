function splitAtX(string) {
  let x = string.indexOf("x");
  let beforeX = string.slice(0, x);
  let afterX = string.slice(x + 1);

  if (beforeX.length > afterX.length) {
    return beforeX;
  } else {
    return afterX;
  }
}

console.log(splitAtX("Happyxdays"))
console.log(splitAtX("10xDeveloper"))
