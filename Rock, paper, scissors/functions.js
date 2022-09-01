//steps to writing functions
//1. create a function
//2. call the function

//Create
function king(){
    console.log('this is an alert');
}

//call
king();

/* Lets create a function that takes in a name and says hello follow by your name
for example:
Name: Kingsley
Return: Hello Kingsley*/
function greeting(){
    var name = prompt('what is your name?');
    var result = 'Hello'+' '+ name; //string concatenation
    console.log(result);
}

// greeting();

//How to add two numbers in a function
function kings(num1, num2){
  var sum = num1 + num2;
  console.log(sum);
}

kings(30, 20);

// function greetings(yourName){
//   var result = 'Hello '+ yourName;
//   console.log(result);
// }
// var name = prompt('what if your name?');
// greetings(name);


//While Loop
// var num = 0;
// while(num<100){
//     num += 1
//     console.log(num);
// }

//for loop

for(let num=10; num<=100; num+=2){
    console.log(num);
}