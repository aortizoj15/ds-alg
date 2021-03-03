// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
// Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Example 1
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
// In this case, the max area of water (blue section) the container can contain is 49.

// Example 2
// Input: height = [1,1]
// Output: 1

// Example 3
// Input: height = [4,3,2,1,4]
// Output: 16

// Example 4
// Input: height = [1,2,1]
// Output: 2

// Brute Force Solution

const maxArea = (nums) => {
  let max = 0;
  for (let a = 0; a < nums.length; a++) {
    for (let b = a + 1; b < nums.length; b++) {
      const height = Math.min(nums[a], nums[b]);
      const width = b - a;
      const area = height * width;
      max = Math.max(max, area);
    }
  }
  return max;
};

// Checking Examples
console.log(
  "maxArea([1,8,6,2,5,4,8,3,7]) should be 49, result is: ",
  maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
); // 49
console.log("maxArea([1,1]) should be 1, result is: ", maxArea([1, 1])); // 1
console.log(
  "maxArea([4,3,2,1,4]) should be 16, result is: ",
  maxArea([4, 3, 2, 1, 4])
); // 16
console.log("maxArea([1,2,1]) should be 2, result is: ", maxArea([1, 2, 1])); // 2
