"use strict";
// 4. 다형성
// 예제: 다형성을 이용하여 다양한 타입의 객체를 동일한 인터페이스로 처리하기
Object.defineProperty(exports, "__esModule", { value: true });
const Vehicle_1 = require("./model/Vehicle");
function testDrive(v) {
    v.drive();
}
testDrive(new Vehicle_1.Truck()); // 출력: Driving a truck!
testDrive(new Vehicle_1.Bus()); // 출력: Driving a bus!
//# sourceMappingURL=ex3-4.js.map