class Employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getSalary(): number {
    return this.salary;
  }

  setSalary(newSalary: number): void {
    this.salary = newSalary;
  }

  accept(visitorFunction: Function): void {
    visitorFunction(this);
  }
}

const teddy = new Employee('Teddy', 12000);
console.log(teddy.getSalary());

function extra(employee: Employee) {
  employee.setSalary(employee.getSalary() * 2);
}

teddy.accept(extra);

console.log(teddy.getSalary());
