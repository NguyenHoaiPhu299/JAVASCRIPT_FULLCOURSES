# JavaScript Validation API

- Constraint Validation DOM methods: hai phương thức chính giúp kiểm tra và xử lý tính hợp lệ của dữ liệu đầu vào trong các phần tử <input> là:

    + checkValidity(): Kiểm tra xem dữ liệu nhập có hợp lệ hay không và trả về true hoặc false.

        * Mô tả: kiểm tra xem một phần tử <input> có hợp lệ hay không, dựa vào các ràng buộc được đặt sẵn (required, min, max, pattern,...)

        * Trả về: true nếu dữ liệu đầu vào hợp lệ và false nếu ngược lại.

        * Ví dụ: check_validity_demo.html

        * Ứng dụng: thường được sử dụng để kiểm tra nhanh tính hợp lệ của một trường nhập liệu mà không cần submit form.
    
    + setCustomValidity(): Thiết lập một thông báo lỗi tùy chỉnh cho phần tử <input> để cung cấp thông tin chi tiết hơn khi dữ liệu không hợp lệ.

        * Mô tả: cho phép thiết lập thông báo lỗi tùy chỉnh cho một phần tử <input>

        * Thông báo tùy chỉnh này sẽ được gán cho thuộc tính validationMessage.

        * Tham số: Chuỗi văn bản thông báo lỗi, nếu truyền vào một chuỗi rỗng (""), nó sẽ xóa thông báo lỗi tùy chỉnh và sử dụng thông báo mặc định của trình duyệt (nếu có lỗi.)

        * Ví dụ: set_custom_validity_demo.html
        
        * Ứng dụng: được sử dụng khi muốn cung cấp thông báo lỗi cụ thể cho các trường hợp không hợp lệ, thay vì sử dụng thông báo mặc định của trình duyệt.