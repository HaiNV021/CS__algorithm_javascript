// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
  let maxLength = 1;
  let left = 0;
  let right = 0;
  const recordLastIndexOfChar = new Map();
  recordLastIndexOfChar.set(s[0], 0);

  for (let i = 1; i < s.length; i++) {
    right = i;
    let char = s[right];
    if (recordLastIndexOfChar.has(char)) {
      if (recordLastIndexOfChar.get(char) >= left) {
        left = recordLastIndexOfChar.get(char) + 1;
      }
      recordLastIndexOfChar.set(char, right);
    } else {
      recordLastIndexOfChar.set(char, right);
      maxLength = Math.max(maxLength, right - left + 1);
    }
  }
  return maxLength;
}

module.exports = lengthOfLongestSubstring;
