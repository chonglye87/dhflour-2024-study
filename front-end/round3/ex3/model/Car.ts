export default class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayDetails(): void {
        console.log(`브랜드명: ${this.brand}, 모델명: ${this.model}, 연식: ${this.year}`);
    }
}
