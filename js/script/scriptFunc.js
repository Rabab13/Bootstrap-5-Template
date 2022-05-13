/* global console / alert / prompt */
//if....else
// var yourAge = prompt("What's Your Age?");

// if (yourAge <= 5) {
//     document.getElementById('condition1').innerHTML = 
//     "Sorry Your Age is " + yourAge + " Your Are Not Allowed Here"
// }
// else{
//     document.getElementById('condition1').innerHTML = 
//     "Hello , Your Age is " + yourAge + " Start Learning HTML,CSS,JAVASCRIPT"
// }
// if...else
// .. != / !==

// **********************************



var age = 44;
if (age !== 32){
    document.getElementById("operators1").innerHTML = "Wrong Age is "+ age + " so it is Not Equal";
}
else {
    document.getElementById("operators1").innerHTML = "Equal";
}
// &&
var age = 33;
    address = "USA";

if (age == 33 && address == "USA"){
    document.getElementById("and").innerHTML = "correct Age is "+ age + " and the address is " + address;
}
else {
    document.getElementById("and").innerHTML = "Wrong info";
}

// ||
var age = 33;
    address = "USA";

if (age == 32 || address == "USA"){
    document.getElementById("or").innerHTML = "Age is "+ age+ " so it's wrong but the address is " + address+ " correct";
}
else {
    document.getElementById("or").innerHTML = "Wrong info";
}

// *********************************************************
//Function 
function html(){
    "use strict";
    var userName = "Dell";
    alert("Hi " + userName + " i'm HTML5")

}

/*call function and return result & parameter
age is the parameter and the parameter value will be with the func when it called
myAgeInDays (parameter value which string or number)*/
function myAgeInDays(age, myName){
    "use strict";
    // var myNa = "Jack ";

        return myName + " your Age in Days = "+ age * 365 + " Days" ;
}
//call func & myAgeInDays(32, "Jack"); kind of calling the func
var ageScale = myAgeInDays(32, "Jack"); // (32) is the parameter value
document.getElementById("return").innerHTML = ageScale;

// Self Invoke function
// (function sayWelcome(){
//     "use strict";
//     alert("Welcome");

// })();
function convertToDollar(){
    "use strict";
    var amount = document.getElementById("dollar").value,
    result = amount / 18.24;
    console.log(result);
    document.getElementById("massage").innerHTML = amount + result.toFixed(1);
    if (amount === ""){
        massage.innerHTML = "Please write number into the input"
    }else if(isNaN(amount)){
        massage.innerHTML = "This failed accepts Number only"
    }else if(amount === "0"){
        massage.innerHTML = "The value Must not be 0"
    }else if(amount < 0){
        massage.innerHTML = "The value Must not be Navigate Number"
    }
    else {
        massage.innerHTML = "EGP converted To USD: " + result.toFixed(1);
    }
};
// Switch, Case, Break
function season(){
var answer = document.getElementById("choose").value,

result = answer
document.getElementById("massage2").innerHTML = result;
switch(answer) {
    case "Winter":
        massage2.innerHTML = "Awesome! winter is cold"
        break;

    case "Summer":
        massage2.innerHTML = "Noway! Summer is very hot"
        break;
    case "Autumn":
        massage2.innerHTML = "Awesome! Autumn is cool"
        break;
    case "Spring":
        massage2.innerHTML = "Awesome! Spring is flower season"
        break;
    default:
        massage2.innerHTML = "You didn't enter the season"
        break;

}
}

// *********************************************************** /
// Global function
var myName = "jack" // Global variable

function myGlobalFunc() {
    "use strict";

    myName = "Well";

    console.log(myName) // local
}
myGlobalFunc(); // now will print well as global function
console.log(myName)

var x = 1

function gloFunc() {
    "use strict";
    var y = x + 2 // if variable exist will be Global 
    console.log(y) 
}
gloFunc(); // now will print 3 

function gloFunc() {
    "use strict";
    var x = 5, // if variable exist will be Global 
        y = x + 2;
    console.log(y) // local function // now will print 7 
}
gloFunc();
console.log("gloFunc func: " + x + 5) // gloFunc(); // now will print 6

// function in side function
var x = 1

function gloFun() {
    "use strict";
    var y = x + 2 // if variable exist will be Global 

    function child(){
        var z = 3, // local 
            v = x + z + 9;
        console.log("child func: " + v) // will print 1 + 3 + 9 

    }
    return child()
}

