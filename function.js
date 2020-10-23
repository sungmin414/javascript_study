'use strict';

// Function (함수)
// - fundamental building block in the program (프로그램의 기본 구성요소)
// - subprogram can be used multiple times (서브 프로그램은 여러번 사용할수 있음)
// - performs a task or calculates a value (작업을 수행하거나 값을 계산)

// 1. Function declaration (함수선언)
// function name(param1, param2) {body... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('hi');
log(1234);


//  2. Parameters (매개변수)
// premitive parameters: passed by value (값으로 전달)
// object parameters: passed by reference (참조로 전달)
function changName(obj){
    obj.name = 'coder';
}
const sungmin = {name: 'sungmin'}
changName(sungmin);
console.log(sungmin);

// 3. Default parameters (added in ES6) (기본매개변수)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args){
    for (let i = 0; i < args.length; i++ ){
        console.log(args[i]);
    }
    // 이렇게도 사용함
    for (const arg of args){
        console.log(arg);
    }

    // 함수형 언어 이렇게도 사용가능
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'sungmin');

// 5. Local scope (지역범위)
let globalMessage = 'global'; //global variable
function printMessage(){
    let message = 'Hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); //error
}
printMessage();

// 6. Return a value
function sum(a,b){
    return a + b;
};
const result = sum(1, 2) // 3
console.log(`sum: ${sum(1,2)}`)

// 7. Early return, early exit (조기복귀, 조기종료)
// bad
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic...

    }
}
// good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // long upgrade logic...
}

// first-class function
// functions are treated like any other variable (함수는 다른변수처럼 취급)
// can be assigned as a value to variable (변수의 값으로 할당가능)
// can be passed as an argument to other functions. (다른함수에 인수로 전달할수 있음)
// can be returned by another function (다른함수에 의해 반환될수있음)

// 1. Function expression (함수 표현식)
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function (){
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression (함수 표현식을 사용한 콜백 함수)
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}

// anonymous function (익명 함수)
const printYes = function (){
    console.log('yes!');
}

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print(){
    console.log('no!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function 
// always anonymous
// const simplePrint = function(){
//     console.log('simpleprint');
// };
//  위에 코드를 줄여서 사용
const simplePrint = () => console.log('simpleprint');
const add = (a, b) => a + b;
const simpleMultiply = (a,b) => {
    // do something more
    return a * b;
};


// IIFE: Immediately Invoked Function Expression
// 함수 호출과동시에 실행 (function)()
(function hello(){
    console.log('IIFE');
})();

// Quiz
// function calculate(command, a,b)
// command: add, substract, divide, multiply, remainder
function calculate(command, a,b){
    switch (command){
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('값을 넣어라')
    }
}
console.log(calculate('add', 3,2));