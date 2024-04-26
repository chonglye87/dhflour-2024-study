// 5. 모듈화
// 예제: 다수의 파일로 코드를 분할하고, 모듈을 활용하여 각 파일에서 필요한 함수나 객체를 임포트하기

import { add } from "./modules/modules1";
import minus from "./modules/modules2";

console.log(add(1, 2));
console.log(minus(2, 1));
