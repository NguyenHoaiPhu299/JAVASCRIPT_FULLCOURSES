# JavaScript Validation API
- Validation API trong JS giúp kiểm tra và xác thực dữ liệu người dùng nhập vào các phần tử biểu mẫu HTML. Đây là một cách hiệu quả để đảm bảo dữ liệu hợp lệ trước khi xử lý.

# Các phương thức DOM xác thực
- checkValidity()
    + Mục đích: Kiểm tra xem giá trị của một phần tử đầu vào có thỏa mãn tất cả các ràng buộc không (min, max, required, pattern). Trả về true nếu giá trị hợp lệ, ngược lại trả về false
- setCustomValidity(message)
    + Mục đích: Tự đặt thông báo lỗi (thay vì sử dụng thông báo mặc định)
    + Khi gọi phương thức này với một chuỗi thông báo, thuộc tính validity.customError sẽ được đặt thành true

# Các thuộc tính DOM xác thực
- validity
    + Chứa các thuộc tính boolean mô tả trạng thái hợp lệ của phần tử nhập liệu.
    + Các thuộc tính con hợp lệ:
        * customError: Đặt thành true nếu một thông báo ợp lệ được cài.
        * valueMissing: Không có giá trị trong trường bắt buộc.
        * rangeOverflow: Giá trị lớn hơn giới hạn max.
        * rangeUnderflow: Giá trị nhỏ hơn giới hạn min.
        * stepMismatch: Đặt thành true, nếu giá trị của một phần tử không hợp lệ theo thuộc tính step.
        * patternMismatch: Giá trị không khớp với biểu thức chính quy (pattern).
        * tooLong: Đặt thành true, nếu giá trị của một phần tử vượt quá thuộc tính maxLength của nó.
        * typeMismatch: Giá trị không khớp với kiểu dữ liệu (email, url, v.v.).
        * valid: Giá trị hợp lệ (tất cả các kiểm tra đều thỏa mãn).

- validationMessage
    + Chứa thông báo lỗi mà trình duyệt sẽ hiển thị nếu giá trị không hợp lệ.

- willValidate
    + Xác định xem phần tử đầu vào có được kiểm tra hợp lệ hay không (giá trị luôn là true trừ khi phần tử bị vô hiệu hóa hoặc không có ràng buộc).