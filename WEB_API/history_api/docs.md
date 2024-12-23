# Web History API: Giao diện Lập trình Ứng dụng Lịch sử Web
- Cung cấp các phương thức đơn giản để truy cập đối tượng window.history
- Đối tượng window.history chứa danh sách url (các trang web) mà người dùng đã truy cập

# Hỗ trợ trên các trình duyệt
- Web History API được hỗ trợ trên tất cả các trình duyệt phổ biến (Chrome, Firefox, Edge, Safari, Opera).

# back() method
- Phương thức này tải lại url trước đó trong danh sách lịch sử (window.history)
- Hoạt động giống như khi nhấn nút mũi tên quay lại trên trình duyệt

# go() method
- Phương thức này tải một url cụ thể trong danh sách lịch sử. Cung cấp giá trị số âm để quay lại, hoặc số dương để tiến tới các trang trong lịch sử.

# Thuộc tính của đối tượng History
- length: Trả về số lượng URL trong danh sách lịch sử của người dùng.

# Phương thức của đối tượng History
Phương thức |	Mô tả
____________|___________________________________________________________
back()      |	Tải URL trước đó trong danh sách lịch sử.
forward()   |	Tải URL tiếp theo trong danh sách lịch sử.
go()        |	Tải một URL cụ thể trong danh sách lịch sử (dựa trên vị trí tương đối).

# Ứng dụng thực tế
- Web History API được sử dụng trong các ứng dụng web để quản lý điều hướng hoặc tùy chỉnh trải nghiệm của người dùng mà không cần tải lại toàn bộ trang web.