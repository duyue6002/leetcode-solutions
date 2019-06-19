# 查找

> 主要用这几个方法：
> 顺序查找，二分查找，哈希表查找，二叉排序树查找

## 旋转有序数组的最小数字

1. 数组没有重复元素：[Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
2. 数组存在重复元素：[Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/)

数组可以看成两部分，它们都是不严格递增，且后半部分比前半部分都小（或等于）。

### 顺序查找

找到最小的数，时间复杂度是 O(N)。

### 二分查找

选取数组中的 mid 与 start 和 end 比较，mid 比 start 大时，说明要找的最小数字还在后半部分，反之最小数字在前半部分。放到循环里，循环的结束条件是，移动到两个相邻的数字，后面的数字就是最小数字。时间复杂度是 O(logN)。

如果数组中存在重复元素，就会出现 mid, start, end 对应的数字相等，这时需要借助顺序查找。不用从头到尾查找，而是从后往前检索，找到最小数字即可。

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
  // mid 初始值为 0，为了数组本身有序没有旋转，那么第一个数就是最小的数
  let start = 0,
    end = nums.length - 1,
    mid = 0;
  while (nums[start] >= nums[end]) {
    if (end - start === 1) {
      mid = end;
      break;
    }
    mid = Math.floor((start + end) / 2);
    if (nums[mid] > nums[start]) {
      start = mid;
    } else if (nums[mid] < nums[end]) {
      end = mid;
    } else {
      if (nums[end] >= nums[end - 1]) {
        end--;
      } else {
        mid = end;
        break;
      }
    }
  }
  return nums[mid];
}
```
