function areValuesPresent(arr, values) {
    return values.every(value => arr.includes(value));
}
Usage
arr is the array you want to check against.
values is an array of values you want to check for presence in arr.
Example
javascript
Copy code
const arr = [1, 2, 3, 4, 5];
const values1 = [2, 4];
const values2 = [2, 6];

console.log(areValuesPresent(arr, values1)); // Output: true
console.log(areValuesPresent(arr, values2)); // Output: false
