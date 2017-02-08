//배열과 객체
/*
  자바스크립트에서 배열 역시 객체다.
  하지만 일반 객체와는 약간 차이가 잇다.
*/

var colorsArray = ['orange','yellow','green'];
console.log(colorsArray[0]);
console.log(colorsArray[1]);
console.log(colorsArray[2]);

var colorsObj = {
  '0': 'orange',
  '1': 'yellow',
  '2': 'green'
};
console.log(colorsObj[0]);
console.log(colorsObj[1]);
console.log(colorsObj[2]);

console.log(typeof colorsArray);
console.log(typeof colorsObj);

console.log(colorsArray.length);
console.log(colorsObj.length);

colorsArray.push('red');
/*colorsObj.push('red');*/

/*
  배열과 객체 생성
  colorsArray배열의 형태와 유사하게 객체 리터럴 방식으로 colorsObj 객체를 생성했다.
  앞서 객체의 프로퍼티 접근을 설명할 때, 대괄호 안에는 접근하렬는 프로퍼티의 속성을 문자열 형태로 적어야 한다고 했다.
  때문에 colorsObj[0]이 아니라 colorsObj['0']의 형태로 기입하는 것이 맞다.
  자바스크립트 엔진이 [] 연산자 내에 숫자가 사용될 경우, 해당 숫자를 문자열 형태로 바꿔주기 때문이다.

  typeof 연산자비교
  typeof 연산 결과는 배열과 객체 모두 Object이다.
  즉, 자바스크립트도 배열을 객체라고 생각한다.

  length 프로퍼티 존재 여부
  배열 colorsArray와 객체 colorsObj는 근본적인 차이가 있다.
  우선 colorsObj는 객체이며 length 프로퍼티가 존재하지 않는다.
  때문에 배열 colorsArray는 3이라는 결과가 출력되지만 colorsObj.length 결과는 undefined가 나온다.

  배열 표준 메서드 호출 여부
  배열과 객체의 또 하나의 차이점은 colorsObj는 배열이 아니므로 앞서 설명한 push()와 같은 표준 배열 메서드를 사용할 수 없다는 것이다.
  colorsObj.push()메서드를 실행할 경우, 객체는 push() 메서드가 없으므로 에러가 발생한다.
  이것은 배열과 객체가 자신의 부모인 프로토타입 객체가 서로 다르기 때문이다.

  앞서 설명한 것처럼 객체 리터럴 방식으로 생성한 객체의 경우, 객체 표준 메서드를 저장하고 있는 Object.prototype 객체가 프로토타입이다. 반면에 배열의 경우 Array.prototype 객체가 부모 객체인 프로토타입이 된다.
  Array.prototype 객체는 배열에서 사용할 push(),pop() 같은 표준 메서드를 포함하고 있다.
  그리고 Array.prototype 객체의 프로토타입은 Object.prototype 객체가 된다.
  객체는 자신의 프로토타입이 가지는 모든 프로퍼티 및 메서드들을 상속받아 사용할 수 있다고 했으므로, 배열은 Array.prototype에 포함된 배열 표준 메서드와 Object.prototype의 표준 메서드들을 모두 사용할 수 있다.
*/

var emptyArray = [];
var emptyObj = {};

console.dir(emptyArray.__proto__);
console.dir(emptyObj.__proto__);

/*
  emptyArray 배열의 프로토타입을 나타내는 emptyArray.__proto__ 는 Array[0] 객체를 가리키는데, 이것이 바로 Array.prototype 객체를 나타낸다. 자세히 보면 이 객체 내에 push() 메서드를 비롯한 다양한 자바스크립트의 표준 배열 메서드가 있다는것을 확인 할 수 있다. 그리고 Array.prototype 객체 역시 __proto__ 프로퍼티가 있다.
  이 값은 Object.prototype을 가리킨다.
  반면에 emptyObj는 일반 객체이므로, 그것의 프로토타입인 __proto__ 프로퍼티가 Object.prototype을 가리키고 있다는 것을 확인할 수 있다.

  emptyArray 객체에서는 push() 메서드가 정의되어 있다.
*/

//배열의 프로퍼티 동적 생성
/*
  배열도 자바스크립트 객체이므로, 인덱스가 숫자인 배열 원소 이외에도 객체처럼 동적으로 프로퍼티를 추가할 수 있다.
*/

