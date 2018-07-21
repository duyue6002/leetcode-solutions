/*
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (40.24%)
 * Total Accepted:    332.1K
 * Total Submissions: 815.5K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 *
 * Example:
 *
 *
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 *
 * Follow up:
 *
 * If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  const n = nums.length;
  return maxSubArraySum(nums, 0, n - 1);
}
/**
 * Find the maximum poosible sum in nums[]
 * and nums[m] is part of it
 * @param {number[]} nums
 * @param {number} l left
 * @param {number} m mid
 * @param {number} h
 */
function maxCrossingSum(nums, l, m, h) {
  // Include elements on left of mid
  let sum = 0;
  let leftSum = Number.MIN_SAFE_INTEGER;
  for (let i = m; i >= l; i--) {
    sum += nums[i];
    if (sum > leftSum) {
      leftSum = sum;
    }
  }

  // Include elements on right of mid
  sum = 0;
  let rightSum = Number.MIN_SAFE_INTEGER;
  for (let i = m + 1; i <= h; i++) {
    sum += nums[i];
    if (sum > rightSum) {
      rightSum = sum;
    }
  }

  return leftSum + rightSum;
}
/**
 * Returns sum of maximum sum subarray
 * in nums[l..h]
 * @param {number[]} nums
 * @param {number} l
 * @param {number} h
 */
function maxSubArraySum(nums, l, h) {
  if (l === h) {
    return nums[l];
  }
  const m = Math.floor((l + h) / 2);
  return Math.max(Math.max(maxSubArraySum(nums, l, m), maxSubArraySum(nums, m + 1, h)), maxCrossingSum(nums, l, m, h));
}

module.exports = maxSubArray;

