# Web Storage API
- Là một giao diện lập trình ứng dụng (API)
- Cho phép lưu trữ và truy xuất dữ liệu trên trình duyệt một cách dễ dàng.
- Gồm hai đối tượng chính
    + localStorage
    + sessionStorage
- Đây là cách thức giúp các trang web lưu trữ dữ liệu dưới dạng cặp key-value.

# localStorage
- Chức năng:
    + Cung cấp quyền truy cập vào bộ nhớ cục bộ cho một Trang Web cụ thể
    + Lưu trữ, đọc, thêm, sửa, xóa dữ liệu trên trình duyệt mà không có ngày hết hạn.
    + Dữ liệu vẫn tồn tại ngay cả khi đóng trình duyệt hay khởi động lại máy tính.
    + Ứng dụng
        * Lưu trữ thông tin người dùng để sử dụng lâu dài (cấu hình cài đặt, tên người dùng...)
        * Phù hợp khi cần dữ liệu bền vững qua nhiều lần truy cập trang web.

- Phương thức:
    + localStorage.setItem(key, value): Lưu trữ dữ liệu.
    + localStorage.getItem(key): Lấy dữ liệu đã lưu.
    + localStorage.removeItem(key): Xóa một mục dữ liệu.
    + localStorage.clear(): Xóa toàn bộ dữ liệu.

# sessionStorage
- Chức năng: Giống hệt localStorage nhưng khác ở một vài điểm
    + Lưu trữ dữ liệu chỉ trong một phiên làm việc.
    + Khi đóng trình duyệt, dữ liệu sẽ bị xóa.
    + Ứng dụng
        * Lưu thông tin tạm thời, như trạng thái đăng nhập hoặc dữ liệu biểu mẫu khi người dùng điều hướng qua lại các trang trong cùng một phiên.

- Phương thức:
    + sessionStorage.setItem(key, value): Lưu trữ dữ liệu trong phiên.
    + sessionStorage.getItem(key): Lấy dữ liệu từ phiên.
    + sessionStorage.removeItem(key): Xóa một mục dữ liệu trong phiên.
    + sessionStorage.clear(): Xóa toàn bộ dữ liệu của phiên.

# Thuộc tính và phương thức chung của Web Storage API
- key(n): Trả về tên của khóa thứ n trong bộ nhớ.
- length: Trả về số lượng mục dữ liệu được lưu trữ.
- getItem(keyname): Lấy giá trị của khóa được chỉ định.
- setItem(keyname, value): Thêm hoặc cập nhật một cặp khóa-giá trị.
- removeItem(keyname): 	Xóa một cặp khóa-giá trị cụ thể khỏi bộ nhớ.
- clear(): 	Xóa toàn bộ dữ liệu trong bộ nhớ.

# So sánh localStorage và sessionStorage

Đặc điểm            | localStorage                      | sessionStorage
____________________|___________________________________|________________________________
Thời gian lưu trữ   | Không có thời gian hết hạn.       | Chỉ trong phiên làm việc.
Xóa dữ liệu         | Thủ công hoặc qua lệnh clear().   | Tự động khi đóng trình duyệt.
Mục đích sử dụng    | Lưu trữ dài hạn.                  | Lưu trữ tạm thời.