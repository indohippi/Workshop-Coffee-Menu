const coffeeMenu = require('./coffee_data.js');
console.log(coffeeMenu.map(item => item.name));

console.log(coffeeMenu.filter(item => item.price <= 5).map(item => item.name));

console.log(coffeeMenu.filter(item => item.price % 2 === 0).map(item => item.name));

console.log(coffeeMenu.reduce((total, item) => total + item.price, 0));

console.log(coffeeMenu.filter(item => item.seasonal).map(item => item.name));

console.log(coffeeMenu.filter(item => item.seasonal).map(item => item.name + " with imported beans"));