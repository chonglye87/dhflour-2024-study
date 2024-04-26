"use strict";
// 5. 모듈화
// 예제: 다수의 파일로 코드를 분할하고, 모듈을 활용하여 각 파일에서 필요한 함수나 객체를 임포트하기
Object.defineProperty(exports, "__esModule", { value: true });
const modules1_1 = require("./modules/modules1");
const modules2_1 = require("./modules/modules2");
console.log((0, modules1_1.add)(1, 2));
console.log((0, modules2_1.default)(2, 1));
//# sourceMappingURL=ex6-1.js.map