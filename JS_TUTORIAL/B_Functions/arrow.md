# Javascript Arrow Functions
## Giới thiệu
- Được giới thiệu trong phiên bản `ES6` và cho phép chúng ta viết hàm với cú pháp ngắn gọn hơn.

- Chú ý: Nếu hàm chỉ có một dòng code duy nhất và trả về giá trị, ta có thể bỏ luôn dấu `{}` và từ khóa `return`

```js
// Normal Function
hello = function() {
    return "Hello World!";
}

// Arrow function
hello = () => {
    return "Hello World!";
}

// Shorthand
hello = () => "Hello World!";
```

## Arrow Function có tham số
- Nếu có tham số, truyền dấu `()` như sau

- Lưu ý: Nếu chỉ có một tham số, ta có thể bỏ luôn dấu `()` xung quanh tham số

```js
hello = (val) => "Hello " + val;

hello = val => "Hello " + val;
```

## Từ khóa this
- Arrow Functions xử lý `this` khác với Normal Functions
    - Trong Normal Function:
        - `this` đại diện cho đối tượng gọi hàm (`window`, `document`, một `button`,...)
        
    - Trong Arrow Function:
        - `this` không bị ràng buộc (`no binding`).

        - Nó luôn đại diện cho đối tượng mà hàm được định nghĩa, không phụ thuộc vào cách hàm được gọi

```js
// Normal Function
hello = function() {
    document.getElementById("demo").innerHTML += this;
}

// Gọi hàm khi trang tải xong -> this là `window`
window.addEventListener("load", hello);

// Gọi hàm khi người dùng nhấn nút -> this là `button`
document.getElementById("btn").addEventListener("click", hello);

// Arrow Function
hello = () => {
    document.getElementById("demo").innerHTML += this;
}

// Gọi hàm khi trang tải xong -> this là `window`
window.addEventListener("load", hello);

// Gọi hàm khi người dùng nhấn nút -> this vẫn là `window`
document.getElementById("btn").addEventListener("click", hello);
```