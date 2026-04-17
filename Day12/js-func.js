// khái niệm hàm trong Javascript
// khai báo hàm
function greet(name) {
    console.log(`Hello, ${name}!`);
}
// gọi hàm
greet("Alice");
greet("Bob");
// hàm có giá trị trả về
function add(a, b) {
    return a + b;
}
let sum = add(5, 10);
console.log("Tổng: ", sum); 
// hàm có tham số mặc định
function greetWithDefault(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greetWithDefault(); // Hello, Guest!
greetWithDefault("Alice"); // Hello, Alice! 
// hàm có thể nhận nhiều tham số
function multiply(a, b, c) {
    return a * b * c;
}
let product = multiply(2, 3, 4);
console.log("Tích: ", product);

// function expression
let greet2 = function(name) {
    console.log(`Hi, ${name}!`);
}   
greet2("Charlie");
// arrow function
let greet3 = (name) => {
    console.log(`Hey, ${name}!`);
}
greet3("Dave");
