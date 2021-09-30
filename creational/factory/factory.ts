interface IProduct {
  product: string;
  price: number;
}

class Food implements IProduct {
  //   product: string;
  //   price: number;
  //   constructor() {
  //     this.product = 'Chocolate';
  //     this.price = 2;
  //   }
  product = 'Chocolate';
  price = 2;
}

class Bike implements IProduct {
  //   product: string;
  //   price: number;
  //   constructor() {
  //     this.product = 'Toyota';
  //     this.price = 20000;
  //   }
  product = 'BMX';
  price = 1000;
}

class Book implements IProduct {
  public product: string;
  public price: number;
  constructor() {
    this.product = 'BestBook';
    this.price = 5;
  }
}

class Factory {
  static returnProduct(price: number): IProduct {
    if (price < 5) {
      return new Food();
    } else if (price < 1000) {
      return new Book();
    } else {
      return new Bike();
    }
  }
}

console.log(Factory.returnProduct(2));
console.log(Factory.returnProduct(22000));
console.log(Factory.returnProduct(101));
