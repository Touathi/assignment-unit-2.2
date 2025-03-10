// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Make a variable call name and set it as 'Dane'
// Then we check if name is 'Mary' and if it is 'mary', console log 'Hi, Mary!'
// If name is not 'Mary' then console log 'How do you do?'
// Variable is Dane and not Mary so we console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// make a variable called secret and end it with a semicolon so that we can set a
// value to it later, make another variable call code and set the value to it as 123.
// the code runs, if variable code = '123' then the variable secret will now have the
// value of 'super' and the value for code, '123' will be multiply by 2 which is now 246.
// then the code wants to know if the value for variable code is bigger than 250.
// If it is then the variable for secret will now be changed to 'duper',
// then console.log secret which the value will stay super because 246 is smaller than 250.


//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Make a boolean called isStudent and set it as true, and make variale age and zip
// and have the value as 34, and 55407. The first thing we check is if isStudent is
// true and if zip is bigger than 80000 then console log 'You're a student on the West Coast!'
// The else if is if, 'isStudent' === false or age is smaller than 30 console.log 'What are your hobbies?'
// The 2nd else if is if, 'isStudent === true then console.log 'Welcome to Prime!'
// else is if the first three if does not match then console.log 'How about the weather?'
// When running this code, it will enter the 2nd else if because 'isStudent' === true 
//and the console.log 'Welcome to Prime!' will show up.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/


// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// FIX - First change the value of colorOne to 'blue', and the value of colorTwo to 'red'.
// The code runs, if Mix = true then colorOne and colorTwo is 'purple', we need to add colorTwo = 'purple' under line 'colorTwo = 'purple';'
// So mix is true, then the value of colorOne and colorTwo is 'purple'.

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
// (FIX - colorTwo = 'purple';)
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

// FIX-- Change || to &&, so that its (temp > 39 && time >=4)

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

// FIX -- Change the first console log to 'enter' and the second console log to 'no entry'

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

