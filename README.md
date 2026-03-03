# Learn from cousres:

## Udemy courses:
- Master the coding interview: https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12202018#overview

- JS leatcode the interview bootcamp: https://www.udemy.com/course/ultimate-javascript-leetcode-interview-bootcamp/?couponCode=MT251006G3

## Engineer pro


# Docs:
- https://docs.google.com/document/d/14jzkY8LUsKf3ZCfsAmLndl1SKqS03F0vBwlj-pqqg84/edit?tab=t.0
 
--------------------------------

## Cách tính O (từ Gemini)
- Đo 'tốc độc tăng trưởng' của thời gian (Time complexity) hoặc bộ nhớ (Space complexity) khi n input tăng vô hạn

### 1) 4 quy tắc vàng

#### 1. Các thao thác cơ bản -> constant time O(1)

#### 2. Quy tắc vòng lặp

- Lặp đơn => O(N)
- Lồng nhau => O(N^2), O(N^3), ...
- Lặp nhảy cách: Nếu lặp nhân đôi / chia đôi => O(log N) (Log2 của N nhưng viết gọn) => Logarithmic time (Vì số lần lặp tính theo CT: k^x = N => x = log_k N);

#### 3. Quy tắc tính toán
- Cộng: Nếu thuật toán có 2 phần rời nhau => cộng chúng lại
    - Ví dụ: Tổng time complexity là O(n + n^2) = O(n^2)
- Nhân: Nếu thuật toán có 2 phần lồng nhau => nhân chúng lại => O(n) * O(n) = O(n^2)
    - Ví dụ: Tổng time complexity là O(n) * O(n^2) = O(n^3)

#### 4. Rút gọn
- Vì O chỉ quan tâm TH mà đầu vào cực lớn nên ta có thể bỏ hằng số, ví dụ: O(1000n) = O(n)

--------------------------------

### 2) Đặc biệt
### 1. O(m * n)
Trong phân tích độ phức tạp thuật toán (Big O), trường hợp $O(m \times n)$ (thường viết là $O(m \cdot n)$ hoặc $O(mn)$) xảy ra khi bạn có hai vòng lặp lồng nhau, nhưng kích thước của mỗi vòng lặp phụ thuộc vào hai biến độc lập khác nhau.

```javascript
for (let i = 0; i < m; i++) {       // Chạy m lần
    for (let j = 0; j < n; j++) {   // Chạy n lần
        console.log(matrix[i][j]);  // Tổng cộng m * n thao tác
    }
}
```


### 3) Bảng xếp hạng time complexity

```
O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(n^3) < O(2^n) < O(n!)
```
Các mốc:
- O(1): tuyệt
- O(log n): rất tốt
- O(n): tốt
- O(n log n): Khá ổn (Quick Sort, Merge Sort)
- O(n^2): Chậm (Vòng lặp lồng nhau)
- O(2^n): Rất tệ (Đệ quy không tối ưu)
- O(n!): Thảm họa (Bài toán người giao hàng)