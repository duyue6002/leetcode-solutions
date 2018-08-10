/*
 * [104] Maximum Depth of Binary Tree
 *
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (56.30%)
 * Total Accepted:    364.4K
 * Total Submissions: 647K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, find its maximum depth.
 *
 * The maximum depth is the number of nodes along the longest path from the
 * root node down to the farthest leaf node.
 *
 * Note: A leaf is a node with no children.
 *
 * Example:
 *
 * Given binary tree [3,9,20,null,null,15,7],
 *
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * return its depth = 3.
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
 * @return {number}
 */
const maxDepth = function (root) {
  return DFS(root);
};

const DFS = function (root) {
  if (!root) {
    return 0;
  }
  const stack = [];
  const value = [];
  stack.push(root);
  value.push(1);
  let max = 0;
  while (stack.length !== 0) {
    const node = stack.pop();
    const temp = value.pop();
    max = Math.max(temp, max);
    if (node.left) {
      stack.push(node.left);
      value.push(temp + 1);
    }
    if (node.right) {
      stack.push(node.right);
      value.push(temp + 1);
    }
  }
  return max;
};

const BFS = function (root) {

};


module.exports = maxDepth;
