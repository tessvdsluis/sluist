// JavaScript Document
console.log("hi");

/******************************/
/* menu openen & sluiten de MENU button */
/******************************/

// menu button opgeslagen als variabelen deButton
var deButton = document.querySelector("header button");

// menu-button luistert naar klik en voert dan een functie uit
deButton.addEventListener("click", toggleMenu);

// Nieuwe functie toggleMenu 
function toggleMenu() {  
  // nav opgeslagen als variabelen
  var deNav = document.querySelector("nav");
  // nav krijgt class toonMenu
  deNav.classList.toggle("toonMenu");
}







