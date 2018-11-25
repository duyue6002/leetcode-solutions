/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param root: the given BST
 * @param target: the given target
 * @return: the value in the BST that is closest to the target
 */
const closestValue = function (root, target) {
  // 找到最小的比target大的数
  const upperBound = (node, target) => {
    if (node === null) {
      return null;
    }

    if (node.val < target) {
      return upperBound(node.right, target);
    }

    let upperNode = upperBound(node.left, target);
    return upperNode || node;
  };

  // 找到最大的比target小的数
  const lowerBound = (node, target) => {
    if (node === null) {
      return null;
    }

    if (node.val > target) {
      return lowerBound(node.left, target);
    }

    let lowerNode = lowerBound(node.right, target);
    return lowerNode || node;
  };

  let upperNode = upperBound(root, target);
  let lowerNode = lowerBound(root, target);

  if (upperNode === null) {
    return lowerNode.val;
  }

  if (lowerNode === null) {
    return upperNode.val;
  }

  if ((upperNode.val - target) > (target - lowerNode.val)) {
    return lowerNode.val;
  }
  return upperNode.val;
};
