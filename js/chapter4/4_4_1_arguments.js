function func(arg1, arg2) {
    console.log(arg1, arg2);
}

func();
func(1);
func(1,2);
func(1,2,3);

/*
    자바스크립트는 인자를 어떻게 넘기더라도 함수를 호출할 때 에러가 발생하지 않는다.

    앞 예제에서 func(), func(1) 호출처럼 정의된 함수의 인자보다 적게 함수를 호출했을 경우, 넘겨지지 않은 인자에는 undefined 값이 할당된다.
    이와 반대로 정의된 함수의 인자보다 많게 함수를 호출했을 경우 에러가 발생하지 않고, 초과된 인수는 무시된다.

    자바스크립트 이러한 특성 때문에 함수 코드를 작성할 때, 런타임 시에 호출된 인자의 개수를 확인하고 이에 따라 동작을 다르게 해줘야 할 경우가 있다.
    이를 가능케 하는 바로 arguments 객체다.

    함수를 호출 할때 인수드로가 함께 암묵적으로 arguments 객체가 함수 내부로 전달되기 때문이다.
    arguments 객체는 함수를 호출할 때 넘긴 인자들이 배열 형태로 저장된 객체를 의미한다.
    실제 배열이 아닌 유사 배열 객체다.
*/

function add(a, b) {
    console.dir(arguments);
    return a+b;
}

console.log(add(1));
console.log(add(1,2));
console.log(add(1,2,3));

/*
    arguments 객체는 다음과 같이 세 부분으로 구성되어 있다.
    1. 함수를 호출할 때 넘겨진 인자(배열 형태)
    2. length 프로퍼티 : 호출할 때 넘겨진 인자의 개수를 의미
    3. callee 프로퍼티 : 현재 실행 중인 함수의 참조값 (예제는 add() 함수)

    arguments 객체!! 배열이 아니다!!
    length 프로퍼티가 있어 배열과 유사하게 동작하지만, 배열이 아니므로 배열 메서드 사용지 에러 발생
    배열 메서드를 사용하는 방법은 4.4.2.4 call, apply 메서드 이요한 this 바인딩 참조
*/

function sum() {
    var result = 0;

    for(var i = 0; i < arguments.length; i++) {
        result += arguemnts[i];
    }

    return result;
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4,56,6,7,));

/*
    sum() 함수는 호출된 인자 개수에 상관없이 이들 각각의 값을 모두 더해 리턴하는 함수다.
    arguments 객체를 사용할 경우 함수가 호출될 당시의 인자들에 배열 형태로 접근할 수 있으므로 이러한 구현이 가능하다.
*/
