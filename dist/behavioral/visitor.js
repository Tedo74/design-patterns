"use strict";
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    setSalary(newSalary) {
        this.salary = newSalary;
    }
    accept(visitorFunction) {
        visitorFunction(this);
    }
}
const teddy = new Employee('Teddy', 12000);
console.log(teddy.getSalary());
function extra(employee) {
    employee.setSalary(employee.getSalary() * 2);
}
teddy.accept(extra);
console.log(teddy.getSalary());
//# sourceMappingURL=visitor.js.map