'use strict'

// 1. String concatenation (문자열 연결)
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`)

// 2. Numeric operators (숫자 연산자)
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1 ); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

//  3. Increment and decrement operators (증가 및 감소 연산자)
let counter = 2;
const preIncrement = ++counter;
//  counter = counter + 1; ++counter와 같음
//  preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
//  postIncrement = counter;
//  counter = counter + 1;
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators (할당 연산자)
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators (비교 연산자)
console.log(10 < 6); //less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), !(not) 논리연산자
const value1 = true;
const value2 = 4 < 2;

// || (or), find the first truthy value(첫 번째 진실한 가치 찾기)
// or 연산자는 변수나 함수값에 true값이나오면 종료함
// 함수 연산자는 맨뒤에 배치
console.log(`or: ${value1 || value2 || check()}`);

//  && (and), finds the first falsy value (첫 번째 거짓 값을 찾음)
//  and 연산자는 변수나 함수값이 하나라도 false면 false값나옴
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress logn if-statement(logn if 문을 압축하는 데 자주 사용됨)
// nullableObject && nullableObject.sumething
// if (nullableObject != null){
//     nullableObject.something;
// }

function check(){
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('🤪');
    }
    return true;
};

//  !(not), 값을 반대로 바꿔줌
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by referaence
const sungmin1 = {name: 'sungmin'};
const sungmin2 = {name: 'sungmin'};
const sungmin3 = sungmin1;
console.log(sungmin1 == sungmin2);
console.log(sungmin1 === sungmin2);
console.log(sungmin1 === sungmin3);

//  equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if (조건부 연산자 : if)
//  if, else if, else
const name = 'sungmin';
if (name === 'sungmin'){
    console.log('Welcome, sungmin!');
} else if(name === 'coder'){
    console.log('You are amazing coder!');
} else {
    console.log('unkwnon');
}

// 9. Ternary operator: ? (삼항 연산자 :?)
// condition ? value1 : value2;
// 간단할때만 if 대신사용
console.log(name === 'sungmin' ? 'yes' : 'no');

// 10. Switch statement
//  use for multiple if checks
//  use for enum-like value check
//  use for multiple type checks in TS
const browser = 'Charom';
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Charom':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops (반복문)
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
};

// do while loop, body code is executed first,
// then check the condition.
// 먼저 블럭을 실행한뒤 조건이 맞는지 확인
do{
    console.log(`do while: ${i}`);
    i--;
}while (i > 0);

// for loop, for(begin; condition; step)
for ( i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for(let i = 3; i > 0; i = i - 2){
    // inline variable declaration(인라인 변수 선언)
    console.log(`inline variable for: ${i}`);
}

// nested loops (중첩)
for (let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}
// Q1. iterate from 0 to 10 and print only even numbers
for(let x = 0; x < 11; x++){
    if(x % 2 === 0){
        console.log(`Q1: ${x}`);
    }
};

// Q2. iterate from 0 to 10 and print numbers until reaching 8
for(let x = 0; x < 11; x++){
    if(x > 8){
        break;
    }
    console.log(`Q2: ${x}`);
}