# 二叉树的遍历

## 后序非递归遍历

后序是较为复杂的，用栈更容易解决问题。借助数组，一个栈放 node，一个数组放 node 的值。

```js
const postorderTraversal = function(root) {
  let arr = [];
  if (!root) return arr;
  let stack = [];
  stack.push(root);
  while (stack.length > 0) {
    let node = stack[stack.length - 1];
    if (node.left && root !== node.left && root !== node.right) {
      stack.push(node.left);
    } else if (node.right && root !== node.right) {
      stack.push(node.right);
    } else {
      arr.push(node.val);
      root = stack.pop();
    }
  }
  return arr;
};
```

这是顺序的解决思路，如果反向思考，其实只需将“根右左”倒序即是“左右根”的后序排列。

```js
const postorderTraversal = function(root) {
  let arr = [];
  if (!root) return arr;
  let stack = [];
  stack.push(root);
  while (stack.length > 0) {
    let node = stack.pop();
    arr.push(node.val);
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
  return arr.reverse();
};
```

## 中序非递归遍历

迭代的思路如下：

- 左子树一直放入栈中，直至节点为空
- 节点为空，停止入栈，栈顶元素出栈，并存储该元素值
- 节点替换为出栈元素的右节点

```js
const inorderTraversal = function(root) {
  let arr = [];
  if (!root) return arr;
  let stack = [];
  let node = root;
  while (node || stack.length > 0) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      arr.push(node.val);
      node = node.right;
    }
  }
  return arr;
};
```

## 先序非递归遍历

```js
const preorderTraversal = function(root) {
  let arr = [];
  if (!root) return arr;
  let stack = [];
  stack.push(root);
  while (stack.length > 0) {
    let node = stack.pop();
    arr.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return arr;
};
```

## 广度遍历 BFS

从上往下遍历树，每层存到一个数组里，最后返回一个二维数组。

```js
const levelOrder = function(root) {
  let arr = [];
  if (!root) return arr;
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let tmp = [];
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      tmp.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    arr.push(tmp);
  }
  return arr;
};
```
