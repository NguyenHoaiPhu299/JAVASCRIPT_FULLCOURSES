# Static Method
## Giới thiệu
- Là các phương thức được định nghĩa trên chính lớp (class), thay vì trên các đối tượng được tạo từ lớp đó.
- Không thể gọi một phương thức tĩnh trên đối tượng của lớp mà chỉ có thể gọi trên chính lớp.

## Định nghĩa và sử dụng phương thức tĩnh
- Ví dụ 1: Định nghĩa và gọi một phương thức tĩnh
```js
class Car {
    constructor(name) {
        this.name = name; // Thuộc tính của đối tượng
    }
    static hello() {
        return "Hello!!"; // Phương thức tĩnh
    }
}

// Gọi phương thức tĩnh trên lớp
console.log(Car.hello()); // Output: Hello!!

// Không thể gọi phương thức tĩnh trên đối tượng
const myCar = new Car("Ford");
// console.log(myCar.hello()); // Uncaught TypeError: myCar.hello is not a function
```

## Truyền đối tượng vào phương thức tĩnh
- Nếu muốn sử dụng một đối tượng trong phương thức tĩnh, ta cần truyền nó dưới dạng tham số
```js
class Car {
    constructor(name) {
        this.name = name;
    }
    static hello(carObject) {
        return "Hello " + carObject.name;
    }
}

const myCar = new Car("Toyota");
console.log(Car.hello(myCar)); // Output: Hello Toyota
```

## Đặc điểm của phương thức tĩnh
- Không thể truy cập các thuộc tính hay phương thức không tĩnh của lớp hoặc của đối tượng.
- Chỉ có thể gọi trên lớp, không thể gọi trên một instance (đối tượng).
- Thường được dùng cho các tiện ích hoặc chức năng không phụ thuộc vào một đối tượng cụ thể.
```js
class MathUtils {
    static add(a, b) {
        return a + b;
    }
    static multiply(a, b) {
        return a * b;
    }
}

console.log(MathUtils.add(5, 3));       // Output: 8
console.log(MathUtils.multiply(5, 3)); // Output: 15
```