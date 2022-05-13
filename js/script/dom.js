/*global console*/
// learn javascript
// http://help.dottoro.com/ljxevnps.php
// https://www.w3schools.com/jsref/


/*  document.getElementsByTagName() not compatible IE 8
    document.getElementsById('')
    document.getElementsByClassName('')
    document.querySelectorAll('')
    document.querySelector('. ') / ("# ")*/
// var howManyDiv = document.getElementsByTagName("div")

// console.log(howManyDiv.length)
// howManyDiv[2].innerHTML = 'This is getElementsByTagName'

/*  document.title
    document.images
    document.forms
    document.body
    document.anchors  how many a
    document.links    how many href
    */
// ***************************************************************
// document.images
// document.images convert images from inline block to block 
var imgQuery = document.getElementById('img'),

    i;

for (i = 0;  document.images.length < 5; i++) {
    document.write(document.images[i].src + '<br>');
}
// ***************************************************************

//document.forms
// var formQuery = document.getElementById('form')
// formQuery.innerText = document.forms[1].z1.type; // print form type 
// var formsQuery = document.getElementById('form2')
// formsQuery.innerText = document.forms[0].x1.value; // print form value 

// ***************************************************************

//document.body
var bodyQuery = document.getElementById('body')
// bodyQuery.innerText = document.body.innerHTML;
bodyQuery.innerText = document.body.innerText;
if (document.body.innerText.indexOf("document")> -1){    // check if text exist in body or not
    bodyQuery.innerHTML = "this is exist" 
}else{
    bodyQuery.innerHTML = "this is not exist"
}

// ***************************************************************

// document.anchors
var anchorsQuery = document.getElementById('anchors')
document.innerText = document.anchors.length


// *******************************************************************
// innerText  not standard
// outerText  not standard
// innerHTML  get all text and tags at html file
// outerHTML
// textContent get text only
// *************************************************

// var myImg = document.querySelector("img")
// console.log(myAttr)
// Elements.attribute
// myImg.src = "../assist/dog.jpg";
// myImg.alt = "dog";
// myImg.className = "dog";
// ***************************************************

// Elements - GetAttribute, SetAttribute
var myImge = document.getElementById("imag")
    myImge.getAttribute("src")
    myImge.style.width = "100px"
    myImge.style.height = "100px"
myImge.setAttribute("src", "./assist/dog.jpg")
myImge.setAttribute("alt", "dog")
// *************************************************

// Elements - HasAttribute, RemoveAttribute
var myImg = document.getElementById("image")
if(myImg.hasAttribute("src")){
    myImg.removeAttribute("src"),
    myImg.setAttribute("src", "./assist/ford.jpg")
    
}else{
    console.log("Already has \"src\" attribute")
}
// -----------------------------------------------------------
// setAttribute
if (myImg.alt === "" && myImg.src === ""){
    myImg.setAttribute("src", "../assist/dog.jpg" )
    myImg.setAttribute("alt","dog")
    console.log(myImg)

}else{
    console.log("Already has src & alt attribute")
}
// -----------------------------------------------------------

// hasAttribute
if (myImg.hasAttribute("alt") ){
    if (myImg.alt === ""){
    myImg.removeAttribute("alt");
    console.log(myImg)
}
}
// *********************************************************

// Elements - ClassList [ Item, Contains, Length ]


let classQuery = document.getElementById("list")


if (classQuery.classList.contains("active")){
    console.log(classQuery.classList.item(2) , "Yes it's has active class")
}else{
    classQuery.setAttribute("class", "active")
}
// ----------------------------------------------------
let classQuery2 = document.getElementById("list2")
if (classQuery2.classList.contains("active")){
    console.log(classQuery.classList.item(2) , "Yes it's has active class")
}else{
    classQuery2.setAttribute("class", "active show contain")
    console.log(classQuery2.classList.item(0))
}
// --------------------------------------------------------
let classQuery3 = document.getElementById("list3")
if (classQuery3.classList.contains("active")){
    console.log(classQuery3.classList.length , "classQuery3 Yes it's has active class")
}else{
    classQuery3.className += " active"
    console.log(classQuery3.classList.length)
}
// **********************************************************
// Elements - ClassList [ Add, Remove, Toggle ]

//Add class
var divQueries = document.getElementById("add")
var btnAdd = document.getElementById("add-class")
var btnRemove = document.getElementById("remove-class")
var btnToggle = document.getElementById("toggle-class")

