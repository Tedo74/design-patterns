/**
 * The Facade pattern is a structural design pattern
 * that provides a simplified interface to a complex system of classes, interfaces, or subsystems.
 * It encapsulates the complexity of the system behind a unified interface,
 * making it easier for clients to interact with the system without needing to understand its internal workings.
 * The Facade pattern promotes loose coupling between clients and the subsystems by providing a single entry point for client requests.
 * It enhances readability, maintainability, and usability of the codebase by hiding the intricate details
 * of the subsystems and presenting a high-level interface.
 */

// Subsystem 1: Bean Grinder
class BeanGrinder {
    grindBeans(): void {
        console.log("Beans are being ground");
    }
}

// Subsystem 2: Coffee Maker
class CoffeeMaker {
    brewCoffee(): void {
        console.log("Coffee is being brewed");
    }
}

// Facade: CoffeeMakerFacade
class CoffeeMakerFacade {
    private beanGrinder: BeanGrinder;
    private coffeeMaker: CoffeeMaker;
    constructor(beanGrinder: BeanGrinder, coffeeMaker: CoffeeMaker) {
        this.beanGrinder = beanGrinder;
        this.coffeeMaker = coffeeMaker;
    }
    makeCoffee(): void {
        this.beanGrinder.grindBeans();
        this.coffeeMaker.brewCoffee();
        console.log("Enjoy your coffee!");
    }
}

// Client code
const coffeeMachine = new CoffeeMakerFacade(new BeanGrinder(), new CoffeeMaker());
coffeeMachine.makeCoffee();
