# Setter và Getter
## Giới thiệu
- Cho phép kiểm soát cách truy cập và thay đổi giá trị của thuộc tính trong một lớp
- Chúng hữu ích khi ta muốn thực hiện một số logic trước khi trả về getter hoặc gán (setter) cho giá trị
- Sử dụng từ khóa get và set để định nghĩa getter, setter

## Cách sử dụng
- Ví dụ 1: Thêm getter và setter cho thuộc tính carname
```js
class Car {
    constructor(brand) {
        this.carname = brand; // Thuộc tính carname
    }
    // Getter để lấy giá trị
    get cnam() {
        return this.carname;
    }
    // Setter để thay đổi giá trị
    set cnam(x) {
        this.carname = x;
    }
}

const myCar = new Car("Ford");
console.log(myCar.cnam); // Output: Ford
myCar.cnam = "Volvo";    // Gán giá trị mới
console.log(myCar.cnam); // Output: Volvo
```

## Quy tắc sử dụng Getter và Setter
- Không sử dụng dấu ngoặc ()
    - Khi gọi getter hoặc setter, không cần dùng dấu ngoặc đơn như một phương thức thông thường
    ```js
    console.log(myCar.cnam); // Đúng
    console.log(myCar.cnam()); // Sai
    ```
- Tên getter/setter khác với tên thuộc tính thực tế
    - Tên phương thức getter hoặc setter không được trùng với tên thuộc tính. Điều này tránh vòng lặp vô hạn.

## Cách tách biệt getter/setter với thuộc tính
- Dùng ký tự gạch dưới _: Phân biệt giữa thuộc tính thực tế và getter/setter
```js
class Car {
    constructor(brand) {
        this._carname = brand; // Thuộc tính thực tế
    }
    get carname() {
        return this._carname; // Trả về giá trị của _carname
    }
    set carname(x) {
        this._carname = x; // Gán giá trị mới cho _carname
    }
}

const myCar = new Car("Ford");
console.log(myCar.carname); // Output: Ford
myCar.carname = "Toyota"; // Sử dụng setter
console.log(myCar.carname); // Output: Toyota
```

## Khi nào nên dùng Getter setter
- Khi cần kiểm tra hoặc xử lý dữ liệu trước khi trả về hoặc gán giá trị
- Khi muốn bảo về thuộc tính khởi bị truy cập trực tiếp từ bên ngoài lớp
- Đảm bảo tính đóng gói (encapsulation) trong OOP