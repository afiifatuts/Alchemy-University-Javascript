function numberOfKeys(object) {
  let count = 0;
  for (let key in object) {
    count++;
  }
  return count;
}

module.exports = numberOfKeys;
