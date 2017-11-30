// Examples using Reduce

const numbers = [10, 20, 30, 40] // sums to 100
// function for adding two numbers. Easy!
const add = (a, b) =>
  a + b
// use reduce to sum our array
const sum = numbers.reduce(add)

reduce(function(accumulator, currentValue))





const peopleObject = {
  "123": { id: 123, name: "dave", age: 23 },
  "456": { id: 456, name: "chris", age: 23 },
  "789": { id: 789, name: "bob", age: 23 },
  "101": { id: 101, name: "tom", age: 23 },
  "102": { id: 102, name: "tim", age: 23 }
}

const idToSelect = "789";
const selectedPerson = peopleObject[idToSelect];


const arrayToObject = (array) =>
   array.reduce((obj, item) => {
     obj[item.id] = item
     return obj
   }, {})

const peopleObject = arrayToObject(peopleArray)
console.log(peopleObject[idToSelect])


const euros = [29.76, 41.85, 46.5];
const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});


const euros = [29.76, 41.85, 46.5];
const doubled = euros.reduce((total, amount) => {
  total.push(amount * 2);
  return total;
}, []);

doubled // [59.52, 83.7, 93]



const euro = [29.76, 41.85, 46.5];
const above30 = euro.reduce((total, amount) => {
  if (amount > 30) {
    total.push(amount);
  }
  return total;
}, []);
above30 // [ 41.85, 46.5 ]




const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
const count = fruitBasket.reduce( (tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1 ;
  return tally;
} , {})
count // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }


fruitBasket.reduce( (tally, fruit) => {
  tally[fruit] = 1;
  return tally;
}, {})


// FLATTEN AN ARRAY

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flat = data.reduce((total, amount) => {
  return total.concat(amount);
}, []);
flat // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]



const data = [
  {a: 'happy', b: 'robin', c: ['blue','green']}, 
  {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
  {a: 'sad', b: 'goldfish', c: ['green','red']}
];



const colors = data.reduce((total, amount) => {
  amount.c.forEach( color => {
      total.push(color);
  })
  return total;
}, [])
colors //['blue','green','green','black','orange','blue','green','red']



const uniqueColors = data.reduce((total, amount) => {
  amount.c.forEach( color => {
    if (total.indexOf(color) === -1){
     total.push(color);
    }
  });
  return total;
}, []);
uniqueColors // [ 'blue', 'red', 'green', 'black', 'orange']




