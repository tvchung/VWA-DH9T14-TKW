// cấu trúc điều khiển if trong javascript
let x = 10;
//  if đơn 
if(x > 5) {
    console.log('x lớn hơn 5');
}
// if...else
if (x > 5) {
    console.log('x lớn hơn 5');
} else {
    console.log('x không lớn hơn 5');
}

// if...else if...else
if (x > 10) {
    console.log('x lớn hơn 10');
} else if (x === 10) {
    console.log('x bằng 10');
} else {
    console.log('x nhỏ hơn 10');
}

// if lồng nhau
if (x > 5) {
    if (x < 15) {
        console.log('x lớn hơn 5 và nhỏ hơn 15');   
    } else {
        console.log('x lớn hơn hoặc bằng 15');
    }
} else {
    console.log('x nhỏ hơn hoặc bằng 5');
}
