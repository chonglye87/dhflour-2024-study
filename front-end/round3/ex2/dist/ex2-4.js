function getCounter() {
    let counter = function (start) {
        counter.started = true;
        return `start: ${start}`;
    };
    counter.interval = 123;
    counter.started = false; // 초기 시작 상태는 false
    counter.reset = function () {
        counter.started = false; // reset 호출 시 시작 상태를 false로 재설정
        counter.interval = 0;
    };
    return counter;
}
let c = getCounter();
console.log(c(10)); // "started" 출력 및 started 상태를 true로 변경
console.log(c.started, 'reset 전 started'); // true 출력
console.log(c.interval, 'reset 전 interval');
c.reset();
console.log(c.started, 'reset 후 started'); // reset 후 false 출력
console.log(c.interval, 'reset 후 interval');
//# sourceMappingURL=ex2-4.js.map