// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Brute force solution
// We can use pointer a and b.
// Pointer a will start at index 0
// Pointer b will start one index ahead of pointer a
// Use for loop on pointer a
// Inside pointer a's for loop, use pointer b to create a for loop


const twoSum = (nums, target) => {
    for(let a = 0; a < nums.length; a++) {
        for (let b = a+1; b < nums.length; b++) {
            if(nums[a]+nums[b] === target) {
                return [a,b]
            }
        }
    }
    return null
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
