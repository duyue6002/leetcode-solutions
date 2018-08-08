/*
 * [101] Symmetric Tree
 *
 * https://leetcode.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (41.11%)
 * Total Accepted:    278.7K
 * Total Submissions: 678K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric
 * around its center).
 *
 *
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 *
 *
 *
 * But the following [1,2,2,null,3,null,3]  is not:
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 *
 *
 *
 *
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
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
