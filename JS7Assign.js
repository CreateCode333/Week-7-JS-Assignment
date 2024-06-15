// Week 7: JS4 Coding Assignment June 13, 2024 Tina Smith
//Question 1: Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
//ages[7] - ages[0] is not allowed!
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//Use a loop to iterate through the array and calculate the average age.

//
//I created the array below:
ages = [3, 9, 23, 64, 2, 8, 28, 93]
let differences = ages[ages.length - 1] - ages[0];
//I used console.log below to check my code
console.log(differences)
//Below I added the number "25" to my array using .push
ages.push(25)
let newDifference = ages[ages.length -1] - ages[0]
//I used console.log below to check my code to ensure it is dynamic
console.log(`New difference after adding 25: ${newDifference}`)
//Below I used a loop to iterate through the array amd calculate the average age.
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages [i]
}
let averageAge = sum / ages.length;
//I used console.log to check my code.
console.log(`Average age: ${averageAge}`)

//Question 2.  Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//Use a loop to iterate through the array and calculate the average number of letters per name.
//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.//

//I created the array below
names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
//I used a loop to iterate through the array and calculate the average number of letters per name below:
let letters = 0;
for (let i = 0; i < names.length; i++) {
    letters += names[i].length;
}
let averageLettersPerName = letters / names.length;
//I used console.log to check my code 
console.log(`Average number of letters per name: ${averageLettersPerName}`)

//I used a loop again to iterate through the array a 2nd time and concatenate all the names together, separated by spaces.
let concatNames = ''
for (let i = 0; i < names.length; i++) {
    concatNames += names[i];
    if (i !== names.length - 1) {
        concatNames += ' ';
    }
}
//I used console.log to check my code
console.log(`Concatenated names: ${concatNames}`);

//Question 3. How do you access the last element of an array?
//I prefer to use the index "-1" because it is simpler. For example:
let array = [4, 8, 12, 15, 20]
let lastElement = array[array.length -1]
console.log(lastElement) //the answer is 20

//Question 4. How do you access the first element of an array?
// You can use "0" to index the first element like this:
let arr = [5, 10, 15, 20, 25]
let firstElement = arr[0]
console.log(firstElement) // the answer is 5

//Question 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
//Here is where I created the new array called nameLengths
nameLengths = [];
//I used a loop to iterate over the previous names array and added the length of each name to the array
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length)
}
console.log(nameLengths)

//Question 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
nameLengths = [3, 5, 3, 5, 4, 3]
let sums = 0
//I wrote a for loop to iterate over the nameLengths array and calculate the sum of the array
for (let i = 0; i < nameLengths.length; i++) {
sums += nameLengths[i]
}
//I used console.log to check my code
console.log(`Sum of all elements in nameLengths array: ${sums}`);

//Question 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

//I write the function here
function concatenate(word, n) {
    let concateWord = '';
    for (let i = 0; i < n; i++){
        concateWord += word;
    }
    return concateWord
}
let result = concatenate('Cheers', 3)
console.log(result) /// the result is CheersCheersCheers

//Question 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
//I write the function here:
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
let results = fullName('Tina', 'Smith')
console.log(results)

//Question 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function sumGreat100(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum > 100; 
}
//I used the followin arrays to test my code and see if my funciton worked.
let arrs1 = [10, 20, 30];
let arrs2 = [50, 60, 20];
//I used console.log to print the result
console.log(sumGreat100(arrs1)) //false
console.log(sumGreat100(arrs2)) //true

//Question 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function averageNums(numbs) {  //I used numbs as my parameter
    if (numbs.length === 0){
        return 0;
    }
    let sum = 0;
    //I used a for loop to iterate through each element in the numbs array
    for (let i = 0; i < numbs.length; i++) {
        sum += numbs[i];
    }
    let average = sum / numbs.length;
    return average;
}
//I put numbers into the array to check the code
let arry1 = [5, 4, 3, 2, 1];
let arry2 = [10, 20, 30, 40, 50]
//I used conosole.log to log out my code.
console.log(averageNums(arry1));
console.log(averageNums(arry2));

//Question 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function compareArrays(array1, array2) {
    let sumA = 0;
    for (let i = 0; i < array1.length; i++) {
        sumA += array1[i];
    }
    let averg1 = array1.length > 0 ? sumA / array1.length : 0;
    
    let sumB = 0;
    for (let i = 0; i < array2.length; i++) {
        sumB =+ array2[i];
    }

    let averg2 = array2.length > 0 ? sumB / array2.length : 0;
    return averg1 > averg2;
}
 let array1 = [1, 2, 3, 4, 5];
 let array2 = [20, 30, 40, 50];

 console.log(compareArrays(array1, array2))

 //Question 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
 //this is the function with the parameters of isHotOutside and moneyInPocket
 function willBuyDrink(isHotOutside, moneyInPocket) {
    //I used the logical operator && to combine the two conditions
    return isHotOutside && moneyInPocket > 10.50;
 }
 //we can test it this way:
 console.log(willBuyDrink(true, 20))//returned true because it's hot outside and the money is greater than 10.50
 console.log(willBuyDrink(false, 9)) //returns false because it's not hot outside (false) and the money is less than 10.50

 //Question 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
 //I'm writing a function that calculates the square of a number. I'm using this example because it is easy for me to understand and write. And all of the previous questions were really hard and I need something to boost my confidence right now. :) 
 //I started by creating a function that takes in the parameter called numberss
 function calcSquareNumber(numberss) {
    return numberss * numberss  //here I calculate the square of the number by multiplyig numberss by itself
 }
 //I'm passing the number 10 is as a parameter here
let answer = calcSquareNumber(10) //the answer is 100
//I'm logging out the answer here
console.log(answer)