gloFun(); // If you called parent func now print 4
// console.log("i + x =  " + i + x)
//******************************************************** */
// Events Part 1 - onload, onclick, ondblclick , onkeydown, onkeypress, onkeyup
var myInput = document.getElementById("input"),
    myDiv = document.getElementById("chang"),
    myBtn = document.getElementById("btn")

myBtn.onclick = function(){
    "use strict";
    myDiv.innerHTML = myInput.value * 5;
}
// onkeyup
var myInput2 = document.getElementById("input2"),
    myDiv2 = document.getElementById("div")

myInput2.onkeyup = function(){
    "use strict";
    myDiv2.innerHTML = myInput2.value * 2;
}
// onkeydown
// var myInput3 = document.getElementById("input3"),
//     myDiv3 = document.getElementById("div")

// myInput3.onkeydown = function(){
//     "use strict";
//     myDiv3.innerHTML = myInput3.value * 3;
// }
// onkeypress
var myInput4 = document.getElementById("input4"),
    myDiv4 = document.getElementById("div")

myInput4.onkeydown = function(){
    "use strict";
    
    setTimeout(function(){
        alert("you have pressed")
    },1000); 
    
}
// onmouseover
var myHover = document.getElementById("onmouseover")

myHover.onmouseover = function(){
    "use strict";
    myHover.innerHTML = "You hoverd on me";
}
myHover.onmouseout = function(){
        "use strict";
        myHover.innerHTML = "You moved out";

}
var onChangeInput = document.getElementById("input-change"),
    onChangeDiv = document.getElementById("onchange"),
    selectChange = document.getElementById("currency")

    selectChange.onchange = function(){
    "use strict";
    onChangeDiv.innerHTML = (onChangeInput.value * selectChange.value).toFixed() + " EGP";
}

// function changeMeDbClick(){
//     document.getElementById("chanebg").innerHTML = "double click"
// }
// changeMeDbClick();
window.onload = function(){
    document.getElementById("reload").innerHTML = "The Page already loaded";
}
window.onclick = function(){
    document.getElementById("click").innerHTML = "You have clicked once";
}
window.ondblclick = function(){
    document.getElementById("dbclick").innerHTML = "You have clicked twice";
}



// ******************************************************************
var price = 500,

    firstDiscount = 40,
    secondDiscount = 80,
    thirdDiscount = 120
var arr = ["Price: ", "New Price after discount: "]

    document.getElementById("price").innerHTML =  arr[0] + price;
    document.getElementById("product1").innerHTML = arr[1] + (price - firstDiscount);
    document.getElementById("product2").innerHTML = arr[1] + (price - secondDiscount);
    document.getElementById("product3").innerHTML = "New Price after discount: " + (price - thirdDiscount);

// /* Datatype typeof: Array (typeof:object)/undefined/ Null(typeof: object) / NaN (not a number)/
//  Symbol/Boolean/String/Object/Number */
// ***************
 //1- Boolean: true / false 
// var discount = false;

// if (discount === true) {
//     var mainPrice = 350;
// }
// else{
//     var mainPrice = 450;
// }
// document.getElementById("boolean").innerHTML = mainPrice;
 // ********************************************
 // 2-Array
// var socialWeb = ["Facebook", "Linkedin"];

// document.getElementById("array").innerHTML = socialWeb[1]
 // *************************************************
 // Object = {}
// var personalInfo = {firstName: "Jack", lastName: "well"}

// document.getElementById("object").innerHTML = personalInfo.firstName +" "+ personalInfo.lastName
 // **************************************************
// String 
// var personalName = "Jack Well 'developer'"
// document.getElementById("string").innerHTML = personalName;
// ******************************************************
/// Number 
// var num = 33 + 33;
// document.getElementById("number").innerHTML = num;
// // ************************************************************************************
// // Concatenation : when you put string before numbers will printed as string
// var con = "33" + "33";
// var conArr = ["Number inside string + Number inside string = the first num the second num :'33' + '33' = "]
// document.getElementById("Concatenation").innerHTML = conArr + con; 

// var con2 = "My name's Jack well my age is " + "33";
// document.getElementById("Concatenation2").innerHTML = con2;

// var con3 = 4 + 5 +" " + "Jack" +" " +  "(numbers then string)";
// document.getElementById("Concatenation3").innerHTML = con3;

