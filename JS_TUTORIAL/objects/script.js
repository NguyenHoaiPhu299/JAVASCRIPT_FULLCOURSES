// Tạo một JS object, từ dấu '{' đến dấu '}' là một Object Literal
// ------------------------- Cách 1 --------------------------------------------
const car = {
    type: "Fiat",
    model: "500",
    color: "white",
    toString: function() {  // Object Method
        return this.type; // Từ khóa this chỉ đến chính đối tượng đó
    }
}
// ------------------------- Cách 2 --------------------------------------------
const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "red";
person.fullName = function() { // Object Method
    return this.firstName + " " + this.lastName; // Từ khóa this chỉ đến chính đối tượng đó
}
// ------------------------- Cách 3 --------------------------------------------
const animal = new Object();
animal.name = "Dog";
animal.sound = "J97";

// Truy cập thuộc tính của Object
animal.name = "Cat";
animal['sound'] = "Meow Meow";

// Object là Mutable
const phu = {
    firstName: "Phu",
    lastName: "Nguyen",
    age: 19
}

const x = phu;
x.age = 20;

console.log("[Object là Mutable] " . phu.age);