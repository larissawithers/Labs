//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."

let jobTitle = "Engineer"
let geographicLocation = "London Ontario"
let annualSalary = 70000
let company = "3M"

console.log(`You will be an ${jobTitle} in ${geographicLocation}, making $${annualSalary} for ${company}.`)

let excercise1 = document.querySelector(`.ex1`)
excercise1.textContent = jobTitle

let excercise1Part2 = document.querySelector(`.ex1Part2`)
excercise1Part2.textContent = geographicLocation

let excercise1Part3 = document.querySelector(`.ex1Part3`)
excercise1Part3.textContent = annualSalary

let excercise1Part4 = document.querySelector(`.ex1Part4`)
excercise1Part4.textContent = company

//EXERSE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.

let year = 2020
let birth = 1999

let age = year-birth

console.log(`They are ${age} years old.`)

let excercise2 = document.querySelector(`.ex2`)
excercise2.textContent = age

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".

let currentAge = 21
let maximumAge = 95
let amount = 3
let totalYears = maximumAge-currentAge
let total = totalYears*amount

console.log(`You will need ${total} to last you until the ripe old age of ${maximumAge}`)

let excercise3 = document.querySelector(`.ex3`)
excercise3.textContent = total

let excercise3Part2 = document.querySelector(`.ex3Part2`)
excercise3Part2.textContent = maximumAge

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

let radius = 4
let diameter = radius*2
let pie = 3.14159
let circumference = pie*diameter
let area = (radius ** 2)*pie

console.log(`The circumference is ${circumference}. The area is ${area}`)

let excercise4 = document.querySelector(`.ex4`)
excercise4.textContent = circumference

let excercise4Part2 = document.querySelector(`.ex4Part2`)
excercise4Part2.textContent = area

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let celsius = 20
let fahrenheitTotal = (celsius*1.8)+32
let fahrenheit = 70
let celsiusTotal = (fahrenheit*1.8)+32

console.log(`${celsius}°C is ${fahrenheitTotal}°F. ${fahrenheit}°F is ${celsiusTotal}°C.`)

let excercise5 = document.querySelector(`.ex5`)
excercise5.textContent = celsius

let excercise5Part2 = document.querySelector(`.ex5Part2`)
excercise5Part2.textContent = fahrenheitTotal

let excercise5Part3 = document.querySelector(`.ex5Part3`)
excercise5Part3.textContent = fahrenheit

let excercise5Part4 = document.querySelector(`.ex5Part4`)
excercise5Part4.textContent = celsiusTotal

// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(num) {
    return num ** 2
}

let result1 = squareNumber(5);

console.log(`The result of squaring the number 5 is ${result1}`)

let excercise6 = document.querySelector(`.ex6`)
excercise6.textContent = result1

// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber(num){
    return num / 2
}

let result2 = halfNumber(5);

console.log(`Half of 5 is ${result2}`)

let excercise7 = document.querySelector(`.ex7`)
excercise7.textContent = result2


// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(num, num2){
    return (num/num2)*100
}

let result3 = percentOf(2,4)

console.log(`2 is ${result3}% of 4`)

let excercise8 = document.querySelector(`.ex8`)
excercise8.textContent = result3

// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle(num){ 
    return (num ** 2)*3.14159
}
let result4 = areaOfCircle(2)

console.log(`The area for a circle with radius 2 is ${result4.toFixed(2)}`)

let excercise9 = document.querySelector(`.ex9`)
excercise9.textContent = result4

// EXERCISE 5
// Write a function named runAll that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).

function runAll(num){
    let result5 = halfNumber(num)
    let result6 = squareNumber(result5)
    let result7 = areaOfCircle(result6)
    let result8 = percentOf(result7, result6)
    return result8
}

let result9 = runAll(4)


console.log(`${result9.toFixed(2)}`)

let excercise10 = document.querySelector(`.ex10`)
excercise10.textContent = result9