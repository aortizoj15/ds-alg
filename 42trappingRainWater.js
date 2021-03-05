// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Example 2
// Input: height = [4,2,0,3,2,5]
// Output: 9

// Brute Force Solution

// Initialize variable that will hold total
// Use a for loop to iterate over the input array using pointer p
// We need to check all the values to the left and right of p to find the max values on each side
// We can use two variables to do this as well as two other variables to keep track of the max on each side
// One variable will be initialized one to the left of p
// The other variable will be initialized one to the right of p
// We can use a while loop for each variable to check each value and update the corresponding max value on each side
// The while loop for the variable to the left of p will keep iterating until it reaches 0
// The while loop for the variable to the right of p will keep iterating until it reaches the end of the input array
// Once both while loops are done, we calculate the water at p by taking the minimum between maxLeft and maxRight and subtracting the value at p
// We can now add this value to our total if it is positive
// We then return the total

const trappingRainwater = (nums) => {
  let total = 0;
  for (let p = 0; p < nums.length; p++) {
    let maxLeft = 0;
    let maxRight = 0;
    let leftP = p - 1;
    let rightP = p + 1;
    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, nums[leftP]);
      leftP--;
    }
    while (rightP < nums.length) {
      maxRight = Math.max(maxRight, nums[rightP]);
      rightP++;
    }
    const waterAtP = Math.min(maxLeft, maxRight) - nums[p];
    if (waterAtP > 0) {
      total = total + waterAtP;
    }
  }
  return total;
};

// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Checking Examples
console.log(
  "trappingRainwater([0,1,0,2,1,0,1,3,2,1,2,1]) should be 6, result is: ",
  trappingRainwater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
); // 6
console.log(
  "trappingRainwater([0,1,0,2,1,0,3,1,0,1,2]) should be 8, result is: ",
  trappingRainwater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2])
); // 8
console.log(
  "trappingRainwater([4,2,0,3,2,5]) should be 9, result is: ",
  trappingRainwater([4, 2, 0, 3, 2, 5])
); // 9
console.log(
  "trappingRainwater([3,4,3]) should be 0, result is: ",
  trappingRainwater([3, 4, 3])
); // 0
console.log(
  "trappingRainwater([]) should be 0, result is: ",
  trappingRainwater([])
); // 0
console.log(
  "trappingRainwater([3]) should be 0, result is: ",
  trappingRainwater([3])
); // 0
