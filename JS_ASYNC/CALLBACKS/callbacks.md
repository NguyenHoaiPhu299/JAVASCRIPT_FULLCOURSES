# Function Sequence: trình tự hàm
- Trong JS, các hàm được thực thi theo thứ tự chúng được gọi, không phải theo thứ tự chúng được định nghĩa
=> Thứ tự gọi hàm quyết định kết quả hiển thị.
- Ví dụ: ex.html

# Sequence Control: kiểm soát trình tự
- Là khái niệm quan trọng khi ta cần kiểm soát trình tự thực thi các hàm trong JS. Đặc biệt là khi có những tác vụ phụ thuộc vào kết quả của tác vụ khác.

# Ví dụ
Giả sử ta muốn thực hiện (một phép tính => hiển thị kết quả) (ex01.html)
- Gọi 2 hàm riêng biệt: Gọi hàm tính toán để lấy kết quả => gọi hàm hiển thị để in kết quả ra.
    + Tách biệt chức năng rõ ràng
    + Dễ kiểm soát và tái sử dụng hàm: có thể thay thế myDisplayer bằng một hàm khác
    + Yêu cầu gọi 2 hàm riêng biệt
    + Cần thêm biến trung gian để lưu kết quả

- Gọi hàm hiển thị trực tiếp trong hàm tính toán: Gọi hàm tính toán, sau đó hàm tính toán tự gọi hàm hiển thị để hiển thị kết quả.
    + Mã ngắn gọn hơn, không cần biến trung gian.
    + Kết quả được hiển thị ngay sau khi tính toán xong.
    + Hạn chết tính linh hoạt: Hàm myCalculator bắt buộc phải gọi myDisplayer để hiển thị kết quả mà không thể gọi hàm khác.
    + Thiếu khả năng kiểm soát: luôn hiển thị ra kết quả mà không thể tắt khi cần.
=> Từ ví dụ trên: giải pháp là sử dụng callback có thể khắc phục nhược điểm của cả hai cách trên.

# JavaScript Callbacks
- Là một hàm được truyền như một đối số cho hàm khác.
- Kỹ thuật này cho phép một hàm gọi một hàm khác, thường là sau khi hàm đầu tiên hoàn thành.
- Ví dụ: Có thể gọi hàm tính toán với callback là hàm hiển thị, hàm tính toán sẽ chạy callback sau khi nó đã thực thi xong (ex02.html, ex03.html).
- Lưu ý: khi truyền callback, không được thêm dấu ngoặc đơn vì:
    + Khi truyền không dấu ngoặc đơn có nghĩa là đang truyền tham chiếu đến hàm đó, để hàm đó được gọi sau khi công việc chính kết thúc.
    + Nếu thêm dấu ngoặc đơn => lập tức gọi hàm callback và trả về một giá trị, giá trị đó sẽ trở thành tham số truyền vào.
    + Điều này làm mất tính chất callback vì hàm callback được thực thi ngay khi truyền chứ không phải sau khi công việc chính kết thúc.

# Khi nào sử dụng callback
- Hữu ích trong các hàm bất đồng bộ (asynchronous), khi một hàm cần chờ hàm khác hoàn thành trước (ví dụ, chờ tải xong file).