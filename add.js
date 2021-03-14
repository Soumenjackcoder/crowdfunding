const bookmarked = document.getElementById("bookmarked");
const bookmarkedMobile = document.getElementById("bookmarkedMobile");
const thankBox = document.getElementById("thankbox");
const gotIt = document.getElementById("gotit");



// Checkbox script
var customcb1 = document.getElementById("customcb1");
var customcb2 = document.getElementById("customcb2");
var customcb3 = document.getElementById("customcb3");
var customcb4 = document.getElementById("customcb4");

// Card price script
const cardPrice1 = document.getElementById("card-price1");
const cardPrice2 = document.getElementById("card-price2");
const cardPrice3 = document.getElementById("card-price3");
const cardPrice4 = document.getElementById("card-price4");

// projectCard border add script
const projectCard1 = document.getElementById("projectCard1");
const projectCard2 = document.getElementById("projectCard2");
const projectCard3 = document.getElementById("projectCard3");
const projectCard4 = document.getElementById("projectCard4");

// Check box function start
function myFunction1() {
    if (customcb1.checked == true){
        cardPrice1.style.display = "flex";
        projectCard1.style.borderColor = "hsl(176, 50%, 47%)";
    } else {
        cardPrice1.style.display = "none";
        projectCard1.style.borderColor = "#ddd";
    }
}

function myFunction2() {
    if (customcb2.checked == true){
        cardPrice2.style.display = "flex";
        projectCard2.style.borderColor = "hsl(176, 50%, 47%)";
    } else {
        cardPrice2.style.display = "none";
        projectCard2.style.borderColor = "#ddd";
    }
}

function myFunction3() {
    if (customcb3.checked == true){
        cardPrice3.style.display = "flex";
        projectCard3.style.borderColor = "hsl(176, 50%, 47%)";
    } else {
        cardPrice3.style.display = "none";
        projectCard3.style.borderColor = "#ddd";
    }
}

function myFunction4() {
    if (customcb4.checked == true){
        cardPrice4.style.display = "flex";
        projectCard4.style.borderColor = "hsl(176, 50%, 47%)";
    } else {
        cardPrice4.style.display = "none";
        projectCard4.style.borderColor = "#ddd";
    }
}

// Check box function end

// Thanks box script and function start
bookmarked.onclick = function() {
    thankBox.style.display = "block";
}

bookmarkedMobile.onclick= function() {
    thankBox.style.display = "block";
}

gotIt.onclick = function() {
    thankBox.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == thankBox) {
        thankBox.style.display = "none";
    } else if(event.target == projectModalBox) {
        projectModalBox.style.display = "none";
    }
}
// Thanks box script and function end
 
// Project Modal box

const close = document.getElementById("close");
const projectModalBox = document.getElementById("projectModalBox");
const backThisPorject = document.getElementById("backThisPorject");

backThisPorject.onclick = function() {
    projectModalBox.style.display = "block";
}

close.onclick = function() {
    projectModalBox.style.display = "none";
}

// Manu bar trigger

const navBurger = function() {
    const burger = document.getElementById("burgerMenu");
    const navLinks = document.getElementById("navLinks");

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("nav-links-active")
        navLinks.classList.remove("nav-links");
    })
}

navBurger();