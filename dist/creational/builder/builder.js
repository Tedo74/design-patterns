"use strict";
// The pattern organizes object construction into a set of steps.
/*You can call only those steps
that are necessary for producing a particular
configuration of an object.*/
class Pizza {
    constructor(type) {
        this.type = type;
    }
}
class PizzaBuilder {
    constructor(type) {
        this.pizza = new Pizza(type);
    }
    addCheese(cheese) {
        this.pizza.cheese = cheese;
        // chain
        return this;
    }
    addHam(ham) {
        this.pizza.ham = ham;
        return this;
    }
    addMushrooms(haveMushrooms) {
        this.pizza.mushrooms = haveMushrooms;
        return this;
    }
    build() {
        return this.pizza;
    }
}
const pepperoni = new PizzaBuilder('Pepperoni').addCheese('mozzarella').build();
const margherita = new PizzaBuilder('Margherita')
    .addHam('bacon')
    .addMushrooms(true)
    .build();
console.log(margherita);
console.log(pepperoni);
//# sourceMappingURL=builder.js.map