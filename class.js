'use strict';

// object-oriendted programming (객체 지향 프로그래밍)
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person{
    // constructor (건설자)
    constructor(name, age){
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak(){
        console.log(`${this.name}: Hello!`);
    }
}
const sungmin = new Person('sungmin', 20);
console.log(sungmin.name);
console.log(sungmin.age);
sungmin.speak();

// 2. Getter and Setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // 값을 리턴
    get age(){
        return this._age;
    }
    // 값을 설정
    set age(value){
        // if (value < 0){
        //     throw Error('age can not be negative');
        // }

        this._age = value < 0 ? 0 : value;
        
    }
}

const user1 = new User('steve', 'job', -1);
console.log(user1.age);

// 3. Fields (public, private) 새로생김 아직사용은 이름
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/reference
class Experiment{
    publicField = 2;
    // 값을 읽거나 변경할수없음
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods, 아직쓰기에는 무리
// Too soon!
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance (상속)
// a way for one class to extend another class.(한 클래스가 다른 클래스를 확장하는 방법.)
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`);
    }

    getArea(){
        return this.width * this.height;
    }
}

//  extends를 이용해 Shape를 상속받음
class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        // 부모의 매소드도 호출할수있음 (super를 사용)
        super.draw();
        console.log('🔺');
    }
    // 오버라이딩해서 필요한 함수만 제정의할수있음
    getArea(){
        return (this.width * this.height) / 2;
    }

    toString(){
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw()
console.log(triangle.getArea());

// 6. Class checking: instanceOf (클래스 검사)
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());
