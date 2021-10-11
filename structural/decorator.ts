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
  description = 'Espresso';
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
  description: string;
  beverage: Beverage;
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
    this.description = beverage.description;
  }
  abstract getDescription(): string;
}

class Milk extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
    this.description += ' with milk';
    this.beverage.description = this.description;
  }
  getDescription(): string {
    return this.beverage.description;
  }
  coast(): number {
    return this.beverage.coast() + 0.3;
  }
}

class Affogato extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
    this.description += ' with ice cream';
    this.beverage.description = this.description;
  }
  getDescription(): string {
    return this.beverage.description;
  }
  coast(): number {
    return this.beverage.coast() + 1.5;
  }
}
const expresso = new Espresso('italian espresso');
console.log('order: ' + expresso.getDescription());
console.log('price ' + expresso.coast());

const milkEspresso = new Milk(expresso);
console.log('order: ' + milkEspresso.getDescription());
console.log('price ' + milkEspresso.coast());

const milkEspressoWithIceCream = new Affogato(milkEspresso);
console.log('order: ' + milkEspressoWithIceCream.getDescription());
console.log('price ' + milkEspressoWithIceCream.coast());
