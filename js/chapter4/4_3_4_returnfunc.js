//함수를 리턴하는 함수
/*
    자바스크립트 함수는 일급 객체이므로 일반 값처럼 함수 자체를 리턴할 수도 있다.
    이러한 특징은 다양하게 할용이 가능하다.
    함수를 호출함과 동시에 다른 함수로 바꾸거나, 자기 자신을 재 정의하는 함수를 구현할 수 있다.
*/

var self = function () {
    console.log("a");
    return function() {
        console.log("b");
    }
}

self = self();  //a
self();         //b

/*
    1. 처음 self() 함수가 호출됐을 때는 'a'가 출력된다. 그리고 다시 self 함수 변수에 self() 함수 호출 리턴값으로 내보낸 함수가 저장된다.   ()이면 앞 실행
    2. 두 번째로 self()함수가 실행됐을 때는 'b'가 출력된다. 즉, 1에서 self()함수 호출 후에, self 함수 변수가 가리키는 함수가
        원래 함수에서 리턴 받은 새로운 함수로 변경됐기 때문이다.
*/
