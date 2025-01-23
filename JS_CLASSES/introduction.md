# Javascript Classes (ES6)
## Giới thiệu:
- JS Classes là template để tạo ra các đối tượng.
- Được giới thiệu trong ECMAScript 2015, giúp viết mã dễ hiểu và có cấu trúc hơn
## Cú pháp tạo class
- Sử dụng từ khóa class
- constructor(): là phương thức đặc biệt được đùng dể khởi tạo các thuộc tính cho đối tượng.
```js
class ClassName {
    constructor(parameters) {
        // Khởi tạo thuộc tính
    }
}
```
- Ví dụ:
```js
class Car {
    constructor(name, year) {
        this.name = name; // Thuộc tính 'name'
        this.year = year; // Thuộc tính 'year'
    }
}
```
## Tạo đối tượng từ class
- Sử dụng từ khóa new
```js
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

console.log(myCar1.name); // Output: Ford
console.log(myCar2.year); // Output: 2019
```

## Constructor Method
- Phương thức constructor sẽ được gọi khi một đối tượng được tạo
- Dùng để gán giá trị khởi tạo cho các thuộc tính của đối tượng
- Nếu không định nghĩa constructor(), JS sẽ cung cấp một constructor mặc định rỗng

## Các phương thức trong class
- Tạo phương thức trong class tương tự như phương thức object literal
- Phương thức được định nghĩa trực tiếp trong lớp
```js
class ClassName {
    constructor() { ... }
    method_1() { ... }
    method_2() { ... }
}
```
- Ví dụ: Tạo phương thức tính tuổi của xe
```js
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myCar = new Car("Ford", 2014);
console.log("My car is " + myCar.age() + " years old.");
```

- Ví dụ: Truyền tham số cho phương thức
```js
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(currentYear) {
        return currentYear - this.year;
    }
}

const date = new Date();
const year = date.getFullYear();

const myCar = new Car("Ford", 2014);
console.log("My car is " + myCar.age(year) + " years old.");
```

## "Strict mode" trong class
- Mọi cú pháp trong class đều phải tuân thủ theo strict mode
- Ví dụ: Sử dụng biến mà không khai báo sẽ gây lỗi
```js
// Ví dụ đúng
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        const date = new Date(); // Khai báo biến trước khi dùng
        return date.getFullYear() - this.year;
    }
}
```

```js
// Ví dụ sai
class Car {
    age() {
        date = new Date(); // Lỗi vì 'date' chưa được khai báo
        return date.getFullYear() - this.year;
    }
}
```