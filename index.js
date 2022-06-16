function isPalindrome(word) {
  // Write your algorithm here
 let lowCase = word.toLowerCase()
 let reverse =lowCase.split('').reverse().join('')
 if (lowCase===reverse){
  return true;
  
  }
  else {
    return false
  }
 }


/* 
  Add your pseudocode here
*/
// declare a function that takes word as Parameter
// convert the word to lower case using lowercase method
// then define a varable reverse that uses split method to split word parameter then use join method to convert it back to String
// use if statement to create the strict equality condition between variables
// return true if the condition is met
// else return false if the condition is not met


/*
  Add written explanation of your solution heref the word is plalindrome, 
  i will convert the word into lowercase as the first step. secondi wil define a second varable that reverses the word by use of split method and join method. 
  i will then use if statement to compare the two varables using strict equaliy assignment. 
  when the condition is met, i expect the result to be true, and if the condition will not be me, i will expect a false return
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
