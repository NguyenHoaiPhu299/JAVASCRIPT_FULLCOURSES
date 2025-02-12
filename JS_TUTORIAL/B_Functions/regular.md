# Javascript Regular Functions
## Giới thiệu
- Hàm trong JS là một khối mã được thước kế để thực hiện một nhiệm vụ cụ thể.

- Một hàm JS chỉ được thực thi khi được gọi.

- Với hàm, ta có thể tái sử dụng mã nhiều lần

- Có thể sử dụng cùng một mã với nhiều đối số khác nhau để tạo ra kết quả khác nhau.

## Syntax
- Hàm JS được xác định bởi từ khóa `function`, theo sau là tên, tiếp đó là dấu ngoặc đơn `()`
```
function name(parameter1, parameter2, parameter3) {
    // code to be executed
}
```

- Têm hàm có thể chứa: chữ cái, chữ số, dấu gạch dưới, dấu đô la (cùng quy tắc với các biến)

- Có thể bao gồm các tham số bên trong dấu ngoặc đơn `()`, và được phân tách bằng dấu phẩy
```
(parameter1, parameter2,...)
```

- Mã được thực thi bởi hàm được đặt nằm trong dấu ngoặc kép `{}`

- Đối số của hàm là các giá trị nhận được bởi hàm khi nó được gọi.

- Bên trong hàm, các đối số (tham số) hoạt động như các biến cục bộ.

- Ví dụ:
```js
function myFunction(p1, p2) {
    return p1 * p2;
}
```

## Function Invocation
- Mã bên trong hàm được thực thi khi hàm đó được gọi, có thể là:
    - Khi một sự kiện xảy ra (Khi user nhấn vào một nút)
    
    - Khi nó được gọi từ một JavaScript code

    - Tự động gọi

## Function Return
- Khi JS bắt được câu lệnh `return`, hàm sẽ dừng thực thi

- Nếu hàm được gọi từ một câu lệnh nào đó, JavaScript sẽ "trả về" để tiếp tục thực thi đoạn mã ngay sau câu lệnh gọi hàm.

- Các hàm thường thực hiện tính toán và trả về một giá trị. Giá trị trả về này sẽ được gửi lại cho nơi gọi hàm.

```js
// Gọi hàm, giá trị trả về sẽ được gán vào biến x
let x = myFunction(4, 3);  

function myFunction(a, b) {  
  // Hàm trả về tích của a và b  
  return a * b;  
}
```

## Functions Used as Variable Values
- Hàm có thể được sử dụng giống như biến trong các công thức, phép gán và tính toán. Giúp mã ngắn gọn dễ hiểu và tránh tạo thêm nhiều biến không cần thiết.
```js
// Thay vì lưu giá trị hàm vào một biến
let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";

// Ta có thể gọi hàm trực tiếp trong biểu thức
let text = "The temperature is " + toCelsius(77) + " Celsius";
// toCelsius(77) sẽ được thực thi trước
// sau đó: kết quả sẽ được nối vào chuỗi "The temperature is ... Celsius".
```

## Local Variables
- Các biến được khai báo bên trong một hàm trong JavaScript sẽ trở thành biến cục bộ của hàm đó.
    - Biến cục bộ chỉ có thể được truy cập bên trong hàm mà nó được khai báo.

    - Bên ngoài hàm, biến này không thể sử dụng được.

    - Được tạo ra khi hàm bắt đầu thực thi, bị xóa khi hàm kết thúc.

    - Giúp tiết kiệm bộ nhớ

```js
// Đoạn code này KHÔNG thể sử dụng biến carName

function myFunction() {
    let carName = "Volvo";
    // Đoạn code này CÓ THỂ sử dụng biến carName
}

// Đoạn code này KHÔNG thể sử dụng biến carName
```

- Có thể sử dụng cùng một tên biến trong nhiều hàm khác nhau mà không lo bị xung đột.

```js
function function1() {
    let carName = "Volvo";
    console.log(carName); // Kết quả: "Volvo"
}

function function2() {
    let carName = "Toyota";
    console.log(carName); // Kết quả: "Toyota"
}

function1();
function2();
```