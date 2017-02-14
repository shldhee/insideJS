/*
    함수를 호출할 때 기존 매겹ㄴ수로 전달되는 인자값에 더해, 앞서 설명한 arguments 객체 및 this 인자가 함수 내부로 암묵적으로 전달된다.
    this 인자는 고급 자바스크립트 개발자로 가기 위해 확실히 이해해야 한다.
    this가 이해하기 어려운 이유는 함수가 호출되는 방식(호출 패턴)에 따라 this가 다른 객체를 참조한(this 바인딩) 대문이다.
*/

//객체의 메서드 호출할 떄 this 바인딩
/*
    객체의 프로퍼티가 함수일 경우, 이 함수를 메서드라고 부른다.
    메서드 호출 시, 메서드 내부 코드에서 사용된 this는 "해당 메서드를 호출한 객체로 바인딩" 된다.
*/

var myObject = {
    name: "foo",
    sayName: function() {
        console.log(this.name);
    }
};

var otherObject = {
    name: "bar"
};

otherObject.sayName = myObject.sayName;

myObject.sayName();
otherObject.sayName();

/*
    "this는 자신을 호출한 객체에 바인딩된다"
    myObject 객체에서 sayName() 호출 시, this는 myObject 객체를 가리킴
    otherObject 객체에서 sayName() 호출 시, this는 otherObject 객체를 가리킴
*/

//함수를 호출할 떄 this 바인딩
/*
    자바스크립트에서 함수를 호출하면, 해당 함수 내부 코드에서 사용된 "this는 전역 객체에 바인딩"된다.
    브라우저에서 자바스크립트를 실행하는 경우 전역 객체는 window 객체가 된다.

    자바스크립트의 모든 전역 변수는 실제로를 이러한 전역 객체의 프로퍼티들이다.
*/

var foo = "I'm foo";

console.log(foo);
console.log(window.foo);

// 따라서 전역 변수는 전역 객체(window)의 프로퍼티로도 접근할 수 가 있다.

// 함수 호출 this 바인딩
var test = "This is test";
console.log(window.test);

var sayFoo = function () {
    console.log(this.test);
};
sayFoo();

// test라는 전역 변수 선언, 전역 변수는 전역 객체 window의 프로퍼티로 접근 가능
// sayFoo() 함수가 호출된 시점에서 this는 전역 객체인 window에 바인딩된다. 때문에 this.test는 window.test를 의미한다.
