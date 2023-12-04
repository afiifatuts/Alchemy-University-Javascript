function removeOccurrences(array, num) {
    let i = 0;

    while (i < array.length) {
        if (array[i] === num) {
            array.splice(i, 1);
        } else {
            i++;
        }
    }
}

// Example usage:
const array = [1, 2, 3, 1];
removeOccurrences(array, 1);
console.log(array); // Output: [2, 3]
