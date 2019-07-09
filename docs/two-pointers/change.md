# 调整数组顺序使奇数在偶数前面

[Partition Array by Odd and Even](https://www.lintcode.com/problem/partition-array-by-odd-and-even/description?_from=ladder&&fromId=6)

偶数总是在奇数后面，使用双指针，一头一尾，头遇到奇数跟尾交换，尾同理，其他情况下动指针位置即可。

将指针判断逻辑抽离出来，即可得到通用的重组数组的方法。

```js
function partition(array) {
  if (array.length === 0) return null;
  let start = 0,
    end = array.length - 1;
  while (start < end) {
    let flag = true;
    if (isEven(array[start])) {
      start++;
      flag = false;
    }
    if (!isEven(array[end])) {
      end--;
      flag = false;
    }
    if (flag) {
      [array[start], array[end]] = [array[end], array[start]];
    }
  }
  return array;
}

function isEven(num) {
  return (num & 1) !== 0;
}
```