btnAdd.onclick = function(){
    "use strict";
    divQueries.classList.add('js', 'html', 'css')
    
}
//remove class
btnRemove.onclick = function(){
    "use strict";
    divQueries.classList.remove("html")
    
}
// ------------------------------------------------
//Toggle add class if not exist or remove class if exist
btnToggle.onclick = function(){
    "use strict";
    divQueries.classList.toggle("html")
    
}
// --------------------------------------------
// show and hide text using toggle class
var text = document.getElementById("text-sh-hi"),
    toggleBtn = document.getElementById("toggle-btn-sh-hi")

toggleBtn.onclick = function(){
    "use strict";
    text.classList.toggle("visible")
}
// **********************************************************
//Node may be a text, element , comment , attribute

// Elements - Children - ChildNodes

var articleElement = document.getElementById("example")
console.log(articleElement.children)
console.log(articleElement.children[6].classList)
console.log(articleElement.children[4].textContent)
console.log(articleElement.children.length)
console.log(articleElement.childNodes)

// *****************************************************
// Elements - Children - First & Last Child [ Element ]

var articleElement = document.getElementById("example")
console.log(articleElement.firstChild) // == childNodes[0]
console.log(articleElement.firstElementChild)
console.log(articleElement.lastChild)
console.log(articleElement.lastElementChild)

// *****************************************************
// Elements - Children - Append Child

var articleElement = document.getElementById("example"),

    //create new div
    createNewElement = document.createElement("div");

    // append the new div to the main article
    articleElement.appendChild(createNewElement)

    // create text to the div using textContent or createTextNode
    // createNewElement.textContent = "This is a New Div element " or
    divText = document.createTextNode("This is a New Div Element")
    createNewElement.appendChild(divText)

    //create button 
var createBtn = document.createElement("button");

    //append the new button to the main article
    articleElement.appendChild(createBtn)

    //append the text to the button
    // createBtn.textContent = "Toggle Button" or
    btnText = document.createTextNode("Toggle button")
    createBtn.appendChild(btnText)

    //hide and show the div text through the button
    createBtn.onclick = function(){
    "use strict";
    createNewElement.classList.toggle("hidden")
}
// ************************************************
// Elements - Children - Insert Before
// move the new created div before the text node end 
articleElement.insertBefore(createNewElement , articleElement.childNodes[33])
// move the new created toggle button before the text node end
articleElement.insertBefore(createBtn, articleElement.childNodes[34])

// *****************************************************

// Elements - Children - Remove Child
// removing end text of the childNodes list
articleElement.removeChild(articleElement.childNodes[35])
// removing welcome text which is the firstChild at the article
articleElement.removeChild(articleElement.firstChild)
console.log(articleElement.childNodes)

// ****************************************************
// Elements - Node [ Name, Value, Type ]
console.log(articleElement.childNodes[33].nodeName) //  button
console.log(articleElement.childNodes[33].tagName) //  button
console.log(articleElement.childNodes[33].nodeValue) // null
console.log(articleElement.childNodes[33].type) // submit


// **************************************************************
// Elements - Clone Node to copy the element and the contents to another element
var divNode = document.getElementById("clone"),
    divCloneNode = document.getElementById("clone-node"),
    // true: will copy the content text / false: will copy the tag, class and id only
    // clone the node and save it in variable
    myCopy = divNode.firstElementChild.cloneNode(true); 
    divCloneNode.appendChild(myCopy)

console.log(myCopy)

// **********************************************************
// Elements - Parent Element / Parent Node
hideBtn = articleElement.lastElementChild
console.log(hideBtn)

hideBtn.onclick = function() {
    "use strict";
    this.parentNode.style.color = "red";
    // this.parentNode.style.display = "none";
}
console.log(articleElement.parentElement)
// ------------------------------------------------------------

if (articleElement.parentElement.tagName === "BODY") {
    console.log("this element has no parent only Body")
}else{
    console.log(articleElement.parentElement)
}

if (hideBtn.parentElement.tagName === "BODY") {
    console.log("this element has no parent only Body")
}else{
    console.log(hideBtn.parentElement)
}

// ****************************************************
// Elements - Next, Previous Sibling
console.log(articleElement.childNodes[8].childNodes[0].nextElementSibling.tagName) // h1
console.log(articleElement.childNodes[8].childNodes[0].nextElementSibling.textContent)
 // document.anchors
 // change the text of the nextElementSibling
articleElement.childNodes[8].childNodes[0].nextElementSibling.textContent = "Change to Document anchor"
console.log(articleElement.childNodes[8].childNodes[2].previousElementSibling.textContent) // 

// ****************************************************************

// Elements - Focus, Blur
window.onload = function() {
    "use strict";
    document.getElementById("focus").focus();
};
// document.querySelector('focus-btn').onclick = function() {
//     "use strict";
//     document.getElementById("focus").blur();
// }
//or click into the input to remove the focus
document.getElementById('focus').onclick = function() {
    "use strict";
    this.blur();
}
// ************************************************************

