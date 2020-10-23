// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';

// 2. Valiable (변수), rw(read(읽기)/write(쓰기)) 
// let (added in ES6) 변수사용할때 사용
let globalName = 'global name';
{
let name = 'sungmin';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);

// var 변수선언할때 사용 하지만 옛버전 이제 안씀(don't ever use this!)
// var hoisting 어디에 선언했냐 상관없이 항상 제일위로 선언을 끌어올려준다
// var는 블록스코프가없음 {}
{
age = 4;
var age;
}
console.log(age);

// 3. Contant 한번 할당하면 값이 바뀌지 않음, r(read only(읽기만가능))
// use const whenever possible.(가능할 때마다 const를 사용)
// only use let if valiable needs to change. (유효한 변경이 필요한 경우에만 let을 사용)
const daysInWeek = 7;
const maxNumber = 3;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons: 몇 가지 이유로 항상 불변 데이터 유형을 선호
//  - security  보안
//  - thread safety 안전성
//  - reduce human mistakes 실수를 줄임
// Mutable - let 변경할수있는
// Immutable - const 변경할수없는


// 4. Variable types
// primitive, single item: number, string, boolean, null, undefiedn, symbol
// object, box container
// function, first-class function

const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speical numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet) 잘사용하진 않을테지만 새로 나옴 숫자마지막에 n붙임
const bigInt = 123456789012345678901234567890n; //over (-2**53 ~ 2*53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER; 

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// symbol은 맵이나 자료구조에서 고유한 식발자가 필요하거나 아니면 동시에 다발적으로 우선순위로줄때
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
//  동일한 symbol을 사용하려면 for을 넣어준다
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
// symbol를 그냥 출력하면 오류남 .description을 꼭 붙여주기
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure (객체, 실제객체, 데이터구조)
const sungmin = {name:'sungmin', age:20};
sungmin.age = 21;


// 5. Dynamic typing: dynamically typed language (동적언어)
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0));