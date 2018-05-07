// const sayHello = function () {
//     console.log('hello');
// }

// const sayHello =  () => {
//     console.log('hello');
// }


const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
sayHello('chuck', 'mike'); 

const users = ['Chuck', 'brad', 'mike'];

// const nameLenghts = users.map(function (name) {
//     return name.length;
// });

const nameLenghts = users.map( (name) => {
    return name.length;
});

console.log(nameLenghts);