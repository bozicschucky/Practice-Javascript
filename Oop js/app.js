// Object literal
// const chucky = {
//     name:'chucky',
//     age:26
// }

// console.log(chucky)


//Person constructor 

// function Person(name,dob) {
//     this.name = name;
//     this.birthday = new Date(dob);
//     this.calculateAge = function () {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }

// }

// const chucky = new Person('chucky');
// const john = new Person('john', '9-10-1982');

// console.log(chucky)
// console.log(john.calculateAge())


// Prototypical inheritence


function Person(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('chuck','seki');

console.log(person1.greeting())

// Customer Constructor

function Customer(firstName,lastName,phone,membership) {
    Person.call(this,firstName,lastName);
    this.phone = phone;
    this.membership = membership;
}

// Inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);

//make customer.prototype return customer()
Customer.prototype.constructor = Customer;   

// Create Customer
const customer1 = new Customer('Tom','Smith','555-555-555', 'standard');    
console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}
     welcome to the company`;
}
console.log(customer1.greeting());


// Creating objects using Object.create

const personPrototypes = {
    greeting:function () {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMaried:function (newLastName) {
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'mary';
mary.lastName = 'jones';
mary.age = 30;  

mary.getsMaried('Chucky')
console.log(mary.greeting());

const chuck = Object.create(personPrototypes,{
    firstName:{value:'chuck'},
    lastName:{value:'mob'},
    age:{value:20}
});

console.log(chuck);
console.log(chuck.greeting());

// Using Es6 to create classes
class Person{
    constructor(firstName,lastName,dob){
            this.firstName = firstName;
            this.lastName = lastName;
            this.birthDay = new Date(dob);
    }
    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
    calculateAge(){
        const diff = Date.now() - this.birthDay.getTime();
        const ageDate = new Date(diff)
        return Math.abs(ageDate.getUTCFullYear() -1970);
    }
}

const mary = new Person('Mary','Jones');
console.log(mary);