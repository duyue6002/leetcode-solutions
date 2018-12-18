/*
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 *
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (33.82%)
 * Total Accepted:    184K
 * Total Submissions: 482.8K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 *
 * Note:
 * You may assume that duplicates do not exist in the tree.
 *
 * For example, given
 *
 *
 * preorder = [3,9,20,15,7]
 * inorder = [9,3,15,20,7]
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
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let buildTree = (preorder, inorder) => {
  let constructHelper = (preStart, inStart, inEnd, preorder, inorder) => {
    if (preStart > preorder.length - 1 || inStart > inEnd) {
      return null;
    }

    let root = new TreeNode(preorder[preStart]);
    let rootPosition = 0;
    for (let i = inStart; i <= inEnd; i++) {
      if (inorder[i] === root.val) {
        rootPosition = i;
      }
    }

    root.left = constructHelper(
      preStart + 1,
      inStart,
      rootPosition - 1,
      preorder,
      inorder,
    );
    // todo 搞不懂preStart的值
    root.right = constructHelper(
      preStart - inStart + rootPosition + 1,
      rootPosition + 1,
      inEnd,
      preorder,
      inorder,
    );

    return root;
  };

  return constructHelper(0, 0, inorder.length - 1, preorder, inorder);
};
