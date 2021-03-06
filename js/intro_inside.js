/*
  객체
  자바스크립트의 거의 모든 것은 객체이다.
  기본 데이터 타입 boolean, number, string 그리고 특별한 값인 null, undefined를 제외한 나머지는 객체이다.
  하지만 세 가지 기본 데이터 타입은 모두 객체처럼 다룰 수 있다. 그렇기 때문에 자바스크립트는 null과 undefined를 제외한 모든 것을 객체로 다룰 수 있다.

  함수
  자바스크립트에선 함수도 객체 취급한다. 일반적인 객체보다 조금 더 많은 기능이 있는 객체라고 할 수 있다.
  일급 객체(Frist class object)

  프로토타입
  모든 객체는 숨겨진 링크인 프로토타입을 가진다. 이 링크는 해당 객체를 생성한 생성자의 프로토타입을 가리킨다.
  이 링크를 ECMAScript에서는 [[prototype]] 이라고 표현한다.

  실행 컨텍스트와 클로저
  자바스크립트는 자신만의 독특한 과정으로 실행 컨텍스트를 만들고 그 안에서 실행이 이루어진다.
  이 실행 컨텍스트는 자신만의 유효 범위(scope)를 갖는데, 이 과정에서 클로저를 구현할 수 있다.

  자바스크립트와 객체지향 프로그래밍
  자바스크립트는 클래스를 지원하지 않지만 객체지향 프로그래밍이 가능하다.
  프로토타입 체인과 클로저로 객체지향 프로그래밍에서 제시하는 상속, 캡슐화, 정보 은닉 등의 개념을 소화할 수 있다.

  자바스크립트와 함수형 프로그래밍
  자바스크립트는 함수형 프로그래밍이 가능하다. 함수형 프로그래밍은 높은 수준의 모듈화를 가능케 하는 매우 효율적인 프로그래밍 방법이다.
  주요 특성인 일급 객체로서의 함수특성과 클로즈를 활용하여 이를 가능케 한다.

  자바스크립트의 단점
  굉장히 유연하고 뛰어난 표현력을 가진 언어이다.
  이러한 특성 때문에 종종 디버깅 어려움이 있고 특히, 느스한 타입 체크는 개발자에게 타입 체크에 대한 자유를 주지만, 컴파일 타임에서 잡지 못하는 오류는 고스란히 런타임 오류로 발견된다.
  전역개체!


*/
