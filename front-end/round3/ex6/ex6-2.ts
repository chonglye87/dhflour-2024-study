// 1. 널 병합 연산자 (Nullish Coalescing Operator)
// 널 병합 연산자 ??는 좌항의 피연산자가 null 또는 undefined일 경우에만 우항의 피연산자를 반환합니다. 이는 기본적인 OR 연산자 ||와 유사하지만, ||는 좌항이 falsy한 값(예: 0, "", false)일 때 우항을 반환하는 반면, ??는 오직 null이나 undefined일 때만 우항을 반환합니다.
const input:any = undefined;
const defaultValue = "default";
const output = input ?? defaultValue;
console.log(output); // 출력: "default"

const numberInput = 0;
const numberDefault = 5;
const numberOutput = numberInput ?? numberDefault;
console.log(numberOutput); // 출력: 0
