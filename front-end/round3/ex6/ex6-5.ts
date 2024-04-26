// Set
// Set<T>은 유일한 값을 저장하는 컬렉션으로, T 타입의 요소를 포함할 수 있습니다. Set은 요소의 중복을 허용하지 않으며, 요소의 순서도 중요하지 않습니다.

let set: Set<number> = new Set();
set.add(1);
set.add(2);
set.add(2); // 중복 요소는 추가되지 않습니다.

set.forEach(value => {
    console.log(value); // 출력: 1, 2
});
