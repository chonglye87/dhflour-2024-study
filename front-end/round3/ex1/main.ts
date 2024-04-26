
console.log('----');
console.log('1. Boolean: 참(true) 또는 거짓(false) 값을 가집니다.');
let isDone: boolean = false;
console.log('isDone: ', isDone);


console.log('----');
console.log('2. Number: 모든 숫자는 부동 소수점 값입니다.');
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log('decimal: ', decimal);
console.log('hex: ', hex);
console.log('binary: ', binary);
console.log('octal: ', octal);


console.log('----');
console.log('3. String: 텍스트 데이터 형식을 나타내며, 큰따옴표(" ")나 작은따옴표(\' \')로 텍스트를 감쌉니다.');
let color: string = "blue";
console.log('color: ', color);


console.log('----');
console.log('4. Array: 같은 유형의 변수를 나열할 수 있습니다. 두 가지 방식으로 배열 타입을 선언할 수 있습니다.');
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
console.log('list1: ', list1);
console.log('list2: ', list2);


console.log('----');
console.log('5. Tuple: 요소의 타입과 수가 고정된 배열을 표현합니다. 각 인덱스의 타입이 지정되어 있습니다.');
let x: [string, number];
x = ["hello", 10]; // 정확한 순서와 타입이 필요
console.log('x: ', x);


console.log('----');
console.log('6. Enum: 열거형은 숫자 값 집합에 더 친숙한 이름을 부여할 수 있게 해줍니다.');
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log('c: ', c);


console.log('----');
console.log('7. Any: 어떤 타입의 변수도 될 수 있는 타입으로, 컴파일 타임 타입 검사를 회피할 수 있습니다.');
let notSure: any = 4;
notSure = "maybe a string instead";
console.log('notSure1: ', notSure);
notSure = false; // okay, definitely a boolean
console.log('notSure2: ', notSure);

console.log('----');
console.log('8. Null and Undefined: TypeScript에서 null과 undefined는 실제로 각각 null과 undefined만을 값으로 가지는 타입입니다.');
let u: undefined = undefined;
console.log('u: ', u);
let n: null = null;
console.log('n: ', n);


console.log('----');
console.log('9. Void: 일반적으로 함수에서 반환 값이 없을 때 사용됩니다.');
function warnUser(): void {
    console.log("This is my warning message");
}
warnUser();


console.log('----');
console.log('10. Never: 절대 발생할 수 없는 타입을 나타냅니다. 예를 들어, 항상 예외를 발생시키거나 절대 반환하지 않는 함수의 반환 타입으로 사용됩니다.');
function error(message: string): never {
    throw new Error(message);
}



