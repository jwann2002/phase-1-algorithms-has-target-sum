function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    // Inner loop to check against each subsequent element
    for (let j = i + 1; j < array.length; j++) {
        // Check if the sum of the current pair equals the target
        if (array[i] + array[j] === target) {
            return true; // Return true if a pair is found
        }
    }
}
return false; // Return false if no pair is found
  // Write your algorithm here
}
// Test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25));   // true
console.log(hasTargetSum([1, 2, 5], 4));             // false

/* Time Complexity: O(n^2) - The function uses nested loops to check every possible pair of numbers in the array, resulting in a quadratic time complexity.

Pseudocode:
1. Define a function called hasTargetSum that takes an array and a target integer as arguments.
2. Loop through each element in the array using a for loop.
3. Inside the first loop, use another nested loop to iterate over each subsequent element in the array.
4. For each pair of elements, check if their sum equals the target integer.
5. If a pair is found with a sum equal to the target, return true.
6. If no pair is found after checking all possible combinations, return false.

Explanation:
The function iterates over each element in the array and compares it with every subsequent element to check if their sum equals the target. This process is repeated for each element in the array, resulting in a quadratic time complexity of O(n^2).
 */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
