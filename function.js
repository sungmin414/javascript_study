function printhello(){
    console.log('Hello');
}
printhello();


function log(message){
    console.log(message);
}
log('Hello@');
log(1234);

function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);

function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`)
}
showMessage('Hi!')

function printAll(...args){
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    // 위에 간추려서 만들수있음
    for (const arg of args){
        console.log(arg);
    }
    // 위에 간추려서 만들수있음
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'conding', 'ellie');


let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); //error
}
printMessage();

function sum(a,b){
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1,2)}`);


// bed
function upgradUser(user){
    if (user.point > 10){
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10){
        return;
    }
    // long upgrade logic...
}

// Callback

function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}
// anonymous function
const printYes = function (){
    console.log('yes!');
};
//  named function

const printNo = function print(){
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
// always anonymous
const simplePrint = function(){
    console.log('simplePrint!');
};

// 위에 코드를 쉽게 바꿀수있음
// const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a,b) => {
    //do something more
    return a * b
};

// 정의한 함수를 바로 호출방법
(function Hello(){
    console.log('IIFE');
})();

