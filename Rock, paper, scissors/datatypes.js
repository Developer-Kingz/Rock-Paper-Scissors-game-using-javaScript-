//Data types
let yourName = 'kingsley'; //string
let age = 26; //number
let name = {firstname: 'kingsley', secondname: 'richard', thirdname: 'mark'}; //Object
let truth = false //Boolean
let fruits = ['apple', 'orange', 'mango', 'pear']; //Array
let random; //undefined
let nothing = null; // value null

//strings in javascript (common methods)
let fruit = 'banana\napple'; //new line
console.log(fruit);
console.log(fruit.length); //To check the length of a string
console.log(fruit.indexOf('an')); //to check the position of something
console.log(fruit.slice(2, 6)); 
console.log(fruit.replace('ban', '123')); //to replace 'ban' with '123'
console.log(fruit.toUpperCase()); //to transform letter to uppercase
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2)); //to return the second letter in the word
console.log(fruit[2]); // to return the second letter in the word
console.log(fruit.split(',')); //split by a comma
console.log(fruit.split('')); //split by character


//Arrays: The two ways of writing an array are;
let myFruits = ['banana', 'orange', 'apple', 'mango'];
let myFruitss = new Array('banana', 'orange', 'apple', 'mango');
console.log(myFruits[2]); //access value of index2
console.log(myFruitss[3]);
myFruits[0] = 'grape';  //accessing a value througgh its index, and changing the value
console.log(myFruits);

for(let i = 0; i < myFruits.length; i++){
 console.log(myFruits[i]);
}


//Array common methods
console.log('to string', myFruits.toString()); //converting arrays to string
console.log(myFruits.join('*')); //to join the elements of an array by something
console.log(myFruits.pop(), myFruits); //reemoves last item from a list
console.log(myFruits.push('Blackberrys'), myFruits); //appends
console.log(myFruits.shift(), myFruits); //removes first item in a list
console.log(myFruits.unshift('kiwi'), myFruits); //Adds the word Kiwi to the list

let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = myFruits.concat(vegetables);    //joining two arrays together
console.log(allGroceries);
console.log(allGroceries.slice(2, 4));
console.log(allGroceries.reverse());  //to reverse an array

let numbers = [54, 28, 19, 3, 15, 34, 5, 13];
console.log(vegetables.sort());     //arranging an array in alphabetical order
console.log(numbers.sort(function(a, b) {return a-b})); // numbers sorted in assending order
console.log(numbers.sort(function(a, b) {return b-a})); // numbers sorted in decending order

let emptyArray = new Array()
for(let num = 0; num <= 10; num++){
 emptyArray.push(num);
}
console.log(emptyArray);

//OBJECTS
let student = {
    first: 'kingsley',
    last: 'igbor', 
    age: 25, 
    height: 170,
    studentInfo: function(){
    return this.first +'\n'+ this.last;
 }
};
//console.log(student.first);
//console.log(student.height);
//student.first = 'Samuel';     //Changing a property in an object
//console.log(student.first); 
student.age++;
console.log(student.age);
console.log(student.studentInfo());