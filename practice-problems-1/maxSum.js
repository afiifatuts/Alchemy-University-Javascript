function maxSum(num) {
  let result = 0;
  for (i = 1; i <= num; i++) {
    // result =result+i;
    console.log("result =", result);
    console.log("i =", i);

    result += i;
  }
  return result;
}

console.log(maxSum(5));
