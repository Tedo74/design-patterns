/*
Lets you attach
new behaviors to objects by placing these objects inside
special wrapper objects that contain the behaviors.
*/

// Ads extensibility without modifying original object.

interface IAdvancedCar {
  description: string;
  hp?: number;
}

class BaseCar {
  description: string;
  constructor(description: string) {
    this.description = description;
  }
  public getDescription() {
    return this.description;
  }
}

class AdvancedCar {
  decoratedCar: IAdvancedCar;
  constructor(car: BaseCar) {
    this.decoratedCar = car;
    this.decoratedCar.hp = this.tuning(120);
  }

  tuning(hp: number): number {
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
