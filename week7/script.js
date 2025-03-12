// QUESTION 1: VARIABLES
console.log("—————————————————————————————")
console.log("——— QUESTION 1: VARIABLES ———")
// For each of the following items, define a variable to hold the value of the item and log it to the console.

// A string consisting of your name
let name = "Julie";
console.log(name);
 
// Your favorite number as an integer
let number_integer = 7;
console.log(number_integer);
 
// Your favorite number as a string
let number_string = "7";
console.log(number_string);

// A boolean value (true/false)
let boolean = true;
console.log(boolean);
 
// An array consisting of each of the letters of your first name
let name_array = ["J", "u", "l", "i", "e"];
console.log(name_array);
 


// QUESTION 2: ARITHMETIC
console.log("——————————————————————————————")
console.log("——— QUESTION 2: ARITHMETIC ———")
// Add two strings together. The first string is your first name, and the second string is your last name. Log the result. How do you include a space between them?
let first_name = "Julie";
let last_name = "Han";
console.log(first_name+" "+last_name);

 
// Add two integers together to equal the number 100. Log the result.
console.log(50+50); 

 
// Log the number of characters in the string ‘supercalifragilisticexpialidocious’ by using the length property.
console.log("supercalifragilisticexpialidocious".length);


// Log the result of this expression: the length of characters in your first name is equal to the length of characters in your last name. (If you did this right you should get "false")
console.log(first_name.length == last_name.length);

 

// QUESTION 3: RANDOM VALUES
console.log("—————————————————————————————————")
console.log("——— QUESTION 3: RANDOM VALUES ———")
// For each of the following items, log a random number:
// A random number between 0 and 1
console.log(Math.random());
 
// A random number between 0 and 100
console.log(Math.random()*100);
 
// A random number between 20 and 30
console.log(Math.random()*10+20);

 
// A random integer (whole number) between 20 and 30
console.log(Math.floor(Math.random()*10)+20);
 

// QUESTION 4: ARRAYS
console.log("—————————————————————————————————")
console.log("——— QUESTION 4: ARRAYS ———")
// Create 3 arrays consisting of the following items. Define variables to store each of the 3 arrays.

// 3 foods
let food = ["apple","watermelon","banana"]
console.log(food);
 
// 4 animals
let animals = ["dog","horse","rabbit","frog"]
console.log(animals);
 
// 4 places
let places = ["New York","Rome","Paris","London"]
console.log(places);
 
// 5 adjectives
let adjectives = ["happy","bad","hilarious","dirty","kind"]
console.log(adjectives);
 
// Log the first food.
console.log(food[0]);

// Log the last food. 
console.log(food[2])
 
// Add another item at the end of the foods array above. If the value above changed, log an answer so that it automatically reads the last item without changing it every time.
food.push("mango")
console.log(food[food.length-1]);

// Log a random food.
console.log(food[Math.floor(Math.random()*food.length)]);


// Create an array of arrays consisting of the variables from the previous question. Define a variable to hold this array of arrays and log it.
let array_all = [food,animals,places,adjectives];
console.log(array_all);

// Log the first food from the *array of arrays* you created. (You may need to look this one up.)
console.log(array_all[0][0]);
 

// QUESTION 5: CONCATENATION
console.log("—————————————————————————————————")
console.log("——— QUESTION 5: CONCATENATION ———")
// Define a variable for each of the following: a random place, a random adjective, and a random animal, all making reference to the arrays you defined above.
let randomplaces = places[Math.floor(Math.random()*places.length)];
let randomadjectives = adjectives[Math.floor(Math.random()*adjectives.length)];
let randomanimals = animals[Math.floor(Math.random()*animals.length)];


// Concatonate this sentence with the indicated random words: “I went to [random place] where I saw a [random adjective] [random animal].” Log it.
// Hint: it might be easier to store the entire sentence in a variable.
console.log("I went to"+" "+randomplaces+" "+"where I saw a"+" "+randomadjectives+" "+randomanimals+".");


// QUESTION 6: HTML ELEMENTS
// console.log("—————————————————————————————————")
// console.log("——— QUESTION 6: HTML ELEMENTS PART 1———")
// Create a blank div in HTML and give it an ID. 
// Define a variable called "myElement" to hold that div.



// Log that element. What does the result look like?
let myElement= document.querySelector("#myDiv");
console.log(myElement);
 //A: Nothing Happens!
 
// Change the text content of that element to the random sentence above.
myElement.textContent = "I went to"+" "+randomplaces+" "+"where I saw a"+" "+randomadjectives+" "+randomanimals+".";


// QUESTION 7: HTML ELEMENTS PART 2
// console.log("—————————————————————————————————")
// console.log("——— QUESTION 7: HTML ELEMENTS PART 2———")


// Make two arrays: One with 10 nouns, and one with 10 adjectives.
let noun = ["shoes","book","phone","food","laptop","chair","pen","cup","mouse","jelly"]
let adjective = ["big","small","tasty","beautiful","ugly","old","new","clean","dirty","expensive"]

// For each span in the description, define a variable that holds that element in JavaScript. Hint: target the ID for each span.
let adj1 = document.querySelector("#adj1");
let noun1 = document.querySelector("#noun1");
let adj2 = document.querySelector("#adj2");
let noun2 = document.querySelector("#noun2");
let noun3 = document.querySelector("#noun3");
let noun4 = document.querySelector("#noun4");
let adj3 = document.querySelector("#adj3");
let noun5 = document.querySelector("#noun5");
let noun6 = document.querySelector("#noun6");
let noun7 = document.querySelector("#noun7");
let adj4 = document.querySelector("#adj4");


// For each variable above, change the value of that element in the HTML to a random value from the respective arrays (nouns for nouns, adjectives for adjectives).
adj1.textContent = adjective[Math.floor(Math.random()*adjective.length)];
noun1.textContent = noun[Math.floor(Math.random()*noun.length)];
adj2.textContent = adjective[Math.floor(Math.random()*adjective.length)];
noun2.textContent = noun[Math.floor(Math.random()*noun.length)];
noun3.textContent = noun[Math.floor(Math.random()*noun.length)];
noun4.textContent = noun[Math.floor(Math.random()*noun.length)];
adj3.textContent = adjective[Math.floor(Math.random()*adjective.length)];
noun5.textContent = noun[Math.floor(Math.random()*noun.length)];
noun6.textContent = noun[Math.floor(Math.random()*noun.length)];
noun7.textContent = noun[Math.floor(Math.random()*noun.length)];
adj4.textContent = adjective[Math.floor(Math.random()*adjective.length)];