# Javascript Class Inheritance
## Giới thiệu
- Trong JS, ta có thể tạo một lớp kế thừa từ lớp khác bằng cách sử dụng từ khóa extends
- Lớp con (child class) sẽ thừa hưởng toàn bộ phương thức và thuộc tính từ lớp cha (parent class)

## Cách sử dụng extends để kế thừa
- Ví dụ: Tạo một lớp Model kế thừa lớp Car
```js
class Car {
    constructor(brand) {
        this.carname = brand; // Thuộc tính 'carname'
    }
    present() {
        return 'I have a ' + this.carname; // Phương thức 'present'
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand); // Gọi constructor của lớp cha
        this.model = mod; // Thêm thuộc tính mới 'model'
    }
    show() {
        return this.present() + ', it is a ' + this.model; // Gọi phương thức của lớp cha
    }
}

// Tạo đối tượng từ lớp con
let myCar = new Model("Ford", "Mustang");
console.log(myCar.show()); // Output: "I have a Ford, it is a Mustang"
```

## Phương thức super()
- Được sử dụng để gọi constructor() của lớp cha, và có quyền truy cập các thuộc tính và phương thức của lớp cha
- Khi lớp con sử dụng constructor, ta bắt buộc phải gọi super() trước khi truy cập this.
```js
class Car {
    constructor(brand) {
        this.carname = brand;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        // Gọi constructor của lớp cha để khởi tạo thuộc tính 'carname'
        super(brand); 
        this.model = mod; // Khởi tạo thêm thuộc tính 'model'
    }
}

const myCar = new Model("Toyota", "Corolla");
console.log(myCar.carname); // Output: Toyota
console.log(myCar.model);   // Output: Corolla
```


## Lợi ích của kế thừa
- Tái sử dụng mã
    - Khi tạo lớp mới, ta có thể tái sử dụng các thuộc tính và phương thức từ lớp hiện có
    - Giảm sự trùng lặp và tăng tính bảo trì
```js
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} makes a noise.`;
    }
}

class Dog extends Animal {
    speak() {
        return `${this.name} barks.`;
    }
}

const myDog = new Dog("Rex");
console.log(myDog.speak()); // Output: Rex barks.
```

## Ghi đè phương thức (method overriding)
- Lớp con có thể ghi đè phương thức của lớp cha bằng cách định nghĩa lại phương thức đó trong lớp con
```js
class Car {
    start() {
        return "The car is starting.";
    }
}

class ElectricCar extends Car {
    start() {
        return "The electric car is starting silently.";
    }
}

const myCar = new ElectricCar();
console.log(myCar.start()); // Output: The electric car is starting silently.
```

## Kết hợp với DOM
- Dùng lớp kế thừa để hiển thị thông tin trong HTML
```js
class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

let myCar = new Model("Tesla", "Model S");
document.getElementById("demo").innerHTML = myCar.show();
```