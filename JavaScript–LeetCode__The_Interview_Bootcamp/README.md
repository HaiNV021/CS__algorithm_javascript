# Course:

- Course: https://www.udemy.com/course/ultimate-javascript-leetcode-interview-bootcamp/learn/lecture/14958446#overview
- Source code: https://github.com/kaeducation/LeetCode_JS_Classic
- Author: Kevin Nguyen (Web Developer)

# 1. Intro:

- Course: https://www.udemy.com/course/ultimate-javascript-leetcode-interview-bootcamp/learn/lecture/14958446#overview
- Output: Expert in coding interview
- Các topics sẽ gặp trong interview:
  1. Strings
  2. Dynamic Programming
  3. Arrays
  4. Intervals
  5. Matrix
  6. Linked Lists
  7. Trees
  8. Others (in acvance course: https://kaeducation.thinkific.com/courses/javascript-leetcode-the-complete-interview-bootcamp)
  - Design (Practical Data Structures)
  - Graphs
  - Heaps
- Source code: https://github.com/kaeducation/LeetCode_JS_Classic

# 2. Strings

- Palindrome (LC125):

  - Chuỗi dối xứng
  - Problem 125: https://leetcode.com/problems/valid-palindrome/
  - Kỹ thuật 2 con trỏ
  - Các bước:
    - Sanitize input: Loại bỏ ko phải word và \_
    - Tạo 2 con trỏ: left và right => kết thúc khi left >= right / thấy 2 giá trị khác nhau thì return false
    - Time: O(N), space: O(1)

- Longest Palindrome (LC5):

  - Problem 5: https://leetcode.com/problems/longest-palindromic-substring/
  - Kỹ thuật Expand Around Center
  - Các bước:

    - chú ý xử lý 2 kiểu TH: abba và abcba
    - dùng 2 contro đi ra từ center, center tưởng tượng - là phẩn tử hoặc khoảng trống giữa 2 phẩn tử
    - Time: O(N^2), space: O(1)

  - Cách khác: Quy hoạch động (Dynamic Programming)
    - Tạo 1 ma trận dp[i][j] = true nếu s[i...j] là palindrome
    - dp[i][j] = true nếu s[i] === s[j] và dp[i+1][j-1] = true
    - dp[i][i] = true
    - dp[i][i+1] = true nếu s[i] === s[i+1]
    - Time: O(N^2), space: O(N^2)
