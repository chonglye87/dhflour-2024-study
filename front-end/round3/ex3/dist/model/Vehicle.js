"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bus = exports.Truck = exports.Vehicle = void 0;
class Vehicle {
    drive() {
        console.log("Driving a vehicle!");
    }
}
exports.Vehicle = Vehicle;
class Truck extends Vehicle {
    drive() {
        console.log("Driving a truck!");
    }
}
exports.Truck = Truck;
class Bus extends Vehicle {
    drive() {
        console.log("Driving a bus!");
    }
}
exports.Bus = Bus;
//# sourceMappingURL=Vehicle.js.map