"use strict";
class Food {
    constructor() {
        this.product = 'Chocolate';
        this.price = 2;
    }
}
class Bike {
    constructor() {
        this.product = 'BMX';
        this.price = 1000;
    }
}
class Book {
    constructor() {
        this.product = 'Best book';
        this.price = 5;
    }
}
class Factory {
    static returnProduct(price) {
        if (price < 5) {
            return new Food();
        }
        else if (price < 1000) {
            return new Book();
        }
        else {
            return new Bike();
        }
    }
}
console.log(Factory.returnProduct(2));
console.log(Factory.returnProduct(22000));
console.log(Factory.returnProduct(101));
//# sourceMappingURL=factory.js.map