var arr = ['zero','one','two'];
console.log(arr.length);

arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length);

arr[3] = 'red';
console.log(arr.length);

console.dir(arr);

/*
  앞 예제에서는 arr배열에 동적으로 color와 name 프로퍼티를 추가했다.
  배열에 동적 프로퍼티가 추가될 경우에는 배열의 length 값이 3으로 바뀌지 않았다는 것이다.
  그런 다음 다시 arr[3]에 배열 원소를 추가했을 때 length 값이 4로 바꼈음을 확인할 수 있다.
  즉, 배열의 length 프로퍼티는 배열 원소의 가장 큰 인데긋가 변했을 경우만 변경된다.!!

  console.dir(arr);
  arr배열의 모든 프로퍼티를 출력한 결과
  배열도 객체처럼 'key: value' 형태로 배열 원소 및 프로퍼티 등이 있음을 알 수 있다.
*/

//배열의 프로퍼티 열거
/*
  객체는 for in 문으로 프로퍼티를 열거
  배열도 객체이므로 for in 문을 사용해서 배열 내의 모든 프로퍼티를 열거 가능
  하지만 불필요한 프로퍼티가 출력될 수도 있으므로 되도록 for문을 사용하는것이 좋다.
*/

for (var prop in arr) {
  console.log(prop,arr[prop]);
}

for (var i = 0; i < arr.length; i++) {
  console.log(i,arr[i]);
}

//배열 요소 삭제
/*
  배열도 객체이므로, 배열 요소나 프로퍼티를 삭제하는 데 delete 연산자를 사용할 수 있다.
*/

var arr = ['zero','one','two','three'];
delete arr[2];
console.log(arr);
console.log(arr.length);

/*
  delete arr[2]로 배열의 요소를 삭제하면, arr[2]에 undefined가 할당되게 된다.
  그러나 delete 연산자로 배열 요소 삭제 후에도 배열의 length 값은 변하지 않은 것을 확인할 수 있다.
  즉, delete 연산자는 해당 요소의 값을 undefined로 설정할 뿐 원소 자체를 삭제하지는 않는다.

  때문에 보통 배열에서 요소들을 완전히 삭제할 경우 자바스크립트에서 splice() 배열 메서드를 사용한다.
*/

var arr  = ['zero','one','two','three'];
arr.splice(2,1);
console.log(arr);
console.log(arr.length);

//Array() 생성자 함수
/*
  배열은 일반적으로 배열 리터럴로 생성하지만, 배열 리터럴도 결국 자바스크립트 기본 제공 Array() 생성자 함수로 배열을 생성하는 과정을 단순화 시킨것이다.
  일부 자바스크립트 개발자들은 배열 리터럴 대신 Array() 생성자 함수로 배열을 생성하는 코드를 작성하므로 간단히 알아두자.
  생성자 함수로 배열과 같은 객체를 생성할 때에는 반드시 new 연산자를 같이 써야 한다는 것을 기억하자.

  Array() 생성자 함수는 호출할 때 인자 개수에 따라 동작이 다르므로 주의해야 한다.

  - 호출할 때 인자가 1개이고, 숫자일 경우 : 호출된 인자를 length로 갖는 빈 배열 생성
  - 그외의 경우 : 호출된 인자를 요소로 갖는 배열 생성
*/

var foo = new Array(3);
console.log(foo);
console.log(foo.length);

var bar = new Array(1,2,3);
console.log(bar);
console.log(bar.length);

/*
  foo 배열의 경우는 Array() 생성자 함수를 호출할 때 3이라는 숫자 인자 1개만 넘겼으므로, 앞서 설명한 것처럼 3개의 요소가 있는 빈 배열을 생성한다. 반면에 bar 배열의 경우는 Array(1,2,3)와 같이 호출했으므로 1,2,3 세 개의 숫자가 요소인 배열이 생선된 것이다.
*/

