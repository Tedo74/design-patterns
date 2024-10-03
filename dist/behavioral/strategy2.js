"use strict";
class PayPal {
    pay(amount) {
        console.log(`Pay ${amount} using PayPal`);
    }
}
class creditCard {
    pay(amount) {
        console.log(`Pay ${amount} using credit card`);
    }
}
class ShoppingCart {
    constructor(payStrategy) {
        this.payStrategy = payStrategy;
        this.amount = 0;
    }
    setPaymentStrategy(strategy) {
        this.payStrategy = strategy;
    }
    addToCart(value) {
        this.amount = value;
    }
    checkOut() {
        this.payStrategy.pay(this.amount);
        this.amount = 0;
    }
}


const cart = new ShoppingCart(new PayPal());
cart.addToCart(150);
cart.checkOut();
cart.setPaymentStrategy(new creditCard);
cart.addToCart(350);
cart.checkOut();
//# sourceMappingURL=strategy2.js.map