/*show the viewable area including padding,border and scroll area
exclude margin */
// Elements - Scroll [ Top, Left ]
var myMain = document.getElementById("main")
myMain.onclick = function() {
    "use strict";
    document.scrollingElement.scrollTop += 100;
    console.log(document.scrollingElement.scrollTop)

    if (document.scrollingElement.scrollTop >= 2000){
        this.classList.add("active")

    }else {
        console.log("not working")
    }
}


// var myMain = document.getElementById('main');
// var number = 0;

// myMain.onclick = function () {
    
//        'use strict';
    
//         number += 100;
//         window.scrollTo(0, number);
    
//         console.log(window.scrollY);
//     };