# Course:

- Course: https://www.udemy.com/course/ultimate-javascript-leetcode-interview-bootcamp/learn/lecture/14958446#overview
- Source code: https://github.com/kaeducation/LeetCode_JS_Classic
- Author: Kevin Nguyen (Web Developer)

# 1. Intro:

- Course: https://www.udemy.com/course/ultimate-javascript-leetcode-interview-bootcamp/learn/lecture/14958446#overview
- Output: Expert in coding interview
- Các topics sẽ gặp trong interview:
  - Strings
  - Dynamic Programming
  - Arrays
  - Intervals
  - Matrix
  - Linked Lists
  - Trees
  - Others
    (In acvance course: https://kaeducation.thinkific.com/courses/javascript-leetcode-the-complete-interview-bootcamp)
    - Design (Practical Data Structures)
    - Graphs
    - Heaps
- Source code: https://github.com/kaeducation/LeetCode_JS_Classic

# 2. Strings

## 2.1 Palindrome (LC125_isPalindrome):

- Chuỗi dối xứng
- Problem 125: https://leetcode.com/problems/valid-palindrome/
- Kỹ thuật 2 con trỏ
- Các bước:
  - Sanitize input: Loại bỏ ko phải word và \_
  - Tạo 2 con trỏ: left và right => kết thúc khi left >= right / thấy 2 giá trị khác nhau thì return false
  - Time: O(N), space: O(1)

- Other comments
  - có thể dùng dùng cách là split, reverse, join để kiểm tra palindrome nhưng mà time complexity của cách này không phải là O(1), mà là O(N) vì phải duyệt qua tất cả các phần tử. Nếu đặt thêm biến mới nữa thì space complexity sẽ là O(N)

## 2.2 Longest Palindrome (LC5_longestPalindrome):

- Problem 5: https://leetcode.com/problems/longest-palindromic-substring/
- Kỹ thuật Expand Around Center
- Các bước:
  - chú ý xử lý 2 kiểu TH: abba và abcba
  - dùng 2 contro đi ra từ center, center tưởng tượng - là phẩn tử hoặc khoảng trống giữa 2 phẩn tử
  - Time: O(N^2), space: O(1)

- Cách khác: Quy hoạch động (Dynamic Programming)
  - Tạo 1 ma trận dp[i][j] = true nếu s[i...j] là palindrome (bài toán nhỏ hơn), ta sẽ dùng 2 con trỏ có độ dài là span (que trỏ span) để chạy lần lượt từ trái sang phải mỗi lần chạy là ứng vs 1 bài toán nhỏ hơn
  - dp[i][j] = true nếu s[i] === s[j] và dp[i+1][j-1] = true (bài toán nhỏ hơn đúng)
  - Time: O(N^2), space: O(N^2)

## 2.3 Longest Substring Without Repeating Characters (LC3):

- Problem 3: https://leetcode.com/problems/longest-substring-without-repeating-characters/
- Kỹ thuật Sliding Window
- Các bước:
  - Tạo 2 contro left, right tạo window, dùng Map để lưu charAndLastIndex, khi gặp char đã có trong Map thì update lastIndex và dịch window sang phải
  - Time: O(N), space: O(min(N, m)) với m là số lượng unique characters trong string

# 2.4 Valid Anagram (LC242_isAnagram):

- Problem 242: https://leetcode.com/problems/valid-anagram/
- Kỹ thuật Map
- Các bước:
  - Tạo 1 Map để lưu count của các characters trong s (loop 1)
  - Duyệt qua tất cả các characters trong t, nếu character đó có trong Map và count > 0 thì giảm count đi 1, nếu không thì return false (loop 2)
  - Time: O(N), space: O(1)
  - Space: O(1) vì Map chỉ có 26 characters

# 2.5 Group Anagrams (LC49_groupAnagrams):

- Problem 49: https://leetcode.com/problems/group-anagrams/
- Kỹ thuật Map
- Các bước:
  - Tạo 1 Map để lưu count của các characters trong s (loop 1)
  - Duyệt qua tất cả các characters trong t, nếu character đó có trong Map và count > 0 thì giảm count đi 1, nếu không thì return false (loop 2)
  - Time: O(N), space: O(1)
  - Space: O(1) vì Map chỉ có 26 characters
