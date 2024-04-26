// 3. 제네릭 클래스
// 예제: 제네릭을 사용하여 다양한 타입을 처리할 수 있는 간단한 큐(queue) 클래스 만들기
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
let queue = new Queue();
queue.push(1);
queue.push(2);
console.log(queue.pop()); // 출력: 1
console.log(queue.pop()); // 출력: 2
//# sourceMappingURL=ex4-3.js.map