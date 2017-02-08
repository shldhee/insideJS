/*
  자바스크립트 데이터 타입
  기본 타입, 참조 타입
  기본 타입 : 숫자, 문자열, 불린값, undefined, null
  참조 타입 : 객체(배열, 함수, 정교표현식)
  주의해야 할 연산자
*/

  //  문자열
  //  한번 정의된 문자열은 변하지 않는다.
  var str = 'test';
  console.log(str[0],str[1],str[2],str[3]); //test

  str[0] = 'T';
  console.log(str); //test

  /*
      문자열은 문자 배열처럼 인덱스를 이용해서 접근할 수 있다. 하지만 str[0] = 'T' 를 넣어 문자로 변경했다.
      그러나 출력결과가 'Test'아닌 'test'이다.
      즉, 자바스크립트에서는 한 번 생성된 문자열은 읽기만 가능하지 수정은 불가능하다.
  */

  //  null과 undefined
  /*
      이 두 타입은 모두 자바스크립트에서 '값이 비어있음'을 나타낸다.
      자바스크립트 환경 내에서 기본적으로 값이 할당되지 않는 변수는 undefined 타입이며, undefined 타입의 변수는 변수 자체의 값 또한 undefined이다.

      null 타입 변수의 경우는 개발자가 명시적으로 값이 비어있음을 나타내는 데 사용한다.
      typeof null의 값은 null아니라 object이다. 때문에 자바스크립트에서는 null 타입 변수인지를 확인할 때 typeof 연산자를 사용하면 안되,
      일치 연산자(===)를 사용해서 변수의 값을 직접 확인해야 한다.
  */

  var nullVar = null;

  console.log(typeof nullVar === null); //false
  console.log(nullVar === null); //true

  /*
    자바스크립트 참조 타입
    자바스크립트에서 숫자, 문자열, 불린값, null, undefined 같은 기본 타입을 제외한 모든 값은 객체다.
    따라서 배열, 함수, 정규표현식 등도 모두 결국 자바스크립트 객체로 표현된다.

    자바스크립트에서 객체는 단순히 '이름(key): 값(value)' 형태의 프로퍼티들을 저장하는 컨테이너이다.
    기본 카입은 하나의 값만을 가지는 데 비해, 참조 타입인 객체는 여러 개의 프로퍼티들을 포함할 수 있으며,
    이러한 프로퍼티의 성질에 따라 객체의 프로퍼티는 함수로 포함할 수 있으며, 이러한 프로퍼티를 메서드라고 부른다.
  */

  /*
    객체 생성
    1. 기본 제공 Object() 객체 생성자 함수를 이용
    2. 객체 리터럴을 이용하는 방법
    3. 생성자 함수를 이용하는 방법
  */

  // Object() 생성자 함수 이용
  /*
    자바스크립트에서는 객체를 생성할 때, 내장 Object() 생성자 함수를 제공한다.
    Object() 생성자 함수를 이용해서 foo라는 빈 객체를 생성한 후, 몇 가지 프로퍼티(name, age, gender)들를 추가한 것이다.
  */

  var foo = new Object();

  foo.name = "foo";
  foo.age = 30;
  foo.gender = "male";

  console.log(typeof foo); // Object
  console.log(foo);

  // 객체 리터럴을 이용하는 방법
  /*
    객체 리터럴은 중괄호({})을 이용해서 객체를 생성한다. { } 안에 아무것도 적지 않는 경우는 빈 객체가 생성되며,
    중괄호 안에 "프로퍼티 이름" : "프로퍼티 값" 형태로 표기하면, 해당 프로퍼티가 추가된 객체를 생성할 수 있다.
    프로퍼티 이름은 문자열이나 숫자가 올 수 있다.
    프로퍼티 값으로는 자바스크립트의 값을 나타내는 어떤 표현식도 올 수 있으며, 이 값이 함수일 경우 이러한 프로퍼티를 메서드라고 부른다.
  */

  var foo = {
    name : 'foo',
    age : 30,
    gender : 'male'
  };

  console.log(typeof foo); //Object;
  console.log(foo);

  // 생성자 함수를 이용하는 방법
  /*
    자바스크립트의 경우는 함수를 통해서도 객체를 생성할 수 있다. 이렇게 객체를 생성하는 함수를 생성자 함수라고 부른다.
  */

  //객체 프로포터 읽기/쓰기/갱신
  /*
    객체의 프로퍼티에 접근할려면 다음과 같이 두 가지 방법을 사용한다.
    1. 대괄호([]) 표기법
    2. 마침표(.) 표기법
  */

  var foo = {
    name: 'foo',
    major : 'computer science'
  };
  // 객체 프로퍼티 읽기
  console.log(foo.name); //foo
  console.log(foo['name']); //foo
  console.log(foo.nickname); //undefined

  // 객체 프로퍼티 갱신
  foo.major = 'electronics engineering';
  console.log(foo.major); //electronics engineering
  console.log(foo['major']); //electronics engineering

  // 객체 프로퍼티 동적 생성
  foo.age = 30;
  console.log(foo.age); // 30

  /*
    자바스크립트 객체의 프로퍼티에 값을 할당할 때, 프로퍼티가 이미 있을 경우는 해당 프로퍼티의 값이 갱신되지만,
    객체의 해당 프로퍼티가 없을 경우에는 새로운 프로퍼티가 동적으로 생성된 후 값이 할당된다.
  */

  // 대괄호 표기법만을 사용해야 할 경우
  foo['full-name'] = 'foo bar';
  console.log(foo['full-name']); //foo bar
  console.log(foo.full-name); // NaN
  console.log(foo.full); // undefined
  console.log(name); // undefined

  /*
    접근할려는 프로퍼티가 표현식이거나 예약어일 경우, 이떄는 대괄호 표기법만을 이용해서 접근해야 한다.
    'full-name' 프로퍼티의 경우는 '-'연산자가 있는 표현식이다.

    자바스크립트에서 NaN은 수치 연산을 해서 정상적인 값을 얻지 못할 때 출력되는 값이다.
    NaN 출력 결과 나온 이유는
    foo.full - name 으로 취급
    undefined - undefined의 연산결과가 NaN
  */

  //for in 문과 객체 프로퍼티 출력
  /*
    for in 문을 사용하면, 객체에 포함된 모든 프로퍼티에 대해 루프르 수행할 수 있다.
  */

  var foo = {
    name: 'foo',
    age: 30,
    major : 'computer science'
  }

  var prop;
  for (prop in foo) {
    console.log(prop, foo[prop]);
  }

  /*
    위 예제를 보면, for in 문이 수행되면서 prop 변수에 foo 객체의 프로퍼티가 하나씩 할당된다.
    따라서 prop에 할당된 프로퍼티 이름을 이용해서 foo[prop]와 같이 대괄호 표기법을 이용해서 프로퍼티값을 출력한 것이다.
  */

  //객체 프로퍼티 삭제
  /*
    자바스크립트에서는 객체의 프로퍼티를 delete 연산자를 이용해 즉시 삭제 할 수 있다.
    delete는 연산자는 객체의 프로퍼티를 삭제할 뿐, 객체 자체를 삭제하지는 못한다.
  */
  var foo = {
    name: 'foo',
    nickname: 'babo'
  };

  console.log(foo.nickname); //babo
  delete foo.nickname; // delete
  console.log(foo.nickname); // undefined

  delete foo; // delete
  console.log(foo.name); // foo
