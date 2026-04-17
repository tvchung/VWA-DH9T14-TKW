// khái niệm về mảng trong Javascript
// tạo mảng
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['a', 'b', 'c', 'd'];
let arr3 = [1, 'a', true, null];
// truy cập phần tử trong mảng
console.log(arr1[0]);
console.log(arr2[1]);
console.log(arr3[2]);
// thay đổi phần tử trong mảng (gán giá trị mới cho phần tử tại vị trí index)
arr1[0] = 101;
console.log(arr1);
// độ dài của mảng
console.log(arr1.length);
// mảng có thể chứa các phần tử khác nhau
let arr4 = [1, 'a', true, null, [1, 2, 3]];
console.log(arr4);  

// duyệt mảng bằng vòng lặp for
console.log("duyệt mảng bằng vòng lặp for");

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}
console.log("duyệt mảng bằng vòng lặp for..in");
for (let i in arr1) {
    console.log(arr1[i]);
}
console.log("duyệt mảng bằng vòng lặp for..of");
for (let value of arr1) {
    console.log(value);
}