"use strict";
/*
Attach new behaviors to objects by placing these objects inside
special wrapper objects that contain the behaviors.
*/
// Ads extensibility without modifying original object.
class Beverage {
    constructor() {
        this.description = 'some';
    }
    getDescription() {
        return this.description;
    }
}
class Espresso extends Beverage {
    constructor(description) {
        super();
        this.description = description;
    }
    coast() {
        return 2;
    }
}
// decorator
class CondimentDecorator extends Beverage {
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }
}
class Milk extends CondimentDecorator {
    constructor(beverage) {
        super(beverage);
    }
    getDescription() {
        return this.beverage.getDescription() + ' with milk';
    }
    coast() {
        return this.beverage.coast() + 0.3;
    }
}
class Affogato extends CondimentDecorator {
    constructor(beverage) {
        super(beverage);
    }
    getDescription() {
        return this.beverage.getDescription() + ' with ice cream';
    }
    coast() {
        return this.beverage.coast() + 1.5;
    }
}
const espresso = new Espresso('italian espresso');
console.log('order: ' + espresso.getDescription());
console.log('price ' + espresso.coast());
const milkEspresso = new Milk(espresso);
console.log('order: ' + milkEspresso.getDescription());
console.log('price ' + milkEspresso.coast());
const milkEspressoWithIceCream = new Affogato(milkEspresso);
console.log('order: ' + milkEspressoWithIceCream.getDescription());
console.log('price ' + milkEspressoWithIceCream.coast());
//# sourceMappingURL=decorator.js.map