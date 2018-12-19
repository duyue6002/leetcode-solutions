/*
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
 *
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (33.37%)
 * Total Accepted:    132.3K
 * Total Submissions: 358.5K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * Given inorder and postorder traversal of a tree, construct the binary tree.
 *
 * Note:
 * You may assume that duplicates do not exist in the tree.
 *
 * For example, given
 *
 *
 * inorder = [9,3,15,20,7]
 * postorder = [9,15,7,20,3]
 *
 * Return the following binary tree:
 *
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
let buildTree = function (inorder, postorder) {
  let constructHelper = (inStart, inEnd, postStart, postEnd, inorder, postorder) => {
    if (inStart > inEnd || postStart > postEnd) {
      return null;
    }
    let root = new TreeNode(postorder[postEnd]);
    if (inStart === inEnd) {
      return root;
    }
    let rootPosition = 0;
    for (let i = inStart; i <= inEnd; i++) {
      if (inorder[i] === root.val) {
        rootPosition = i;
      }
    }

    root.left = constructHelper(
      inStart,
      rootPosition - 1,
      postStart,
      postStart + rootPosition - inStart - 1,
      inorder,
      postorder,
    );
    root.right = constructHelper(
      rootPosition + 1,
      inEnd,
      postStart + rootPosition - inStart,
      postEnd - 1,
      inorder,
      postorder,
    );

    return root;
  };
  return constructHelper(0, inorder.length - 1, 0, postorder.length - 1, inorder, postorder);
};

module.exports = buildTree;
