# String

## 3. Longest Substring Without Repeating Characters

使用滑动窗口的思想，同时使用set保证唯一性

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let set = new Set();
  let max = 0, i = 0, j = 0;
  while (i < s.length) {
    if (!set.has(s.charAt(i))) {
      set.add(s.charAt(i++));
      max = Math.max(max, set.size);
    } else {
      set.delete(s.charAt(j++));
    }
  }
  return max;
};
```
