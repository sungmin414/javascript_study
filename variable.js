// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';

// 2. Variable 변수
// let (added in ES6) 변수를 사용할땐 let을 사용
let globalName = 'global name'
{
let name = 'sungmin';
console.log(name);
name = 'hellow';
console.log(name);
console.log(globalName);
}

console.log(name);
console.log(globalName);

// var 옛버전 변수 선언
// var hoistingㅇㅣ란? 어디에 선언했나 상관없이 항상 제일 위로 선언을 끌어올려준다
// has no block scope 블럭스코프 상관없이 값이 할당된다

// 3 Constants
// 값이 잠겨져있음 값을 변경 못함
// - security 보안
// - thread safety 다양한쓰레드들이 효율적으로 사용가능
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4.Varible types
// primitive, single item: number, string, boolean, null, undefiedn, symbol
// object. box container
// function, first-class function

const count = 17; //integer
const size = 17.1 //dcimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speical numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (firly new, don't use it yet)
const bigInt = 123456789012345678901234567890n; //over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

//srting
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value:' + helloBob + ' type: ' + typeof helloBob);

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
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const sungmin = {name: 'sungmin', age: 33};
sungmin.age = 20;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));