// var con4 = "Jack" +" " +  4 + 5 +" " +   "(string then number)";
// document.getElementById("Concatenation4").innerHTML = con4;

// var con5 = "Jack" +" " +  (4 + 5) +" " +   "('string' + (4 + 5 ))";
// document.getElementById("Concatenation5").innerHTML = con5;

// cashing function & Add New html tag with style 
// var concat = document.getElementById("Concatenation6");

// concat.innerHTML = "<span style=\"color:red\">MY Name Is Jack </span>";

 // NaN 
// var x = "Jack";
//     y = 50;
//     z = x - y;
// document.getElementById("nan").innerHTML = "string + number = " + " " +z;

// == comparison operator  compare the variable 
// === identical operator compare datatype & variable

// *******************************************************************
// ARRAY a special variable, which can hold more than one value:

var friends = ['Jack', 'well', 'Mark']

// array.length  how many array 
document.getElementById("length").innerHTML = friends.length
document.getElementById("length2").innerHTML = friends
console.log(friends.length) 

// array.push add array at the end of the array list
document.getElementById("push").innerHTML = friends.push("John")
document.getElementById("push2").innerHTML = friends

// array.unshift add array at the begging of the array list
document.getElementById("unshift").innerHTML = friends.unshift("Json")
document.getElementById("unshift2").innerHTML = friends

// array.join add any letter or symbol to the array list
document.getElementById("join").innerHTML = friends.join(" & ")
document.getElementById("join2").innerHTML = friends.length

// array.splice(index , how many 0(remove), item1(add), item2(add), item3(add))
document.getElementById("splice").innerHTML = friends.splice(1, 1, "Hussein", "Ahmed", "Mohamed")
document.getElementById("splice2").innerHTML = friends 

// array.pop remove the last  array from array list
document.getElementById("pop").innerHTML = friends.pop()
document.getElementById("pop2").innerHTML = friends  

// array.shift remove the fist  array from array list
document.getElementById("shift").innerHTML = friends.shift()
document.getElementById("shift2").innerHTML = friends 

// array.sort arrange array list from A to Z
document.getElementById("sort").innerHTML = friends.sort()
document.getElementById("sort2").innerHTML = friends 

// array.reverse arrange array list from Z to A
document.getElementById("reverse").innerHTML = friends.reverse()
document.getElementById("reverse2").innerHTML = friends 

/* array.slice will start the array list from specific number index and end number
slice(start, end)*/
// document.getElementById("slice2").innerHTML = friends 
document.getElementById("slice").innerHTML = friends.slice(1, 3)
document.getElementById("slice2").innerHTML = friends 

// array.concat combine array list with new array list
var workFriends = ["Heba", "Yuna", "noon"]
document.getElementById("concat1").innerHTML = "Array list : " + friends.join(" , ") 
document.getElementById("concat2").innerHTML = "New Array list : " + workFriends 
document.getElementById("concat3").innerHTML = friends.concat(workFriends).join(" , ")

// var myFriends = ['Jack', 'well', 'Mark']

/* array.indexOf search through array will print the number of the array 
we can add start index number to search from /
lastIndexOf will search from the end of the list*/
document.getElementById("indexof").innerHTML = friends.indexOf("Ahmed", 2);
document.getElementById("last").innerHTML = friends.lastIndexOf("Ahmed", 8);
console.log(friends.indexOf("Ahmed"))

// typeof check if array is array or not 
var sent1 = ["this is array"]

if (Array.isArray(sent1)){
    document.getElementById("check-type").innerHTML ="This is array"

}else{
    document.getElementById("check-type").innerHTML = "The Type of syntax is " + typeof sent2 
}

var sent2 = "this is array"

if (Array.isArray(sent2)){
    document.getElementById("check2-type").innerHTML ="This is array"

}else{
    document.getElementById("check2-type").innerHTML = "The Type of syntax is " + typeof sent2

}
console.log("The Type of syntax is " + typeof sent2)

// array.toString 
// array.toLocalString 
var myDate = new Date ();
document.getElementById("tostring").innerHTML = myDate.toString()
document.getElementById("local-string").innerHTML = myDate.toLocaleString() 
console.log(myDate.toLocaleString)




// **************************************************************************
// String  JavaScript strings are for storing and manipulating text/ is zero or more characters written inside quotes.

var cars = "Ford Mercedes Volvo BMW"

