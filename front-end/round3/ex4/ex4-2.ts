// 2. 제네릭 인터페이스
// 예제: 제네릭을 사용하여 키와 값을 저장하는 인터페이스 정의하기

interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

let pair1: KeyValuePair<number, string> = { key: 1, value: "Apple" };
let pair2: KeyValuePair<string, boolean> = { key: "test", value: true };
console.log(pair1); // 출력: { key: 1, value: 'Apple' }
console.log(pair2); // 출력: { key: 'test', value: true }
