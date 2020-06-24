// 1. Program and observe the following requirements:
var user = new Object();
user.name = "John";
user.surname = "Mike";
user.name = "Peter";
delete user.name;

// 2. Program and observe the following requirements: 
// calculate how many pieces of fruit there are in the fruit object and the output should be 50.
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
    };
let fruits_num = 0;
for (let key of Object.keys(fruit)) {
    fruits_num += fruit[key];
}
console.log(fruits_num);
