/*
 * [1360] Symmetric Tree
 *
 * https://www.lintcode.com/problem/symmetric-tree/description
 *
 * lintcode
 * Easy (55.00%)
 * Total Accepted:    454
 * Total Submissions: 812
 * Testcase Example:  '{1,2,2,#,3,#,3}'
 *
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric
 * around its center).
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param root: root of the given tree
 * @return: whether it is a mirror of itself
 */
const isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  return isSame(root.left, root.right);
};

const isSame = function (left, right) {
  if (!left && !right) return true;
  if (!left || !right || left.val !== right.val) return false;
  return isSame(left.left, right.right) && isSame(left.right, right.left);
};
