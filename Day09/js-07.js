// Toán tử so sánh trong Javascript
let x = 10;
let y = 20;

console.log(x, '>', y, '=', x > y);
console.log(x, '<', y, '=', x < y);
console.log(x, '>=', y, '=', x >= y);
console.log(x, '<=', y, '=', x <= y);
console.log(x, '==', y, '=', x == y);
console.log(x, '!=', y, '=', x != y);   
console.log(x, '===', y, '=', x === y);
console.log(x, '!==', y, '=', x !== y);

let z = '10';
console.log(x, '==', z, '=', x == z);
console.log(x, '===', z, '=', x === z);

// Toán tử logic trong Javascript
console.log("Toán tử logic trong Javascript");

let a = true;
let b = false;  
console.log(a, '&&', b, '=', a && b);
console.log(a, '||', b, '=', a || b);
console.log('!', a, '=', !a);   
//Toán đặc biệt
console.log("Toán tử đặc biệt trong Javascript");
let c = 5;
console.log('c++ =', c++);
console.log('++c =', ++c);
console.log('c-- =', c--);
console.log('--c =', --c);

console.log('x =', x);
console.log('y =', y);

kq = (x > y) ? 'x lớn hơn y' : 'x không lớn hơn y';
console.log(kq);

typeof x; // number
typeof z; // string

console.log(typeof(x), typeof(z));
