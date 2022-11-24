

/****************************************/
/* menu openen & sluiten de MENU button */
/***************************************/

//bron: codepen Sanne 

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



/******************************/
/* opties openen & sluiten */
/******************************/


/*OPEN*/
// menu button opgeslagen als variabelen deButton
var deOptie = document.querySelector("main section:nth-of-type(2) ul li:nth-of-type(1) button");

// menu-button luistert naar klik en voert dan een functie uit
deOptie.addEventListener("click", toggleOptie);
extraInfo.classList("open")

// Nieuwe functie toggleMenu 
function toggleOptie() {  
  // nav opgeslagen als variabelen
  var extraInfo = document.querySelector("main section:nth-of-type(2) ul li:nth-of-type(1) p");
  // nav krijgt class toonMenu
  extraInfo.classList.toggle("toonTekst1");
}


/*VERGADERING*/
// menu button opgeslagen als variabelen deButton
// var deOptie2 = document.querySelector("main section:nth-of-type(2) ul li:nth-of-type(2) button");

// // menu-button luistert naar klik en voert dan een functie uit
// deOptie2.addEventListener("click", toggleOptieTwee);
// extraInfoTwee.classList("open")

// // Nieuwe functie toggleMenu 
// function toggleOptieTwee() {  
//   // nav opgeslagen als variabelen
//   var extraInfoTwee = document.querySelector("main section:nth-of-type(2) ul li:nth-of-type(2) p");
//   // nav krijgt class toonMenu
//   extraInfoTwee.classList.toggle("toonTekst2");



