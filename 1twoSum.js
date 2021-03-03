// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Brute Force Solution

// We can use pointer a and b.
// Pointer a will start at index 0
// Pointer b will start one index ahead of pointer a
// Use for loop on pointer a
// Inside pointer a's for loop, use for loop on pointer b
// For each iteration of b, check if value at b plus value at a equal target
// If true return array containing both indices
// Else keep iterating b
// Once b reaches end of array, increment a and repeat
// If no solution when a reaches end of array, return null

const twoSum = (nums, target) => {
  for (let a = 0; a < nums.length; a++) {
    for (let b = a + 1; b < nums.length; b++) {
      if (nums[a] + nums[b] === target) {
        return [a, b];
      }
    }
  }
  return null;
};

// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Checking Examples
console.log(
  "twoSum([2, 7, 11, 15], 9) should be [0,1], result is: ",
  twoSum([2, 7, 11, 15], 9)
); // [0, 1]
console.log(
  "twoSum([3, 2, 4], 6) should be [1,2], result is: ",
  twoSum([3, 2, 4], 6)
); // [1, 2]
console.log(
  "twoSum([3, 3], 6) should be [0,1], result is: ",
  twoSum([3, 3], 6)
); // [0, 1]

// Optimized Solution

// We will use memoization to decrease our time complexity while increasing our space complexity
// We will use an object as a map which will keep track of values we are looking for in our array
// Key will be the value we are looking for in array
// Value will be the index (a) where the value (key) was generated
// We will have pointer a which will be used to iterate over our array using a for loop
// As we iterate through array, we check our map to see if a valid index exists for the value at a
// If the index is valid, then we return an array with the index and a
// If not valid, we calculate the number we are looking for in our array
// We then store the number as our key along with a as our value into our map
// We repeat until we find solution or reach end of array
// If we reach end of array, we return null since no solution was found

const twoSumOptimized = (nums, target) => {
  let map = {};
  for (let a = 0; a < nums.length; a++) {
    const currentNumIdx = map[nums[a]];
    if (currentNumIdx >= 0) {
      return [currentNumIdx, a];
    }
    const numToFind = target - nums[a];
    map[numToFind] = a;
  }
  return null;
};

// Time Complexity: O(n)
// Space Complexity: O(n)

// Checking Examples
console.log(
  "twoSumOptimized([2, 7, 11, 15], 9) should be [0,1], result is: ",
  twoSumOptimized([2, 7, 11, 15], 9)
); // [0, 1]
console.log(
  "twoSumOptimized([3, 2, 4], 6) should be [1,2], result is: ",
  twoSumOptimized([3, 2, 4], 6)
); // [1, 2]
console.log(
  "twoSumOptimized([3, 3], 6) should be [0,1], result is: ",
  twoSumOptimized([3, 3], 6)
); // [0, 1]
