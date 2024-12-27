// Destructuring Object (Đối tượng)
const person = {
    firstName: "Hoai",
    lastName: "Phu",
    age: 50
};
let { firstName, lastName } = person; // Tạo biến firstName và lastName từ các thuộc tính của person.
document.getElementById("demo").innerHTML = firstName + " " + lastName + "<hr>";

// Không quan trọng thứ tự
const person1 = {
    firstName1: "Phuong",
    lastName1: "Tien",
    age1: 50
};
let { lastName1, firstName1 } = person1;
document.getElementById("demo1").innerHTML = firstName1 + " " + lastName1 + "<hr>";

// Giá trị mặc định
const person2 = {
    firstName2: "Thien",
    lastName2: "An",
    age2: 50
};
let { lastName2, firstName2, country2 = "US" } = person2;
document.getElementById("demo2").innerHTML = firstName2 + " " + lastName2 + " " + country2 + "<hr>";

// Đổi tên biến
const person3 = {
    firstName3: "Phuong",
    lastName3: "Tuan",
    age3: 50
};
let { lastName3: last, firstName3: first } = person3;
document.getElementById("demo3").innerHTML = first + " " + last + "<hr>";

// Phân tách từng ký tự của chuỗi
let name = "W3Schools";
let [a, b, c, d, g] = name;
document.getElementById("demo4").innerHTML = a + " " + b + " " + c + " " + d + " " + g + "<hr>";

// Phân tách phần tử trong mảng
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
let [fruit1, fruit7] = fruits;
document.getElementById("demo5").innerHTML = fruit1 + " " + fruit7 + "<hr>";

// Sử dụng dấu phẩy để bỏ qua các phần tử không cần
let [fruit2, , , fruit6] = fruits;
document.getElementById("demo6").innerHTML = fruit2 + " " + fruit6 + "<hr>";

// Sử dụng vị trí index để phân tách phần tử
let { [1]: fruit3, [3]: fruit5 } = fruits;
document.getElementById("demo6").innerHTML = fruit3 + " " + fruit5 + "<hr>";

// Rest Property cho mảng
const numbers = [10, 20, 30, 40, 50, 60, 70];
const [ac, ab, ...rest] = numbers
document.getElementById("demo7").innerHTML =
    "<p>a is " + ac +
    "<p>b is " + ab +
    "<p>the rest is " + rest + "<hr>";

// Rest Property cho đối tượng
const { firstName: first_name, ...others } = person;
document.getElementById("demo8").innerHTML =
    "<p>First name is " + first_name +
    "<p>the others is " + others.lastName + ", " + others.age + "<hr>";

// Phân tách Maps
const fruit1s = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

let text = "";
for (const [key, value] of fruit1s) {
    text += key + " is " + value + "; ";
}

document.getElementById("demo9").innerHTML = text;

// Swap Variable
let first1 = "John", last1 = "Doe";
[first1, last1] = [last1, first1];

let o = 1, p = 2, q = 3;
[o, p, q] = [p, q, o];