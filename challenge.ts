class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public tellMyName(name){
        return "I am " + this.name;
    }

    public tellMyAge(age) {
        return "I am " + this.age + " years old";
    }
}

let john = new Person("John", 40);
let mary = new Person("Mary", 35);

console.log(john.tellMyName(john.name));
console.log(john.tellMyAge(john.age));
console.log(mary.tellMyName(mary.name));
console.log(mary.tellMyAge(mary.age));