//유사 배열 객체
/*
  배열의 length 프로퍼티는 배열의 동작에 있어서 중요한 프로퍼티이다. 그렇다면 만약 일반 객체이 length라는 프로퍼티가 있으면 어떻게 될까? 자바스크립트에서는 이렇게 length 프로퍼티를 가진 객체를 유사 배열 객체라고 부른다. 다음 예제에서 객체 obj는 length프로퍼티가 있으므로 유사 배열 객체다. 이러한 유사 배열 객체의 가장 큰 특징은 객체임에도 불구하고, 자바스크립트 표준 배열 메서드를 사용하는게 가능하다.
*/

var arr = ['bar'];
var obj = {
  name: 'foo',
  length: 1
};

arr.push('baz');
console.log(arr);

/*obj.push('baz');*/

/*
  앞 예제처럼 배열 arr은 push() 표준 배열 메서드를 활용해서 'baz'원소를 추가하는 것이 가능한 반면에, 유사 배열 객체 obj는 당연히 배열이 아니므로 바로 push() 메서드를 호출 할 경우 에러가 발생한다.

  유사 배열 객체의 경우 apply()메서드를 사용하면 객체지만 표준 배열 메서드를 활용하는 것이 가능하다.
  다음 예제를 보자
*/

var arr = ['bar'];
var obj = { name: 'foo', length: 1};

arr.push('baz');
console.log(arr);

Array.prototype.push.apply(obj,['baz']);
console.log(obj);

/*
  자세한 내용은 뒤에서 살펴보자
  arguments객체나 jQuery객체가 바로 유사 배열 객체이다.
*/

//기본 타입과 표준 메서드
/*
  자바스크립트는 숫자, 문자열, 불린값에 대해 각 타입별로 호출 가능한 표준 메서드를 정의하고 있다.
  하지만 기본 타입의 경우는 객체가 아닌데 어떻게 메서드를 호출할까?
  다음 예제와 같이 기본 타입의 값들에 대해서 객체 형태로 메서드를 호출할 경우,
  이들 기본값은 메서드 처리 순간 객체로 변환된 다음 각 타입별 표준 메서드를 호출한다.
  그리고 메서드 호출이 끝나면 다시 기본값으로 복귀하게 된다.
  기본 타입 -> 메서드 실행전에 객체 형태 -> 메서드 실행 - > 메서드 종료 -> 기본 타입 형태
*/

var num = 0.5;
console.log(num.toExponential(1));

console.log("test".charAt(2));

/*
  이렇듯 숫자와 문자열 등은 기본타입지만, 이들을 위해 정의된 표준 메서드들은 객체처럼 호출할 수 있다.
*/

//연산자
/*
  + 연산자는 더하기 연산과 문자열 연결 연산을 수행
  다음 예제에서 확인할 수 있듯이 두 연산자가 모두 숫자일 경우에만 더하기 연산이 수행되고,
  나머지는 문자열 연결 연산이 이뤄진다.
*/

var add1 = 1 + 2;
var add2 = 'my' + 'string';
var add3 = 1 + 'string';
var add4 = 'string' + 2;

console.log(add1);
console.log(add2);
console.log(add3);
console.log(add4);

//typeof 연산자
/*
  typeof 연산자는 피연산자의 타입을 문자열 형태로 리턴한다.
  여기서 null과 배열이 'object'라는 점, 함수는 'function'이라는 점을 유의해야한다.
*/

// == 연산자와 === 연산자
/*
  자바스크립트에서는 두 값이 동일한지를 확인하는 데, 두 연산자를 모두 사용할 수 있다.
  두 연산자의 차이는 == 연산자는 비교하려는 피연산자의 타입이 다를 경우에 타입 변환을 거친 다음 비교
  === 연산자는 피연산자의 타입이 다를 경우에 타입을 변경하지 않고 비교한다.
*/

console.log(1 == '1'); // true
console.log(1 === '1'); // false

/*
  앞 예제의 경우 숫자 1과 문자열'1'을 ==와 ===연산자로 각각 비교했다. == 연산자의 경우는 두 피 연산자가
  타입이 다르므로 같은 타입으로 변환해서(이 경우는 Nubmer) 두값이 같다고 판단

  반면에 === 연산자는 두 연산자의 타입이 다르므로 바로 false가 출력.

  === 연산자 사용 추천!!
*/

//   !! 연산자
/*
  !!의 역할은 피연산자를 불린값으로 변환하는것이다.
*/

console.log(!!0);
console.log(!!1);
console.log(!!'string');
console.log(!!'');
