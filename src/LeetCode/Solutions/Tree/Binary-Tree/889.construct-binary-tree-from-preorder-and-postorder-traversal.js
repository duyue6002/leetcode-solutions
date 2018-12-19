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
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
let constructFromPrePost = function (pre, post) {
  let constructHelper = (preStart, preEnd, postStart, postEnd, preorder, postorder) => {
    if (postStart > postEnd || preStart > preEnd) {
      return null;
    }
    let rootNode = new TreeNode(preorder[preStart]);
    if (postStart === postEnd) {
      return rootNode;
    }

    let leftPosition = preStart + 1;
    if (preStart + 1 < preorder.length - 1) {
      for (let i = postStart; i <= postEnd; i++) {
        if (postorder[i] === preorder[preStart + 1]) {
          leftPosition = i;
        }
      }
    }

    rootNode.left = constructHelper(
      preStart + 1,
      preEnd,
      postStart,
      leftPosition,
      preorder,
      postorder,
    );
    rootNode.right = constructHelper(
      preStart + leftPosition - postStart + 2,
      preEnd,
      leftPosition + 1,
      postEnd - 1,
      preorder,
      postorder,
    );
    return rootNode;
  };
  return constructHelper(0, pre.length - 1, 0, post.length - 1, pre, post);
};

module.exports = constructFromPrePost;