// Elements - Click
/*create button in order to change background color of parentElement 
and make this happen automatically after 2s using window.onload func*/
var createNewBtn = document.createElement("button"),
    createTextBtn = document.createTextNode("Change parent Element Style")

    articleElement.appendChild(createNewBtn)
    createNewBtn.appendChild(createTextBtn);

createNewBtn.onclick = function() {
    "use strict";

    this.parentElement.style.background = "red";
}
// Automatic style change
window.onload = function() {
    "use strict";

    setTimeout(function() {
        createNewBtn.click();
    }, 2000)
}

// **********************************************************************

// Elements - Add Event Listener
// create new div contain 2 div and 2 button 
var createDiv1 = document.createElement("div"),
    createDiv2 = document.createElement("div")
    //append the new div to the parentElement
    articleElement.appendChild(createDiv1);
    articleElement.appendChild(createDiv2);
// create text node for div1 & 2
var createTextNodeDiv1 = document.createTextNode('Monster1'),
    createTextNodeDiv2 = document.createTextNode('Monster2')
    //append text node to their div
    createDiv1.appendChild(createTextNodeDiv1);
    createDiv2.appendChild(createTextNodeDiv2);
//create buttons
var createBtnMon = document.createElement("button"),
    createBtnPower = document.createElement("button")
    //append the new button to the parentElement
    articleElement.appendChild(createBtnMon);
    articleElement.appendChild(createBtnPower);
// create text node for button
var createBtnTextMon = document.createTextNode("Eat Monster"),
    createBtnTextPow = document.createTextNode("Power up")
     //append text node to their div
    createBtnMon.appendChild(createBtnTextMon);
    createBtnPower.appendChild(createBtnTextPow);
// set id attribute to the elements 
createDiv1.setAttribute("id", 'monster1')
createDiv2.setAttribute("id", 'monster2')
createBtnMon.setAttribute("id", 'main')
createBtnPower.setAttribute("id", 'power')

// create function for power button
function MakePower() {
    "use strict";
    document.getElementById("monster2").style.display = "none";
}
var createBtnTextMon = document.getElementById("main"),
    createBtnTextPow = document.getElementById("power")

createBtnMon.onclick = function() {
    "use strict";

    document.getElementById('monster1').style.display = "none";
};
createBtnPower.onclick = function() {
    "use strict";
    createBtnMon.addEventListener("click", MakePower)
}

// ***********************************************************************

// Elements - Contains
var getDivId = document.getElementById("new-div")
    getPrag = document.getElementById("child")
    console.log(getDivId.children[0])

if(getDivId.contains(getPrag)){
    console.log("Yes it's have")
}else{
    getDivId.children[0].setAttribute("id", "child")

}
// ***********************************************************************

// Elements - Client [ Height, Width ]
/*show the viewable area including padding
exclude border , margin, scroll */
var cloneDivId = document.getElementById("c-n")
    console.log(cloneDivId.clientHeight + "px")

// ***********************************************************************
// Elements - Scroll [ Height, Width ]
/*show the viewable area including visible area including padding
exclude border , margin */
console.log( "scrollHeight: " + cloneDivId.scrollHeight + " px")
// ***********************************************************************

// Offset [ Height, Width ]
/*show the viewable area including padding,border and scroll area
exclude margin */
console.log( "offsetheight: " + cloneDivId.offsetHeight + " px")
// *************************************************************************
/*show the viewable area including padding,border and scroll area
exclude margin */
// Elements - Scroll [ Top, Left ]
articleElement.onclick = function() {
    "use strict";
    document.scrollingElement.scrollTop += 100;
    console.log(document.scrollingElement.scrollTop)
    if (document.scrollingElement.scrollTop >= 1000){
        this.classList.add("active")

    }
}
// **************************************************************************
// Elements - Client [ Top, Left ]
/*print border size from left and top & scroll top and left */
console.log( "Left Border width 30px + left scroll 15px -> clientLeft: " + cloneDivId.clientLeft + " px")
console.log( "Top Border width -> clientTop: " + cloneDivId.clientTop + " px")

// ****************************************************************************

// Elements - Style
//Element.style.property = value
cloneDivId.style.backgroundColor = "green"
articleElement.childNodes[0].style.marginBottom = "20px"
articleElement.children[1].style.backgroundColor = "blue"
articleElement.children[2].style.fontSize = "30px"
articleElement.children[3].style.padding = "20px"
articleElement.children[4].style.color = "aqua"
console.log(articleElement.childNodes)

// *****************************************************************************
// Document - InputEncoding, LastModified, Url
console.log(document.inputEncoding) //print : UTF-8
//last update on html page through js or css file
console.log(document.LastModified) // print: date and time of last modified
// URL : uniform resource locator
console.log(document.URL) // print: page url file:///home/hr/1%20UDACITY%20Courses/3%20Full%20Stack%20cource/1%20HTML/HTML5/dom.html?#
// ***************************************************************************

