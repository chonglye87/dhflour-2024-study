"use strict";
// 2. 상속
// 예제: Car 클래스를 상속받는 ElectricCar 클래스 생성하기
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = require("./model/Car");
class ElectricCar extends Car_1.default {
    constructor(brand, model, year, batteryLife) {
        super(brand, model, year); // 부모 클래스의 생성자 호출
        this.batteryLife = batteryLife;
    }
    displayDetails() {
        super.displayDetails(); // 부모 클래스의 메서드 호출
        console.log(`Battery Life: ${this.batteryLife}`);
    }
}
let myElectricCar = new ElectricCar("Tesla", "Model S", 2019, "85 kWh");
myElectricCar.displayDetails(); // 출력: Brand: Tesla, Model: Model S, Year: 2019, Battery Life: 85 kWh
//# sourceMappingURL=ex3-2.js.map