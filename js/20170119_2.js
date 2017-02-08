/*
  생성자 함수를 호출할 때 this 바인딩
  자바스크립트의 생성자 함수는 말 그대로 자바스크립트의 객체를 생성하는 역할을 한다.

  (객체 생성 방법은 객체 리터럴 방식, 생성자 함수 이용)
  생성자 함수
  var obj = new Object();
  obj.name = "lee";
  obj.age = 31;

  기존 함수에 new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 등장한다.
  이는 반대로 생각하면 일반 함수에 new를 붙여 호출하면 원치 않는 생성자 함수처럼 동작할 수 있다.

  따라서 대부분의 자바스크립트 스타일 가이드에서는 특정 함수가 생성자 함수로
  정의되어 있음을 알리려고 함수 이름의 첫 문자를 대문자로 쓰기를 권하고 있다.
*/

/*
  생성자 함수를 호출할 때, 생성자 함수 코드 내부에서 this는 앞선 알아본 메서드와 함수 호출 방식에서의 this 바인딩과는 다르게 동작한다.
  이를 정확하게 이해할려면 생성자 함수가 호출됐을 때 동작하는 방식을 살펴봐야 한다.
*/

//생성자 함수가 동작하는 방식
//new 연산자로 자바스크립트 함수를 생성자로 호출하면, 다음과 같은 순서로 동작한다.
/*
  1. 빈 객체 생성 및 this 바인딩
      생성자 함수 코드가 실행되기 전 빈 객체가 생성된다. 바로 이 객체가 생성자 함수가 새로 생성하는 객체이며, 이 개체는 this로 바인딩 된다.
      따라서 이후 생성자 함수의 코드 내부에서 사용된 this는 이 빈 객체를 가리킨다.
      하지만 여기서 생성된 객체는 엄밀히 말하면 빈 객체는 아니다. 자바스크립트의 모든 객체는 자신의 부모인 프로토타입 객체와 연결되어 있으며,
      이를 통해 부모 객체의 프로퍼티나 메서드를 마치 자신의 것처럼 사용할 수 있기 때문이다.
      이렇게 생성자 함수가 생성한 객체는 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체로 설정한다(자바스크립트 규칙)

  2. this를 통한 프로퍼티 생성
      이후에도 함수 코드 내부에서 this를 사용해서, 앞에서 생성된 빈 객체에 동적으로 프로퍼티나 메서드를 생성할 수 있다.

  3. 생성된 객체 리턴
      리턴문이 동작하는 방식은 경우에 따라 다르므로 주의해야 한다. 우선 가장 일반적인 경우로 특별하게 리턴문이 없을 경우, this로 바인딩된 새로 생성한 객체가 리턴된다.
      이것은 명시적으로 this를 리턴해도 결과는 같다(주의 - 생성자 함수가 아닌 일반 함수를 호출할 때 리턴값이 명시되어 있지 않으면 undefined가 리턴 된다.)
      하지만 리턴값이 새로 생성한 객체(this)가 아닌 다른 객체를 반환하는 경우는 생성자 함수를 호출했다고 하더라도 this가 아닌 해당 객체가 리턴된다.
*/

// Person이라는 생성자 함수를 정의하고, 이를 통해 foo 객체를 만드는 예제 Person() 함수를 new로 호출하면, Person()은 생성자 함수로 동작한다.
// Person() 생성자 함수
var Person = function (name) {
  // 함수 코드 실행 전
  // 빈 객체 생성 Person() 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 링크로 연결해서 자신의 프로토타입을 설정.
  // 이렇게 생성된 객체는 생성자 함수 코드에서 사용되는 this로 바인딩된다.

  this.name = name; // this가 가리키는 빈 객체에 name이라는 동적 프로퍼티를 생성
  // 함수 리턴 리턴값이 없으므로 this로 바인딩한 객체가 생성자 함수의 리턴값으로 반환돼서, foo 변수에 저장된다.
}

// foo 객체 생성
var foo = new Person('foo');
console.log(foo.name); // foo
