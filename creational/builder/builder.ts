// The pattern organizes object construction into a set of steps.

/*You can call only those steps 
that are necessary for producing a particular
configuration of an object.*/

class Pizza {
  type: string;
  cheese?: string;
  ham?: string;
  mushrooms?: boolean;
  constructor(type: string) {
    this.type = type;
  }
}

class PizzaBuilder {
  pizza: Pizza;
  constructor(type: string) {
    this.pizza = new Pizza(type);
  }

  addCheese(cheese: string) {
    this.pizza.cheese = cheese;
    // chain
    return this;
  }

  addHam(ham: string) {
    this.pizza.ham = ham;
    return this;
  }

  addMushrooms(haveMushrooms: boolean) {
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