//string.length  how many string 
document.getElementById("string-length").innerHTML = cars.length
document.getElementById("string-length2").innerHTML = cars
console.log(cars.length) 

//string.split  splitting string,split(separator, limit)
document.getElementById("string-split").innerHTML = cars.split(" ")

//string.charCodeAt check the unicode of letter https://unicode-table.com/en/#006F
document.getElementById("string-charcode").innerHTML = "F unicode is : " + cars.charCodeAt(0)
document.getElementById("string-charcode2").innerHTML = "e unicode is : " + cars.charCodeAt(6)

//string.charAt(index) print letter
document.getElementById("string-char").innerHTML = "letter num 6 is: " + cars.charAt(6)
document.getElementById("string-char2").innerHTML = "letter num 7 is: " + cars.charAt(7) 
document.getElementById("string-char3").innerHTML =  cars.length+ " string letters - 1: " + cars.charAt(cars.length- 1)


//string.replace word with word 
document.getElementById("string-replace2").innerHTML = cars 
document.getElementById("string-replace").innerHTML = cars.replace("Ford", "Opel")
// /g will replace all choosing words or letter / i for sensitive letter/ m multi line search
document.getElementById("string-replace1").innerHTML = "Will \"replace\" all e with ^ -> " + cars.replace(/e/gim, " ^ ")
// Will change all letter except e letter.
document.getElementById("string-replace3").innerHTML = "Will change all letter except e letter.^ -> " + cars.replace(/[^e]/gi, " @ ") 
// Will a and e letters. range e-o
document.getElementById("string-replace4").innerHTML = "Will a and e letters. range e-o ^ -> " + cars.replace(/[e-o]/gi, " & ") 
// e+ e only / e{2} if repeated 2 times
document.getElementById("string-replace4").innerHTML = "e+ e only -> " + cars.replace(/e+/gi, " & ") 


//string.fromCharCode (num ,num, num, num) ->
document.getElementById("string-fromchar").innerHTML = String.fromCharCode(82, 97, 98, 97, 98)


//string.toLowerCase 
document.getElementById("string-lower").innerHTML = cars.toLowerCase()
document.getElementById("string-upper").innerHTML = cars.toUpperCase()
document.getElementById("string-upper2").innerHTML = "Hello".toUpperCase()

//string.trim remove space from the begging and the end
document.getElementById("string-trim2").innerHTML = "After: "+"    Welcome to the world   ".trim()
console.log("before: "+"                 Welcome to the world   ")
console.log("After: "+"    Welcome to the world   ".trim())


/* string.slice (start, end) will start the string list from specific number index and end number
slice(start, end)*/
document.getElementById("string-slice2").innerHTML = cars 
document.getElementById("string-slice").innerHTML = "14 index: " + cars.slice(5, 14)

/* string.substr (start, length) will start the string list from specific number index and end number
substr(start, how many letter )*/
document.getElementById("string-substr2").innerHTML = cars 
document.getElementById("string-substr").innerHTML = "14 index: " + cars.substr(5, 14)
document.getElementById("string-substr3").innerHTML = "13 index: " + cars.substr(5, 13)

/* string.substring (start, length) will start the array list from specific number index and end number
substr(start, how many letter )
slice vs substring: will swap the small and large number if (19, 7) will act like (7, 19)
but slice will not swap it.  */
document.getElementById("string-substring").innerHTML = "14 index: " + cars.substring(5, 14)


//string.concat combine array list with new string list
var workCars = "I love " 
document.getElementById("string-concat3").innerHTML = workCars.concat(cars + " Dodg")


/* string.indexOf search through string will print the number of the array 
we can add start index number to search from /
lastIndexOf will search from the end of the list*/
document.getElementById("string-indexof").innerHTML = cars.indexOf("BMW", 2);
document.getElementById("string-last").innerHTML = cars.lastIndexOf("BMW", 50);
console.log(cars.indexOf("BMW"))

// any type.toString 
// any type.toLocalString 
var num = 100
var newNum = String(num)
document.getElementById("string-tostring").innerHTML = num.toString()
document.getElementById("string-local-string").innerHTML = typeof(newNum) 
document.getElementById("string-string").innerHTML = "Another method to check the typeof = " + typeof String(num) 


// ************************************************************************
// for...loop 
// i++ = i = i + 1  
// var i = 0 0 mean start from first index
for(var i = 1; i <= 10; i++){
    document.getElementById("loop").innerHTML = i
    console.log(i)
}

