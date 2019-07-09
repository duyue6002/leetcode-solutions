> `(num & 1) === 0` // 偶数
>
> `(num & 1) !== 0` // 奇数
>
> `num >> 1` // 相当于 num / 2

# 计算二进制中 1 的个数

## 右移+与运算

```javascript
while (num) {
  if (num & 1) {
    count++;
  }
  num = num >> 1;
}
```

限制：只能判断正数

右移 1 位相当于除以 2，但是移位运算比除法运算更快

## 借助 flag 做与运算，flag 不断左移

```javascript
flag = 1;
while (flag) {
  if (num & flag) {
    count++;
  }
  flag = flag << 1;
}
```

限制：因为位运算是对 32 位整型操作，所以需要循环 32 次

## 减 1 做与运算

```javascript
while (num) {
  ++count;
  num = (num - 1) & num;
}
```

## 变形题

[Counting Bits](https://leetcode.com/problems/counting-bits/)

原题的 1、3 解法都是不断减小原数，直到数字减少为 0。在这道题里，依然从大往小循环就会造成多次重复计算，时间复杂度是 O(n\*sizeof(integer))。

如果反过来思考，从小往大计算，count 每次都是增加 1，先计算小值的 bits 数保存到数组，计算与之对应的下一个大值时可以直接取，再加 1，就是这个大值的 bits 数。

```javascript
let arr = Array(num + 1).fill(0);
for (let i = 1; i <= num; i++) {
  // 对应解法 1
  arr[i] = a[i >> 1] + (i & 1);
  // 对应解法 3
  arr[i] = a[(i - 1) & i] + 1;
}
```
