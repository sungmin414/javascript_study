'use strict';

// Promise is a JavaScript object for asynchronous operation. (비동기 작업을 위한 자바스크립트객체)
//  State(상태): pending -> fulfilled or rejected
//  Producer vs Consumer (생산자, 소비자)

// 1. Producer(생산자)
//  when new Promise is created, the executor runs automatically.
// (새 Promise가 생성되면 executor가 자동으로 실행됩니다.)
//  resolve (기능을 정상적으로 수행해서 마지막에 최종데이터를 전달하는 콜백함수)
//  reject ( 기능을 수행하다 중간에 문제가 생기면 호출 )
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    // 데이터를 읽어오거나 받아올때 비동기적으로 처리하는게 좋음
    console.log('doing something...');
    setTimeout(() => {
        resolve('sungmin');
        // reject(new Error('no network'))
    }, 2000);
});

// 2. Consumers(소비자): then, catch, finally
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        console.log('finally');
    });

//  3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num))

//  4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`))
    });

getHen()
// .then(hen => getEgg(hen))
.then(getEgg)
// .catch(error => {
//     return '🥖';
// })
// .then(egg => cook(egg))
.then(cook)
// .then(meal => console.log(meal));
.then(console.log)
.catch(console.log);


// 5. 