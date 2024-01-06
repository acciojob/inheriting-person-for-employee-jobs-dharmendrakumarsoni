// Complete code

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
  // Call the Person constructor to set name and age for Employee
  Person.call(this, name, age);
  
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Set the constructor property back to Employee
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

// Example usage:

const person = new Person("John", 25);
person.greet(); // Output: Hello, my name is John, I am 25 years old.

const employee = new Employee("Alice", 30, "Developer");
employee.greet(); // Output: Hello, my name is Alice, I am 30 years old.
employee.jobGreet(); // Output: Hello, my name is Alice, I am 30 years old, and my job title is Developer.
