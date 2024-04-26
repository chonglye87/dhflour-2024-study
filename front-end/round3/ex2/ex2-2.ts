// 2. 함수 타입을 포함하는 인터페이스
// 예제: 인터페이스를 사용하여 함수의 타입을 정의하기
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    return source.search(subString) > -1;
}

console.log('==== 결과 ====');
console.log(mySearch("Hello, world", "world")); // 출력: true

