// 5. 제네릭과 다른 제네릭 타입 사용
// 예제: 제네릭을 사용하여 맵 함수 만들기
function mapArray(array, transform) {
    return array.map(transform);
}
let numbers = [1, 2, 3, 4];
let squareNumbers = mapArray(numbers, x => x * x);
console.log(squareNumbers); // 출력: [1, 4, 9, 16]
//# sourceMappingURL=ex4-5.js.map