//conditionals control flows (if else)
//e.g code showing that 18-35 is my target demoraphic

var age = 45; //there has to be an age variable, if not the if statement would not work

if ((age >= 18) && (age <= 35)){
    status = 'target demo';
    console.log(status);
} else{
    status = 'not my audience';
    console.log (status);
}

//switch statement 
//its used in some caseshere using if statement would be difficult
//writing a code to indicate friday, saturday and sunday as weekends,while every other day as weekday
switch(3){
    case 0:
        text = 'sunday-weekend';
        break;
    case 5:
        text = 'friday-weekend';
        break;
    case 6:
        text = 'saturday-weekend';
        break;
    default:
        text = 'weekday'            
}
console.log(text);