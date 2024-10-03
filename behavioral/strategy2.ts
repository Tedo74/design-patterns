interface Payment {
    pay(amount: number): void;
}

class PayPal implements Payment {
    pay(amount: number): void {
        console.log(`Pay ${amount} using PayPal`);
    }
}

class creditCard implements Payment {
    pay(amount: number): void {
        console.log(`Pay ${amount} using credit card`);
    }
}

class ShoppingCart {
    private amount = 0;

    constructor(private payStrategy: Payment) {}

    public setPaymentStrategy(strategy: Payment): void {
        this.payStrategy = strategy;
    }
    
    public addToCart(value: number): void {
        this.amount = value;
    }

    public checkOut(): void {
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