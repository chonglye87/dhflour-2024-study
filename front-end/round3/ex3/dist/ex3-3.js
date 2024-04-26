"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = require("./model/Car");
class SportsCar extends Car_1.default {
    constructor(brand, model, year, maxSpeed) {
        super(brand, model, year);
        this.maxSpeed = maxSpeed;
    }
    displayDetails() {
        super.displayDetails();
        console.log(`Max Speed: ${this.maxSpeed} km/h`);
    }
}
let mySportsCar = new SportsCar("Ferrari", "488 Spider", 2020, 330);
mySportsCar.displayDetails(); // 출력: Brand: Ferrari, Model: 488 Spider, Year: 2020, Max Speed: 330 km/h
//# sourceMappingURL=ex3-3.js.map