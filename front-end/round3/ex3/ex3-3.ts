// 3. 메서드 오버라이딩
// 예제: 상속받은 메서드를 오버라이드하여 기능 확장하기

import Car from "./model/Car";

class SportsCar extends Car {
    maxSpeed: number;

    constructor(brand: string, model: string, year: number, maxSpeed: number) {
        super(brand, model, year);
        this.maxSpeed = maxSpeed;
    }

    displayDetails(): void {
        super.displayDetails();
        console.log(`Max Speed: ${this.maxSpeed} km/h`);
    }
}

let mySportsCar = new SportsCar("Ferrari", "488 Spider", 2020, 330);
mySportsCar.displayDetails();
