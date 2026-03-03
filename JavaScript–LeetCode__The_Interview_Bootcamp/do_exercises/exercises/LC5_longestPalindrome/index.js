//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

// 1. Kỹ thuật Expand Around Center
// Time: O(N^2), space: O(1)
function longestPalindrome(s) {
  let recordedLeft = 0;
  let recordedLength = 0;

  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > recordedLength) {
        recordedLeft = left;
        recordedLength = right - left + 1;
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }

  return s.slice(recordedLeft, recordedLeft + recordedLength);
}

// 2. Quy hoạch động (Dynamic Programming) 
// Time: O(N^2), space: O(N^2)
// Dùng 2 con trỏ có độ dài là span (que trỏ span) để chạy lần lượt từ trái sang phải mỗi lần chạy là ứng vs 1 bài toán nhỏ hơn
// Kết quả của bài toán nhỏ hơn sẽ được lưu vào record[start][end]

// function longestPalindrome(s) {
//   let recordedLeft = 0;
//   let recordedLength = 1;

//   const record = Array.from({ length: s.length }, () => Array(s.length).fill(false));

//   for (let i = 0; i < s.length; i++) {
//     record[i][i] = true;
//   }

//   for (span = 2; span <= s.length; span++) {
//     for (let start = 0; start <= s.length - span; start++) {
//       let end = start + span - 1;

//       if (s[start] === s[end]) {
//         if (span === 2) {
//           record[start][end] = true;
//         } else if (record[start + 1][end - 1]) {
//           record[start][end] = true;
//         }
//       }

//       if (record[start][end]) {
//         if (span > recordedLength) {
//           recordedLeft = start;
//           recordedLength = span;
//         }
//       }

//     }
//   }

//   return s.slice(recordedLeft, recordedLeft + recordedLength);
// }

module.exports = longestPalindrome;


