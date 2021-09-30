// The pattern organizes object construction into a set of steps.

/*You can call only those steps 
that are necessary for producing a particular
configuration of an object.*/

/*Some of the construction steps might require different imple-
mentation when you need to build various representations of
the product. For example, walls of a cabin may be built of
wood, but the castle walls must be built with stone.*/

class Car {
  model: string;
  tyres?: number;
  music?: string;
  constructor(model: string) {
    this.model = model;
  }
}

class CarBuilder {
  car: Car;
  constructor(model: string) {
    this.car = new Car(model);
  }

  setTyres(tyresNumber: number) {
    this.car.tyres = tyresNumber;
    // chain
    return this;
  }

  addMusic(player: string) {
    this.car.music = 'radio';
    return this;
  }
}

const toyota = new CarBuilder('toyota');
toyota.addMusic('radio').setTyres(4);
console.log(toyota);

const bmw = new CarBuilder('BMW');
bmw.addMusic('CD');
console.log(bmw);
