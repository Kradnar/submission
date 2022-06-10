//!----Activity 5(1)---------------------------------

let numb = 1234

if (numb % 3 == 0 && numb % 5 == 0) {
  console.log("fizzbuzz")
} else if (numb % 5 == 0) {
  console.log("buzz") 
} else {
  console.log('fizz')
}

//!-----Activity 5(2)---------------------------------

let count1 = 0
while(count1 < 6){
    number = Math.floor(Math.random() * (31 - 1)+1)
    if(number % 7 == 0){
        console.log(`${number} is divisible by 7.`)
    } else {
        console.log(`${number} is not divisible by 7.`)
    }
    count1++
}

//!------Activity 2(3)--------------------------------

let count2 = 0
while(count2 < 6){
    console.log(Math.floor(Math.random() * 50))
    count2++
}

//!------Activity 3(3)--------------------------------

let count3 = 0
while(count3 < 10){
    console.log(count3)
    count3++
}
console.log("and in reverse")
count3--
while(count3 >= 0){
    console.log(count3)
    count3--
}

//!-----Activity 2(4)----------------------------------

const pet = {
    name: "Crookshanks",
    typeOfPet: "Cat",
    age: 2,
    colour: "ginger",
    eat: "Catfood",
    drink: "Milk",
    intro() {
        console.log(`Hello my ${this.typeOfPet} is called ${this.name},\nHe is ${this.colour} and is ${this.age} years old,\nHe eats ${this.eat} and drinks ${this.drink}.`)
    }
}

pet.intro()


//!-----Activity 3(5)----------------------------------

let password = "foolproof"

if (password.length >= 8) {
    console.log(password)
} else {
    console.log("Password is too short")
}


//!-----Activity 4(5)----------------------------------

let num = 15
if (num % 5 == 0 || num % 3 == 0) {
    console.log("This number is divisible by 3 or 5")
} else {
    console.log("something else")
}

