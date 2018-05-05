// alert('Yoo')

//var , let, const

// var name = "Chucky";
// console.log(name)



let name = "Yoo";
// console.log(name)

//Const

const name1 = 'Chucky';
// console.log(name1)
// const name1 = 'Chuck'

// Arrays
const nums = [45,2,3,56,7,8,9]
const nums3 = new Array(22,45,56,78);
const fruit = ['apple','mangoes','oranges','pears','pine appples']
// console.log(nums)


//Get array lenght
let val;
val = nums.length;

// Check if it's an array
val = Array.isArray(nums);
//get a value from an array
val = nums[3]
// console.log(val);


// Object literals

const person = {
    firstName:'Chucky',
    lastName:'Bozy',
    age:30,
    email:'chucky@gmail.com',
    hobbies:['music','games','sports'],
    address:{
        city:'Kampala',
        state:'Africa'
    },
    getBirthYear:function(){
        return 2004-this.age;
    }
}

let vals;

vals = person;
vals = person.firstName;
vals = person.age;
vals = person.hobbies[0];
vals = person.address.city;
vals = person.getBirthYear();
console.log(vals)

//Date and time

let date;

const today =  new Date();
date = today;
console.log(date)