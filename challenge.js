var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function (name) {
        return "I am " + this.name;
    };
    Person.prototype.tellMyAge = function (age) {
        return "I am " + this.age + " years old";
    };
    return Person;
}());
var john = new Person("John", 40);
var mary = new Person("Mary", 35);
console.log(john.tellMyName(john.name));
console.log(john.tellMyAge(john.age));
console.log(mary.tellMyName(mary.name));
console.log(mary.tellMyAge(mary.age));