for(var i = 20; i >= 1; i--){
    document.getElementById("loop2").innerHTML = i
    console.log(i)
}

var friend = ["John", "Well", "Mark", "Shun"]
for(var i = 0; i < friend.length; i++){
    document.getElementById("loop3").innerHTML = friend[i]
    console.log(friend[i])
}

// Advanced Loop years loop
var i = 0;
for (;;){
    if (i > 20) break;
    console.log("this is Advanced loop: "+ i)
    i++
}


function generateYears(start, end) {
    "use strict";
    var years;

    document.write("<select>");
    
    for (years = start; years <= end; years++){
        document.write("<option value=\"" + years + "\">" + years + "</option>");
    }
    document.write("</select>")
}
generateYears(1900, 2022);
generateYears(2000, 2022);


// for.in loop
var myCar = {
    color: "Red",
    model: "2022", 
    type: "Dodg",
    price: "100,000$"

}

for (var prop in myCar){
    if (myCar.hasOwnProperty(prop)){
    document.getElementById("loopin").innerHTML = prop + ": " + myCar[prop];
    console.log(prop + ": " + myCar[prop])
}}

// while loop  
var i = 0;
while (i <= 20) {
    console.log("this is while loop: "+ i)
    i++
}
function generateYears(start, end) {
    "use strict";
    var years = start

    document.write("<select>");
    
    while ( years <= end){
        document.write("<option value=\"" + years + "\">" + years + "</option>");

        years++
    }
    document.write("</select>")
}
generateYears(1900, 2022);
generateYears(2000, 2022);



// do while loop  
// condition happening at the end 
var i = 0;
do {
    console.log("this is while loop: "+ i)
    i++
}while (i <= 20) 

function generateYears(start, end) {
    "use strict";
    var years = start

    document.write("<select>");
    
    do {
        document.write("<option value=\"" + years + "\">" + years + "</option>");

        years++
    } while ( years <= end)
    document.write("</select>")
} 
generateYears(1900, 2022);
generateYears(2000, 2022);


// Loop - Control - Break, Continue, Label

for (var i = 0; i < 10 ; i++){
    if (i === 4){
    continue; // will not stop till 4 will continue
}
console.log("continue "+i)
}

for (var i = 0; i <= 5 ; i++){

    for (var x = 10; x <= 20; x++){
    if (x === 13){
    
        break; 
} 
console.log(i + " > " + x)
}
}

// Math - Ceil print 5/ work like toFixed() but for the bigger/ Returns x rounded up to its nearest integer. 
var x = Math.ceil(4.9999)
document.getElementById("math").innerHTML = x

// Math - floor print 4 / work like toFixed() less the .5 Returns x rounded down to its nearest integer 
var x = Math.floor(4.9999)
document.getElementById("math2").innerHTML = x

// Math - round print 5 /work like toFixed() to  
var x = Math.round(4.5)
document.getElementById("math3").innerHTML ="4.5 > " + x
var z = Math.round(4.4999)
document.getElementById("math4").innerHTML = "4.49999 > " + z

// Math - min / max
var x = Math.min(100, 200, 300, -400)
document.getElementById("math5").innerHTML ="(100, 200, 300, -400)> " + x
var z = Math.max(100, 200, 300, -400)
document.getElementById("math6").innerHTML = "(100, 200, 300, -400) > " + z


document.getElementById("math7").innerHTML =
Math.ceil(Math.round(x) + 10.5)

// Math - random 
// var x = Math.random()
document.getElementById("math8").innerHTML = (Math.floor((Math.random() * 1 ) + 10))

// ******************************************************
// Date 
var newDate = new Date();
document.getElementById("date").innerHTML = newDate
document.getElementById("date1").innerHTML = new Date("1999-09-22")
// document.getElementById("date1").innerHTML = new Date(1999-09-22)
//Get Day
var newDate = new Date("09 April 2022");

document.getElementById("date2").innerHTML = newDate.getDay();
//Get Month
document.getElementById("date3").innerHTML = newDate.getMonth()
//Get Year
document.getElementById("date4").innerHTML = newDate.getFullYear()

// ******************************************************
// Number
document.getElementById("num").innerHTML = (10).toExponential()
console.log((10).toExponential())
document.getElementById("num2").innerHTML = (10.677543).toFixed(1)
// parseInt parse integer take off the number form string 
document.getElementById("num3").innerHTML = parseInt("331 hello world")