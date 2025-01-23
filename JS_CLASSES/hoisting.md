# Hoisting Class
- Không giống như các hàm và các khai báo JavaScript khác, các khai báo lớp không được hoisting.
- Điều đó có nghĩa phải khai báo một lớp trước khi có thể sử dụng nó:

```js
//You cannot use the class yet.
//myCar = new Car("Ford") will raise an error.

class Car {
    constructor(brand) {
        this.carname = brand;
    }
}

//Now you can use the class:
const myCar = new Car("Ford")
```

Lưu ý: Đối với các khai báo khác, như hàm, bạn sẽ KHÔNG gặp lỗi khi cố gắng sử dụng nó trước khi nó được khai báo, vì hành vi mặc định của các khai báo JavaScript là hoisting (di chuyển khai báo lên trên cùng).