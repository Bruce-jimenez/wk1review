////////////////////////////////////////////////////////////////
// Conditionals:
///////////////////////////////////////////////////////////////

//1. Write a JavaScript display the larger of two integers
  // console.log(Math.max(19,28));

// 2. Write an if/else statement for the following requirements:

//  let num = 98
// if(num >= 55 && num < 70){
//   console.log("You get a D")

// }else if(num >= 90 && num < 100){
//     console.log("You get a A")

// }else if(num >= 80 && num < 90){

//     console.log("You get a B")
// }else if(num >= 70 && num < 80){
//     console.log("You get a C")
// }

// else{console.log("You get a F")
// }


// If student gets 90 or higher: console log  A
// If students get 80 or above: console log B
// If students get 70 or above: console log C
// If students get 55 or above: console log D
// Any grade lower than 55 is F */

//3. Write a JavaScript program that displays "Good Morning" if time is between 5AM-11:59 | "Good Afternoon" if time is between 12 - 16 | otherwise "Hey there"

// let time = 0600

// if (time <= 1159 && time >= 0500){
//   console.log("Good Morning")
//   }
//   else if (time >= 1200 && time <= 1600){
//     console.log("Good Afternoon")
//   }
//   else{
//     console.log("Hey there")
//   }


////////////////////////////////////////////////////////////////
// Strings:
///////////////////////////////////////////////////////////////
// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
// const herName = "Sabrina"
// console.log((herName.charAt(4)));

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
//  let Unicode = "Teddy"
//  console.log((Unicode.charCodeAt(2)))

// Using fromCharCode() - make it readable for us :). You'll see!
// console.log((String.fromCharCode(084, 101, 100, 100, 121)))

// Take your first and last name and concat()
// console.log("Bruce " + "Jimenez")
// Create a string and make it return true using startsWith()
// let text = "My Jolly Roger is the best of all the seas!"
// console.log(text.startsWith("My", 0))

// Now use any variable with endsWith() and return false
// var lets = "Thats the greatest Pirate the world has ever seen."
// console.log(lets.endsWith("seen", 4))

// Finish the following sentence. Use includes() and return true.
// const ozgur = 'Once upon a time Ozgur looked up at the Moon, '
// console.log(ozgur.includes("upon", 1))

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
// const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
// console.log(joshHadALittleLambOopsCow.indexOf("cow"))
////////////////////////////////////////////////////////////////
// Boolean:
///////////////////////////////////////////////////////////////

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

// const a = 5;
// const b = 10;
// const c = 15;
// const d = "Keke"

//  console.log(a < b)
//  console.log(c > b)
//  console.log(d === d)
//  console.log(d != a)
//  console.log(a < 15)
//  console.log(a < b < c)
//  console.log(c > b > a != d)


////////////////////////////////////////////////////////////////
// Loops:
///////////////////////////////////////////////////////////////
// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.

// for (let  i = 0; i <= 10; i++){
// console.log ("Every thing is spinning!")
// }

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
//  for (let  i = 0; i <= 20; i++){
//     console.log ("Now you're spinning Teo.")
//   }

// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
// let i = 0
// while(i <= 20){
//   console.log("I'm Sorry")
//   i++
// }
// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
// const whateverQueenBeySaid = {
//     thing1: 'shoes',
//     thing2: 'clothes',
//     thing3: 'gaming console'
//   }
//   let left = ""
//   for (const x in whateverQueenBeySaid){
//     left= whateverQueenBeySaid[x] + ''
//     console.log(left)
//   }
  
  // Using (FOR IN LOOP), print the indexes of the array.
  // const lana = ['l', 'a', 'n', 'a']
  // const spell = {}  
  // for (const property in lana) {
  //   console.log(`${property}: ${lana[property]}`);
  // }
  
  

  // USE (FOR OF LOOP)!
  // const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
  // for (const prop of tia){
  //   console.log(prop)
  // }
  
  
  // Look into forEach() loop, it accepts a callback aka a function inside a function. 
  // Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
  // const perscholas = ['Amira', 'Arely', 'Jonathan']
  // let str = "PS "
  // var message = ""
  // perscholas.forEach(repeat)
  //   function repeat (str, perscholas){
      
  //     console.log(str + perscholas)

  //   }

////////////////////////////////////////////////////////////////
// Arrays:
///////////////////////////////////////////////////////////////

// Look up the following: Make a note of what each one of these methods do
// push()
// pop()
// unshift()
// shift()
// concat()
// splice()
// slice()
// sort()
// includes()
// indexOf()
// length

/* You've been tasked to do this week's grocery shopping. As you arrive at Times Supermarket, Raphael pings you to get a bottle of Hendricks gin. Add this to the existing shoppingList and console.log it.*/
// var shoppingList = [

//   "cool ranch doritos",

//   "kings hawaiian sweet bread",

//   "peanut butter oreos",

//   "fruit loops cereal"

// ];
// shoppingList.push("bottle of hendricks gin")
// console.log(shoppingList)

//3.  Use the force, or in this case the reverse method to help Yoda make some sense with his motivational talk to the young Jedi interns.*/

// var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];

// yoda.reverse();

// console.log(yoda);

//4. People been lining up for hours to get the newest iphone release. Help manage the unruly crowd of privileged customers by serving them one at a time and assiging it to a variable named `nowServing`. Console.log this new variable as well as the waitList.*/

// var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
// var nowServing = ""
// var waitLength = waitList.length

// console.log(`wait List is ${waitList}`)

// for(let i = 0; i < waitLength; i++){
//   let customer =  waitList.shift()
//   console.log(customer)
// }
// console.log(`wait List is ${waitList}`)



//5. Help Nike sell more overpriced sneakers by changing their slogan from an array into a string. Convert the shoe array and assign it to a variable named `shoeString`. Console.log this new variable.

// var shoe = ["just", " do", " it"];
// var shoeString = shoe.toString();
// console.log(shoeString)


// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
// let letti = [4, 65, 6];
// let create = [...letti];
// console.log(letti)
// console.log(create)

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
//  let array1 = [1,1,4,"Good One"]
//  let array2 = [2,2,8,"Two times is trying "]
//  let array3 = [...array1, ...array2]

//  console.log(array1)
//  console.log(array2) 
//  console.log(array3)


////////////////////////////////////////////////////////////////
// Functions:
///////////////////////////////////////////////////////////////

// Don't forget to CALL your functions

//1. Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
// function maxOfTwoNumbers(a,b){
//   return Math.max(a,b)
// }

// function maxOfTwoNumbers(a,b){
//   if(a>b){
//     return console.log(a + " is bigger than " + b)
//   }
//     else{
//       return console.log(b + " is bigger than" + a)
//     }
// } 

// maxOfTwoNumbers(7,5)

//2. Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// function maxOfThree(x,y,z){
//   return Math.max(x,y,z)
// }
//3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise
// function isCharacterAVowel()

//4. Write a function charCount that takes a string and returns the length of the string.
// function charCount()

//5. Write a function vowelCount that takes a String and returns the number of vowels in the String. Add a check for the string to be of 10 or less characters.
// function vowelCount()
