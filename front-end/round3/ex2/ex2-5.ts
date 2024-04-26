// 5. 인터페이스를 이용한 클래스 구현
// 예제: 인터페이스를 구현하는 클래스 만들기

interface ClockInterface {
    currentTime: Date;
    className: string;

    setTime(d: Date): void;
}

class DigitalClock implements ClockInterface {
    currentTime: Date = new Date();
    className: string = '';

    setTime(d: Date) {
        this.currentTime = d;
    }

    constructor(cm: string) {
        this.className = cm;
    }
}

let clock = new DigitalClock('DigitalClock');
console.log(clock.currentTime); // 현재 시간을 출력

// 1초(1000밀리초) 후에 setTime 메서드를 호출
setTimeout(() => {
    clock.setTime(new Date()); // 새로운 시간으로 설정
    console.log(clock.currentTime, 'Date setTime 이후'); // 새로운 시간을 출력

    // className 속성이 있다면 출력, 없다면 'className not defined' 출력
    console.log('className: ', clock.className || 'className not defined');
}, 1000);

