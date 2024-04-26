"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayDetails() {
        console.log(`브랜드명: ${this.brand}, 모델명: ${this.model}, 연식: ${this.year}`);
    }
}
exports.default = Car;
//# sourceMappingURL=Car.js.map