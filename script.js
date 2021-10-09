'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//Destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// destructuring arrays

const arr = [1, 2, 3];
// old method
const a = arr[0];
const b = arr[1];
const c = arr[2];
// new method

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [first, , second] = restaurant.categories;
console.log(first, second);

//switching
[first, second] = [second, first];
console.log(first, second);

//receive 2 return values from a function
console.log(restaurant.order(2, 0));
const [v, h] = restaurant.order(2, 0);
console.log(v, h);

const nested = [2, 4, [5, 6]];
// const [o, , p] = nested;
// console.log(o, p);

//destructuring inside destructuring
const [o, , [p, l]] = nested;
console.log(o, p, l);

//default values
//const [p,q,r] = [8,9]
//(console.log(p,q,r); - 8,9,undefined)
const [u = 1, q = 1, r = 1] = [8, 9]; // 1 in this case will be default value
console.log(p, q, r);
