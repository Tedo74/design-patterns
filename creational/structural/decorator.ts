/*
Lets you attach
new behaviors to objects by placing these objects inside
special wrapper objects that contain the behaviors.
*/

// Ads extensibility without modifying original object.

interface ICar {
  getDescription(): string;
}

class BaseCar implements ICar {
  description: string;
  constructor(description: string) {
    this.description = description;
  }
  public getDescription() {
    return this.description;
  }
}

class AdvancedCar implements ICar {
  decoratedCar: ICar;
  constructor(car: BaseCar) {
    this.decoratedCar = car;
  }
  getDescription(): string {
    let description =
      '==============decoration=========================' + '\n';
    description += this.decoratedCar.getDescription() + ' decorated' + '\n';
    description += '==============decoration=========================' + '\n';
    return description;
  }
}

const car = new BaseCar('Ford');
console.log(car.getDescription());
const advCar = new AdvancedCar(car);
console.log(advCar.getDescription());
