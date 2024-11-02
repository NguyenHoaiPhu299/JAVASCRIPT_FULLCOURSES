# Asynchronous
- Là các hàm chạy song song với các hàm khác, không chờ đợi hoàn tất trước khi tiếp tục.
- Trong ví dụ ở phần CALLBACK, callback được dùng để minh họa cú pháp. Nhưng trong thực tế, callback thường được dùng trong các hàm bất đồng bộ.
- Ví dụ: setTimout() cho phép thực thi một hàm sau một khoảng thời gian mà không chặn các lệnh khác.

# Waiting for a Timeout
- khi dùng setTimeout(), ta có thể chỉ định một hàm callback để thực thi sau một khoảng thời gian nhất định.
- Ví dụ: ex01.html