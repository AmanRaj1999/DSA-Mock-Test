// Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

// Constraints:
// a. 1 <= nums.length <= 10^4
// b. -2^31 <= nums[i] <= 2^31 - 1

function moveZeroes(nums) {
  let nonZeroIndex = 0;

  // Move all non-zero elements to the beginning of the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  // Fill the remaining elements with zeroes
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

const nums1 = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums1)); // Output: [1, 3, 12, 0, 0]

const nums2 = [0, 0, 0, 0];
console.log(moveZeroes(nums2)); // Output: [0]

// TC = O(n)
//SC = O(1)
