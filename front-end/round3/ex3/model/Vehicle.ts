export class Vehicle {
    drive(): void {
        console.log("Driving a vehicle!");
    }
}

export class Truck extends Vehicle {
    drive(): void {
        console.log("Driving a truck!");
    }
}

export class Bus extends Vehicle {
    drive(): void {
        console.log("Driving a bus!");
    }
}
