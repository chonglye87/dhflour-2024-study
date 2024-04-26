// 3. 화살표 함수 (Arrow Function)
// 화살표 함수는 ES6에서 도입된 새로운 함수 정의 방식으로, 더 간결한 문법을 제공합니다. function 키워드 없이 함수를 정의할 수 있으며, this가 함수 자신이 아닌 상위 스코프의 this를 바인딩합니다.

const multiply = (x: number, y: number): number => {
    return x * y;
};
console.log(multiply(5, 3)); // 출력: 15

// 또는 더 간결한 형태로
const multiplySimple = (x: number, y: number): number => x * y;
console.log(multiplySimple(5, 3)); // 출력: 15
