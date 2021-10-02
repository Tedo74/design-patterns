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
        this.decoratedCar.hp = this.tuning(120);
    }
    tuning(hp) {
        return hp;
    }
    getHP() {
        console.log('power: ' + this.decoratedCar.hp + ' hp.');
    }
    getDescription() {
        console.log('description: ' + this.decoratedCar.description);
    }
}
const car = new BaseCar('Ford');
console.log(car);
// add features
const advCar = new AdvancedCar(car);
console.log(advCar);
advCar.getHP();
advCar.getDescription();
