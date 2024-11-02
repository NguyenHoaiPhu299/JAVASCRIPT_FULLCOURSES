# Function Sequence: trình tự hàm
- Trong JS, các hàm được thực thi theo thứ tự chúng được gọi, không phải theo thứ tự chúng được định nghĩa => Thứ tự gọi hàm quyết định kết quả hiển thị.
- Ví dụ: ex.html

# Sequence Control: kiểm soát trình tự
- Đôi khi ta cần kiểm soát tốt khi nào thực thi hàm
- Ví dụ: Giả sử ta muốn thực hiện (một phép tính => hiển thị kết quả) (ex01.html)
    + Trường hợp 1:
        * Gọi hàm tính toán để lấy kết quả => gọi hàm hiển thị để in kết quả ra.
        * Vấn đề: Yêu cầu gọi hàm 2 lần.
    + Trường hợp 2:
        * Gọi hàm tính toán, sau đó hàm tính toán tự gọi hàm hiển thị để hiển thị kết quả.
        * Vấn đề: Không thể ngăn việc hiển thị kết quả, có nghĩa là ta sẽ luôn hiển thị ra kết quả mà không thể tắt khi cần.
- Từ ví dụ trên: giải pháp là sử dụng callback để linh hoạt quyết định khi nào hiển thị kết quả.

# JavaScript Callbacks
- Là một hàm được truyền như một đối số cho hàm khác.
- Kỹ thuật này cho phép một hàm gọi một hàm khác, thường là sau khi hàm đầu tiên hoàn thành.
- Ví dụ: Có thể gọi hàm tính toán với callback là hàm hiển thị, hàm tính toán sẽ chạy callback sau khi nó đã thực thi xong (ex02.html, ex03.html).
- Lưu ý: khi truyền callback, không được thêm dấu ngoặc đơn vì: khi truyền không dấu ngoặc đơn có nghĩa là đang truyền tham chiếu đến hàm đó, để hàm đó được gọi sau khi công việc chính kết thúc. Nếu thêm dấu ngoặc đơn => lập tức gọi hàm callback và trả về một giá trị, giá trị đó sẽ trở thành tham số truyền vào. Điều này làm mất tính chất callback vì hàm callback được thực thi ngay khi truyền chứ không phải sau khi công việc chính kết thúc.

# Khi nào sử dụng callback
- hữu ích trong các hàm bất đồng bộ (asynchronous), khi một hàm cần chờ hàm khác hoàn thành trước (ví dụ, chờ tải xong file).