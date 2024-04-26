// 4. 제네릭을 사용한 제약 조건
// 예제: 특정 프로퍼티를 가진 객체만 처리하는 제네릭 함수 만들기
function loggingIdentity(arg) {
    console.log(arg.length); // 이제 .length 프로퍼티가 있음을 확신할 수 있음
    // console.log(arg.value); error
    return arg;
}
loggingIdentity({ length: 10, value: 3 });
//# sourceMappingURL=ex4-4.js.map