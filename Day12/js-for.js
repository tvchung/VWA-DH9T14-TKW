// vòng lặp for

// in ra các số từ 1 đến 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// in ra các số chẵn từ 1 đến 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log('------------------');
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// for khuyết 
let i = 1;
let str='';
let sum = 0;
for (; i <= 10; i++) {
    str += i + ' ';
    sum += i;
}
console.log(str,"Tổng: ", sum);
