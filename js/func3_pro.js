//length 프로퍼티

/*
        ECMAScript 에서 정한 모든 함수가 가져야 하는 표준 프로퍼티로서, 함수가 정상적으로 실행될 때 기대되는 인자의 개수를 나타낸다.
*/

function func0 () {

}

function func1 (x) {
    return x;
}

function func2 (x, y) {
    return x + y;
}

function func3 (x, y, z) {
    return x + y + z;
}

console.log('func0.length ' + func0.length);
console.log('func1.length ' + func1.length);
console.log('func2.length ' + func2.length);
console.log('func3.length ' + func3.length);

/*
    앞 예제 코드는 인자 개수가 서로 다른 함수들로 구성되어 있다. 출력값을 살펴보면 함수 객체의 length 프로퍼티는 함수를 작성할 때 정의한 인자 개수를 나타내고 있음을 확인 할 수 있다.
*/

//prototype 프로퍼티 !!헷갈림 , 어려움
/*
    모든 함수는 prototype 프로퍼티를 가지고 있다.
    주의할 점은 함수 객체의 prototype 프로퍼티는 앞서 설명한 모든 객체의 부모를 나타내는 내부 프로퍼티인 [[Prototype]]과 혼동하지 말아야 한다.
*/

function myFunction() {
    return true;
}

console.dir(myFunction.prototype);
console.dir(myFunction.prototype.constructor);
