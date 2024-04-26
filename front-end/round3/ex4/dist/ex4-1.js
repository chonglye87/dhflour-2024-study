// 1. 제네릭 함수
// 예제: 제네릭을 사용하여 다양한 타입의 배열을 합치는 함수 만들기
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
let numberArray = mergeArrays([1, 2, 3], [4, 5, 6]);
let stringArray = mergeArrays(["first", "second"], ["third"]);
console.log(numberArray); // 출력: [1, 2, 3, 4, 5, 6]
console.log(stringArray); // 출력: ["first", "second", "third"]
//# sourceMappingURL=ex4-1.js.map