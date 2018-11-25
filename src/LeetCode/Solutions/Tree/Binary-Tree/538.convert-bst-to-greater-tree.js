/*
 * [538] Convert BST to Greater Tree
 *
 * https://leetcode.com/problems/convert-bst-to-greater-tree/description/
 *
 * algorithms
 * Easy (48.85%)
 * Total Accepted:    60.1K
 * Total Submissions: 122.5K
 * Testcase Example:  '[5,2,13]'
 *
 * Given a Binary Search Tree (BST), convert it to a Greater Tree such that
 * every key of the original BST is changed to the original key plus sum of all
 * keys greater than the original key in BST.
 *
 *
 * Example:
 *
 * Input: The root of a Binary Search Tree like this:
 * ⁠             5
 * ⁠           /   \
 * ⁠          2     13
 *
 * Output: The root of a Greater Tree like this:
 * ⁠            18
 * ⁠           /   \
 * ⁠         20     13
 *
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
 * @return {TreeNode}
 */
let convertBST = function (root) {
  let curSum = 0;

  let toBeNewNode = function (node, callback) {
    if (node !== null) {
      toBeNewNode(node.right, callback);
      callback(node);
      toBeNewNode(node.left, callback);
    }
  };

  let addPreSum = function (node) {
    node.val = node.val + curSum;
    curSum = node.val;
  };

  toBeNewNode(root, addPreSum);

  return root;
};
