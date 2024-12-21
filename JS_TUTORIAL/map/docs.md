# Maps
- Chứa một cặp key-value, khóa có thể là bất kỳ dữ liệu nào
- Ghi nhớ thứ tự chèn ban đầu của các key
- Maps là một đối tượng.
- Có thể sử dụng objects để làm khóa (tính năng quan trọng)

# Tạo một map
- truyền mảng vào new Map()
- tạo một Map và sử dụng Map.set()

| Object                            | Map                           |
|-----------------------------------|-------------------------------|
| Not directly iterable             | Directly iterable             |
| not have a size property          | Have a size property          |
| Keys must be Strings (or Symbols) | Keys can be any datatype      |
| Keys are not well ordered         | Keys are ordered by insertion |
| Have default keys                 | not have default keys         |

# Sự khác nhau giữa Object.groupBy() và Map.groupBy()
- Object.groupBy(): nhóm các phần tử thành một đối tượng JavaScript.
- Map.groupBy(): nhóm các phần tử thành một đối tượng Map.