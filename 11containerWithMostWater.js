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

// Initialize max
// Use two pointers, a and b
// Initialize pointer a at 0 to be used by outer for loop
// Initialize pointer b at a + 1 to be used by inner for loop
// Calculate area using values at pointers
// Use Math.max to store the higher value between the calculated area and the current max area
// Once pointer b reaches the end of input array, a will move forward
// Repeat until a reaches end of input array
// Return max

const containerWithMostWater = (nums) => {
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

// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Checking Examples
console.log(
  "containerWithMostWater([1,8,6,2,5,4,8,3,7]) should be 49, result is: ",
  containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])
); // 49
console.log(
  "containerWithMostWater([1,1]) should be 1, result is: ",
  containerWithMostWater([1, 1])
); // 1
console.log(
  "containerWithMostWater([4,3,2,1,4]) should be 16, result is: ",
  containerWithMostWater([4, 3, 2, 1, 4])
); // 16
console.log(
  "containerWithMostWater([1,2,1]) should be 2, result is: ",
  containerWithMostWater([1, 2, 1])
); // 2

// Optimized Solution

// Initialize variable max which will hold the maximum area
// Initialize pointer a at 0 (beginning) and pointer b at nums.length - 1 (end)
// Calculate the area
// Use Math.max to store the higher value between the calculated area and the current max area
// Compare the values in the array at pointer a and b
// If pointer a is bigger we move b to the left
// If pointer b is bigger we move a to the right
// This is to ensure the height of our next calculation is greater than or equal to the height in previous calculation
// Repeat until pointers cross each other, while a < b
// Return max area

const containerWithMostWaterOptimized = (nums) => {
  let max = 0;
  let a = 0;
  let b = nums.length - 1;
  while (a < b) {
    const height = Math.min(nums[a], nums[b]);
    const width = b - a;
    const area = height * width;
    max = Math.max(area, max);
    if (nums[a] <= nums[b]) {
      a++;
    } else {
      b--;
    }
  }
  return max;
};

// Time Complexity: O(n)
// Space Complexity: O(1)

// Checking Examples
console.log(
  "containerWithMostWaterOptimized([1,8,6,2,5,4,8,3,7]) should be 49, result is: ",
  containerWithMostWaterOptimized([1, 8, 6, 2, 5, 4, 8, 3, 7])
); // 49
console.log(
  "containerWithMostWaterOptimized([1,1]) should be 1, result is: ",
  containerWithMostWaterOptimized([1, 1])
); // 1
console.log(
  "containerWithMostWaterOptimized([4,3,2,1,4]) should be 16, result is: ",
  containerWithMostWaterOptimized([4, 3, 2, 1, 4])
); // 16
console.log(
  "containerWithMostWaterOptimized([1,2,1]) should be 2, result is: ",
  containerWithMostWaterOptimized([1, 2, 1])
); // 2
