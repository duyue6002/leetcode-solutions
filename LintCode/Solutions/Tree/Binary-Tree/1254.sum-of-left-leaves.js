/*
 * [1254] Sum of Left Leaves
 *
 * https://lintcode.com/problem/sum-of-left-leaves/description
 *
 *
 * Find the sum of all left leaves in a given binary tree.
 *
 *
 */

/**
 * @param root: t
 * @return: the sum of all left leaves
 */
const sumOfLeftLeaves = function(root, isLeft = false) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return isLeft ? root.val : 0;
  }
  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);
}

/**
 * @param root: t
 * @return: the sum of all left leaves
 */
const sumOfLeftLeaves2 = function(root) {
  let sum = 0;
  function dfs (root, isLeft = false) {
    if (root) {
      if (isLeft && !root.left && !root.right) {
        sum += root.val;
      }
      dfs(root.left, true);
      dfs(root.right);
    }
  }
  dfs(root);
  return sum;
}
