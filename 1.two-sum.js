/*
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (37.70%)
 * Total Accepted:    843.3K
 * Total Submissions: 2.2M
 * Testcase Example:  '[3,2,4]\n6'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 * 
 * 
 * Example:
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var myArray = [];
    for (let i = 0; i < nums.length; i++) {
        const tmp = target - nums[i];
        if (myArray[tmp] !== undefined) {
            return [myArray[tmp], i];
        }
        myArray[nums[i]] = i;
    }
    return myArray;
};
