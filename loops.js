// a arrow function in javascript
// const someName = () => {};

// //unnamed arrow function
// () => {};

// someName();


const numbers = [1,2,3,4,5,6];


// methods on arrays in js and ruby
// forEach (each in ruby), map, filter (select in ruby), reduce, find

const logThing = (thing) => {
  console.log(thing);
};

logThing("hello");

// forEach - go through each thing in an array and run the function given,
// return value is undefined

// in js functions can take functions as arguments
let returnValue = numbers.forEach(logThing);
console.log("returnValue: ", returnValue);

numbers.forEach((thing)=> {
  console.log(thing);
});

numbers.forEach((thing) => {
  if (thing % 2 == 0) {
    console.log ("even");
  } else {
    console.log("odd");
  }
});


// map - go through each thin in an array and run the function given,
// whatever that function returns is pushed into a new array
// which is returned at the end

let newValues = numbers.map((num)=>{
  // whatever that is returned here is pushed into new array
  // return num%2 === 0? {num: num, value: "even"} : { num: num, val: "odd" };
  if(num%2 === 0) {
    return {num: num, value: "even"} 
  } 
    return { num: num, val: "odd" }
});

console.log(newValues);

