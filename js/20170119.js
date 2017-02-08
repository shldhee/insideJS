/*
  자바스크립트에서는 함수를 호출할 떄 함수 형식에 맞춰 인자를 넘기지 않아도 에러가 발생하지 않는다.
*/

function func(arg1, arg2) {
  console.log(arg1, arg2);
}

/*
  func();
  func(1);
  func(1, 2);
  func(1,2,3);
*/

/*
  런타임 시에 호출된 인자의 개수를 확인하고 이에 따라 동작을 다르게 해줘야 할 경우가 있다.
  이를 가능케 하는게 arguments 객체다. 배열이 아니다! 배열 메서드 사용시 에러!
  유사배열객체!
*/

function add(a, b) {
  console.dir(arguments);
  return a+b;
}

console.log(add(1));
console.log(add(1,2));
console.log(add(1,2,3));

/*
  함수를 호출할 떄 넘겨진 인자(배열 형태) : 0번, 1번 ... 인덱스들
  length 프로퍼티 : 호출할때 넘겨진 인자의 개수
  callee 프로퍼티 : 현재 실행 중인 함수의 참조값 예제에서 add() 함수
*/

/*
  arguments 객체는 매개변수 개수가 정확하게 정해지지 않은 함수를 구현하거나,
  전달된 인자의 개수에 따라 서로 다른 처리르 해줘야 하는 함수를 개발하는데 유용하다
*/

/*
  sum() 함수는 호출된 이자 개수에 상관없이 이들 각각의 값을 모두 더해 리턴하는 함수다.
  arguments 객체를 사용할 경우 함수가 호출될 당시의 인자들에 배열 형태로 접근할 수 있으므로 이러한 구현이 가능
*/

function sum() {
  var result = 0;

  for(var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6,7,8,9));

// 수호 스터디

function max() {
    var maxNum,
		arg;
    if(arguments.length !== 1) { // 배열이 아닐떄
        maxNum = arguments[0];
        arg = arguments;
    } else { // 배열일때
        maxNum = arguments[0][0];
        arg = arguments[0]
    }
    for( i = 0; i <= arg.length; i++ ) {
        if(maxNum <= arg[i]) { maxNum = arg[i]; }
    }
    return maxNum;
}

//


/*
  호출 패턴과 this 바인딩
  함수 호출할때 기존 매개변수로 전달되는 것들과
  arguments 객체 및 this 인자가 함수 내부로 암묵적으로 전달.

  this 인자는 확실히 이해해야 한다. 어려운 이유는
  this는 함수가 호출되는 방식(호출 패턴)에 따라 this가 다른 객체를 참조하기(this 바인딩)이다.
*/

/*
  객체의 메서드 호출할 때 this 바인딩
  메서드 내부 코드에서 사용된 this는 해당 메서드를 호출한 객체로 바인딩 된다.
*/

var myObject = {
  name: 'foo',
  sayName : function () {
    console.log(this.name);
  }
};

var otherObject = {
  name: 'bar'
};

otherObject.sayName = myObject.sayName;  // otherObject.sayName 생성
// sayName() 메서드는 this.name 값을 출력하는 간단한 함수


myObject.sayName();
otherObject.sayName();

/*
  myObject 객체에서 sayName() 호출 시, this는 myObject 객체를 가리킴
  otherObject 객체에서 sayName() 호출 시, this는 otherObject 객체를 가리킴
  따라서 this는 자신을 호출한 객체에 바인딩된다.
*/

/*
  함수를 호출할 때 this 바인딩
  자바스크립트에서 함수를 호출하면 해당 함수 내부 코드에서 사용된 this는 전역 객체에 바인딩된다.
  즉, 브라우저에서 자바스크립트를 실행하는 경우 전역 객체는 window 객체가 된다.
*/

var foo = "I'm foo";

console.log(foo);
console.log(window.foo);
// I'm foo 같은 결과 띠라서 전역 변수는 전역 개체(windows)의 프로퍼티로도 접근할 수가 있다.

var test ='This is test';
console.log(window.test);

var sayFoo = function () {
  console.log(this.test); // sayFoo() 함수 호출 시 this는 전역 객체에 바인딩 된다.
}
sayFoo();

/*
  이러한 함수 호출에서의 this 바인딩 특성은 내부함수를 호출했을 경우에도 그대로 적용된다.
*/

var value = 100;

var myObj = {
  value: 1,
  func1: function () {
    this.value += 1; //객체의 메서드 호출할때 this는 해당 객체의 바인딩 된다.
    console.log('func1() called. this.value: ' + this.value);

    func2 = function() {
      this.value += 1; // 함수 호출시 this는 전역객체에 바인딩 된다. func1() 함수 호출
      console.log('func2() called. this.value : ' + this.value);

      func3 = function () {
        this.value += 1; // 함수 호출시 this는 전역객체에 바인딩 된다. func2() 함수 호출
        console.log('func3() called. this.value : ' + this.value);
      }

      func3();
    }

    func2();
  }
};
myObj.func1(); // 2, 101, 102

// 내부 함수 호출 패턴을 정의해 놓지 않기 떄문에 예측했던 것과 다르다.

/*
  내부 함수가 this를 참조하는 자바스크립트의 한계를 극복할려면 부모 함수(위 예제에서 func1() 메서드)의 this를 내부 함수가 접근 가능한 다른 변수에 저장하는 방법 사용
  that 변수에 this 값을 저장한다. 이렇게 되면 내부 함수에서 that 변수로 부모 함수 this가 가리키는 객체에 접근할 수 있다.
*/
var myValue = 100;

var inmyObj = {
  myValue: 1,

  func1: function () {
    var that = this; //func1()의 this의 값을 that에 저장 that은 이제 myObj객체에 바인딩 된 this를 가진다.

    this.myValue += 1;
    console.log('func1() called. this.myValue : ' + this.myValue); //2

    func2 = function() {
      that.myValue += 1;
      console.log('func2() called. this.myValue : ' + that.myValue); //3

      func3 = function() {
        that.myValue += 1;
        console.log('func3() called. this.mYvalue : ' + that.myValue); //4
      }
      func3();
    }
    func2();
  }
};

inmyObj.func1();
