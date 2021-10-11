"use strict";
/*
Lets you attach
new behaviors to objects by placing these objects inside
special wrapper objects that contain the behaviors.
*/
class BaseCar {
    constructor(description) {
        this.description = description;
    }
    getDescription() {
        return this.description;
    }
}
class AdvancedCar {
    constructor(car) {
        this.decoratedCar = car;
    }
    getDescription() {
        let description = '==============decoration=========================' + '\n';
        description += this.decoratedCar.getDescription() + ' decorated' + '\n';
        description += '==============decoration=========================' + '\n';
        return description;
    }
}
const car = new BaseCar('Ford');
console.log(car.getDescription());
const advCar = new AdvancedCar(car);
console.log(advCar.getDescription());
