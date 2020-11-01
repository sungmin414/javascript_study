'use strict';

// Array (배열)

// 1. Declaration (선언)
const arr1 = new Array();
const arr2 = [1,2];

// Index position (위치)
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits['0']);
console.log(fruits['1']);
console.log(fruits['2']);
console.log(fruits[fruits.length - 1]);

console.clear();
// 3. Looping over an array
// print all fruits
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for( let fruit of fruits){
    console.log(fruit);
}

// c. forEach (콜백함수받아옴)
fruits.forEach((fruit, index) => console.log(fruit));

// 4. Addtion, deletion, copy (추가, 삭제, 복사)
// push: add an item to the end (추가)
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end (삭제)
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging (앞에서부터 추가하기)
fruits.unshift('🍓','🍋')
console.log(fruits);
// shift: remove an item from the benigging (앞에서부터 데이터 삭제)
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('🍓','🍑','🍋');
console.log(fruits);
fruits.splice(1,1); // 1, 1에 들어있는 과일 삭제
console.log(fruits);
fruits.splice(1, 1, '🍏','🍉'); // 1, 1 에들어있는 딸기를 지워주고 사과와 수박을 추가해줌
console.log(fruits);

// combine two arrays (두가지 배열을 묶어서사용)
const fruits2 = ['🍐','🥥'];
const newFruits = fruits.concat(fruits2); // concat(연결)
console.log(newFruits);

// 5.Searching (검색)
// indexOf: find the index (해당하는 위치 알려줌, 0,1,2,3)
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));

//  includes (포함하는지 true, false로 알려줌)
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));
console.log(fruits.indexOf('🥥')); //해당하는 값이 없으면 -1출력

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));