// Document - Create [ Element, Text, Comment ]
// Create new div and append it to the document
var newDomDiv = document.createElement("div")
    document.body.appendChild(newDomDiv)
//Create comment and append it to the div
var createComment = document.createComment("Create  Element, Text & Comment then append it to document")
newDomDiv.appendChild(createComment)
// Add text to the div 
var divText = document.createTextNode   ("This new div append to document.body")
newDomDiv.appendChild(divText)
newDomDiv.style.backgroundColor = "yellow"
newDomDiv.style.padding = "20px"
newDomDiv.style.border = "7px solid orange"

// ****************************************************************

// Document - Create Attribute
// create attribute id and class to the last created div
var createIdAtrr = document.createAttribute("id")
    createIdAtrr.value = "dom-divs"
    newDomDiv.setAttributeNode(createIdAtrr)
// create class attribute
var createClassAtrr = document.createAttribute("class")
    createClassAtrr.value = "dom-div"
    newDomDiv.setAttributeNode(createClassAtrr)
// create Title attribute
var createTitleAtrr = document.createAttribute("title")
    createTitleAtrr.value = "dom-title"
    newDomDiv.setAttributeNode(createTitleAtrr)

// *****************************************************************

// Events - How To Write All Methods
var events = document.getElementById("change-color")

// 1-
// function changeColor(){
//     "use strict";

//     events.style.color = "green"
//     events.style.fontSize = "30px"
// }
// ----------------------------
// 2-
// var bttn = document.getElementById("bttn")

// bttn.onclick = function(){
//     "use strict";
    
//     events.style.color = "green"
//     events.style.fontSize = "30px"

// }
// ---------------------------
// 3-
// function changeColor(){
//     "use strict";

//     events.style.color = "green"
//     events.style.fontSize = "30px"
// }
// bttn.onclick = changeColor
// -----------------------------
// 4-
function changeColor(){
    "use strict";

    events.style.color = "green"
    events.style.fontSize = "30px"
}
document.getElementById("bttn").onclick = changeColor

// ****************************************************************

// Events - Onload, Onscroll, Onresize

// Onload
window.onload = function() {
    "use strict";

    console.log("DOM is Ready")
}

// Onscroll
window.onscroll = function() {
    "use strict";

    console.log("You are scrolling now")


}

// Onresize
window.onresize = function() {
    "use strict";
    articleElement.style.backgroundColor = "black"
    articleElement.style.color = "white"
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    console.log("Your window is now resized")
}

// **********************************************************

// Events - Onfocus, OnBlur, OnSubmit

//Onfocus
var onFocusForm = document.getElementById("m-form"),
    note = document.getElementById("note"),
    newInput = document.getElementById("input-fo")

newInput.onfocus = function() {
    "use strict";
    note.textContent = "Please Write Strong Password"
}
newInput.onblur = function() {
    "use strict";

    note.textContent = "";

    if (newInput.value.length < 10) {
        console.log("it's exceeded 10 characters")
        note.textContent = "Letter must be at least 10 characters"
    }else{
        console.log("it's okay")
    }
}
newInput.onsubmit = function(e) {
    "use strict";
    e.preventDefault();
    if (newInput.value.length < 10) {
        // console.log("it's exceeded 10 characters")
        note.textContent = "Letter must be at least 10 characters"
    }
    
}

// ******************************************************************

// Events - OnClick, OnDblClick, OnMousEnter
//OnClick
var eve = document.getElementById("dom-divs")
eve.onclick = function(){
    "use strict";
    
    eve.style.backgroundColor = "green"
    eve.style.fontSize = "30px"

}
// OnDblClick
eve.ondblclick = function(){
    "use strict";
    
    eve.style.backgroundColor = "blue"
    eve.style.color = "white"
    eve.style.fontSize = "40px"

}
//oncontextmenu
var noteDomQuery = document.getElementById("note2")
eve.oncontextmenu = function(e){
    "use strict";
    e.preventDefault();
    console.log("You can't right click here")
    noteDomQuery.textContent = "You can't right click here"

}
//OnMousEnter

eve.onmouseenter = function(){
    "use strict";

    noteDomQuery.textContent = "You hovered the mouse here"

}
eve.onmouseleave = function(){
    "use strict";

    noteDomQuery.textContent = "You moved out"

}
// *********************************************************************

// Events - OnKey [ Up, Down, Press ]
//OnKeyup
newInput.onkeyup = function() {
    "use strict";
    note.textContent = this.value // will print what we will write into the input


}

// *****************************************************