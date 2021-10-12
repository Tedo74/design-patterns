/*
Attach new behaviors to objects by placing these objects inside
special wrapper objects that contain the behaviors.
*/

// Ads extensibility without modifying original object.

abstract class Beverage {
  description = 'some';
  getDescription(): string {
    return this.description;
  }
  abstract coast(): number;
}

class Espresso extends Beverage {
  constructor(description: string) {
    super();
    this.description = description;
  }

  coast(): number {
    return 2;
  }
}

// decorator
abstract class CondimentDecorator extends Beverage {
  beverage: Beverage;
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
  abstract getDescription(): string;
}

class Milk extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }
  getDescription(): string {
    return this.beverage.getDescription() + ' with milk';
  }
  coast(): number {
    return this.beverage.coast() + 0.3;
  }
}

class Affogato extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }
  getDescription(): string {
    return this.beverage.getDescription() + ' with ice cream';
  }
  coast(): number {
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
