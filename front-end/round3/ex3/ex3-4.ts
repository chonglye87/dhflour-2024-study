// 4. 다형성
// 예제: 다형성을 이용하여 다양한 타입의 객체를 동일한 인터페이스로 처리하기

import {Bus, Truck, Vehicle} from "./model/Vehicle";

function testDrive(v: Vehicle) {
    v.drive();
}
testDrive(new Truck()); // 출력: Driving a truck!
testDrive(new Bus()); // 출력: Driving a bus!
