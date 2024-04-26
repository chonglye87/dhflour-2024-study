// Map
// TypeScript에서 Map<K, V>은 키 K와 값 V의 타입을 명시할 수 있는 제네릭 구조입니다. 이를 사용함으로써 키와 값에 대한 타입 안정성을 보장할 수 있습니다.
let map = new Map();
map.set("first", 1);
map.set("second", 2);
map.forEach((value, key) => {
    console.log(`${key}: ${value}`); // 출력: first: 1, second: 2
});
// 키에 대해 안전하게 접근할 수 있습니다.
console.log(map.get("first")); // 출력: 1
//# sourceMappingURL=ex6-4.js.map