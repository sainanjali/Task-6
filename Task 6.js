// WAP in js to check given Year is leap year

console.log("This is tut")
    
function checkleapyear(Year) {
    if ((0 == year % 4) && (0 != year % 100 ) || (0 == year % 400)) {
        console.log(year + 'is a leap year');}

else{
    console.log(year + 'is not a leap year');
}
}
const year = prompt('Enter a year: ');
checkleapyear(year);



// WAP in js for performing arithmetic operation on 2 number according to input operator.


const num1 = parseInt(prompt('Enter a first number'));
const num2 = parseInt(prompt('Enter a second number'));

console.log("The value of num1 + num2 is "+ (num1 + num2));
console.log("The value of num1 - num2 is "+ (num1 - num2));
console.log("The value of num1 * num2 is "+ (num1 * num2));
console.log("The value of num1 / num2 is "+ (num1 / num2));
console.log("The value of num1 ** num2 is "+ (num1 ** num2));


// WAP in js to pass a function as parameter

let name = "Anjali";
let name2 = "Sanjana";
let greetText1 = "Good Morning";

function greet(name, greetText="Night"){
    console.log(greetText + " " + name);
    console.log(name + " is a good Girl");
}

greet(name, greetText1);
greet(name2);



// WAP in js to Merge Two Arrays and Remove Duplicate items 

function getUniqueAfterMerge(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    let uniqueArr = [...new Set(arr)];
    console.log(uniqueArr);
    
}

const array1 = [1,2,3];
const array2 = [2,3,5];
 
getUniqueAfterMerge(array1, array2);








