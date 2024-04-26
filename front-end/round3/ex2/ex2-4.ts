// 4. 하이브리드 타입
// 예제: 함수와 객체 역할을 모두 하는 인터페이스 정의하기
interface Counter {
    (start: number): string; // 함수 시그니처
    interval: number;

    reset(): void; // reset 메서드를 통해 내부 상태를 초기화할 수 있음
    started: boolean; // 시작 상태를 추적
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) {
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
