// // Lesson 7 Task 1

let person = {}
person.firstName = "Ivan"
person.secondName = "Ivanov"
person.showData = function () {
    console.log(this.firstName + " " + this.secondName)
}
person.showData()

let newPerson = person
newPerson.firstName = "Petro"
newPerson.secondName = "Petriv"
newPerson.showData()

// // Task2

let MyMath = {}
MyMath.a = 5
MyMath.b = 2
MyMath.calcSum = function (a, b) {
    return console.log(this.a + this.b)
}
MyMath.calcSum()
MyMath.multiplication = function (a, b) {
    return console.log(this.a * this.b)
}
MyMath.multiplication()
MyMath.division = function (a, b) {
    return console.log(this.a / this.b)
}
MyMath.division()
MyMath.division = function (a, b) {
    return console.log(this.a / this.b)
}

MyMath.subtraction = function (a, b) {
    return console.log(this.a - this.b)
}
MyMath.subtraction()


// // Lesson 8 Task1

let str = prompt("enter something")

function showSpaces() {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ")
            count++
    }
    return console.log(count)
}
showSpaces()

// // Task 2

let str = prompt("enter something")

function correctMail() {
    if (str.includes("@") && str[0] !== "@" && str[length - 1] !== "@") {
        alert("your mail " + str + " is correct")
        
    } else
         {
            alert("your mail " + str + " is not correct")
            str = prompt("enter something")
            correctMail()
        }
     
}
correctMail()

// // Task 3

let str = prompt("write shtmlome text html ddf html")

function audit() {
    let count = 0
    let str2 = str.split(" ")
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] == "html") {
            count++
        }
    }
    alert(count)
}
audit()


// Task 4

let str = promt("enter your mail")
 let str = `https://www.google.com`
function func(){
if(str[4]=="s"){
    let str2= str.slice(8, str.length)
    console.log(str2)
}
else{
    let str2= str.slice(7, str.length)
    console.log(str2) 
}
}
func()