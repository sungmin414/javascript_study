'use strict';

// JavaScript is synchronous. (동기적으로 실행)
// Execute the code block in order after hoisting. (코드 블록을 순서대로 실행)
// hoisting: var, function declaration (자동적으로 제일 위로 올라감, 자동적으로 실행)

// 비동기적인 실행방법
console.log('1');
// 브라우저 api (setTimeout) 1뒤에 실행
setTimeout(() =>  console.log('2'), 1000);
console.log('3');

// Synchronous callback (동기적 콜백)
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));


// Asynchronous callback (비동기 콜백)
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
};
printWithDelay(() => console.log('async callback'), 2000);


// Callback Hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if (
                (id === 'sungmin' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if ( user === 'sungmin'){
                onSuccess({name: 'sungmin', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error)
    }
);
