// 3. 인터페이스 상속
// 예제: 인터페이스 상속을 사용하여 기존 인터페이스를 확장하기

interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
console.log(`Square: color ${square.color}, side length ${square.sideLength}`);
