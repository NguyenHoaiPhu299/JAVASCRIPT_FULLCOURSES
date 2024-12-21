# Asynchronous
- Là các hàm chạy song song với các hàm khác, không chờ đợi hoàn tất trước khi tiếp tục.
- Callback thường được dùng trong các hàm bất đồng bộ.
- Ví dụ:
    - setTimout() cho phép thực thi một hàm sau một khoảng thời gian mà không chặn các lệnh khác.
        - Khi dùng setTimeout(), ta có thể chỉ định một hàm callback để thực thi sau một khoảng thời gian nhất định.
    - setInterval() cho phép chỉ định hàm callback sẽ được thực thi sau mỗi khoảng thời gian.

# Callback Alternatives
- Với lập trình bất đồng bộ, các chương trình JavaScript có thể bắt đầu các tác vụ dài hạn và tiếp tục chạy song song các tác vụ khác.
- Callback là cách tiếp cận cơ bản để xử lý bất đồng bộ, nhưng nó có những nhược điểm khiến việc viết và quản lý mã trở nên khó khăn trong các ứng dụng phức tạp.
- JavaScript hiện đại đã giới thiệu Promises và sau đó là async/await, giúp lập trình bất đồng bộ trở nên dễ dàng và dễ đọc hơn.