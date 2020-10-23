'use strict';

// objects
// one of the JavaScript's data types.(데이터 유형중 하나)
// a collection of related data and/or functionaliy.(관련 데이터 및 또는 기능 모음)
// Nearly all objects in JavaScript are instaces of Object (모든 객체는 ojbect의 인스턴스이다)
// object = { key : value };

// 1. Literals and properties (리터럴 및 속성)
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax
function print(person){
    console.log(person.name);
    console.log(person.age);
}

const sungmin = {name: 'sungmin', age: 4};
print(sungmin);

sungmin.hasJob = true;
console.log(sungmin.hasJob);

delete sungmin.hasJob;
console.log(sungmin.hasJob);

// 2. Computed properties (계산된 속성)
console.log(sungmin.name);
console.log(sungmin['name']);
sungmin['hasJob'] = true;
console.log(sungmin.hasJob);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(sungmin, 'name');
printValue(sungmin, 'age');

// 3. Property value shorthand (속성 값 속기)
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age:4};
const person4 = new Person('sungmin', 30);
console.log(person4);

// 4. Constructor Function (생산자 함수)
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}


// 5. in operator: property existence check (key in obj)
// 해당하는 키가 obj에 있는지 확인 (in)
console.log('name' in sungmin);
console.log('age' in sungmin);
console.log('random' in sungmin);
console.log(sungmin.random);


// 6. for..in vs for..of
// for (key in obj)
console.clear();

for (const key in sungmin){
    console.log(key);
}

//  for (value of iterable) (반복가능)
const array = [1,2,4,5];
// for (let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }
//  위 방법을 쉽게할수 있음
for (const value of array){
    console.log(value);
}

// 7. Fun cloning (복제)
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'sungmin', age: 20}
const user2 = user;
// user2.name = 'coder';
console.log(user2);

// old way
const user3 = {};
for (const key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
const user4 = Object.assign({}, user);
console.log(user4);

// another example (다른예시)
const fruit1 = {color:'red'};
const fruit2 = {color:'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);