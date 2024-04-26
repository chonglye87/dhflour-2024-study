// 2. 함수 표현식 (Function Expression)
// 함수 표현식은 함수를 변수에 할당하는 방식으로 정의합니다. 이 방식은 함수를 값처럼 취급하여, 다른 변수에 할당하거나 다른 함수에 매개변수로 전달할 수 있습니다. 함수 표현식은 호이스팅의 대상이 아니므로, 선언 전에는 사용할 수 없습니다.

const subtract = function(x: number, y: number): number {
    return x - y;
};
console.log(subtract(5, 3)); // 출력: 2
