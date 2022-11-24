

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
var deOptie2 = document.querySelector("main section:nth-of-type(2) ul li:nth-of-type(2) button ");

// menu-button luistert naar klik en voert dan een functie uit
deOptie2.addEventListener("click", toggleOptieTwee);

// Nieuwe functie toggleMenu 
function toggleOptieTwee() {  
  // nav opgeslagen als variabelen
  var extraInfoTwee = document.querySelector("main section:nth-of-type(2) ul li:nth-of-type(2) p");
  // nav krijgt class toonMenu
  extraInfoTwee.classList.toggle("toonTekst2");
}


/*FEEST/BORREL*/

// menu button opgeslagen als variabelen deButton
var deOptie3 = document.querySelector("main section:nth-of-type(2) ul li:nth-of-type(3) button ");

// menu-button luistert naar klik en voert dan een functie uit
deOptie3.addEventListener("click", toggleOptie3);

// Nieuwe functie toggleMenu 
function toggleOptie3() {  
  // nav opgeslagen als variabelen
  var extraInfo3 = document.querySelector("main section:nth-of-type(2) ul li:nth-of-type(3) p");
  // nav krijgt class toonMenu
  extraInfo3.classList.toggle("toonTekst3");
}


/*KINDERFEESTJE*/
// menu button opgeslagen als variabelen deButton
var deOptie4 = document.querySelector("main section:nth-of-type(2) ul li:nth-of-type(4) button ");

// menu-button luistert naar klik en voert dan een functie uit
deOptie4.addEventListener("click", toggleOptie4);

// Nieuwe functie toggleMenu 
function toggleOptie4() {  
  // nav opgeslagen als variabelen
  var extraInfo4 = document.querySelector("main section:nth-of-type(2) ul li:nth-of-type(4) p");
  // nav krijgt class toonMenu
  extraInfo4.classList.toggle("toonTekst4");
}


/*FILMVIEWING*/
// menu button opgeslagen als variabelen deButton
var deOptie5 = document.querySelector("main section:nth-of-type(2) ul li:nth-of-type(5) button ");

// menu-button luistert naar klik en voert dan een functie uit
deOptie5.addEventListener("click", toggleOptie5);

// Nieuwe functie toggleMenu 
function toggleOptie5() {  
  // nav opgeslagen als variabelen
  var extraInfo5 = document.querySelector("main section:nth-of-type(2) ul li:nth-of-type(5) p");
  // nav krijgt class toonMenu
  extraInfo5.classList.toggle("toonTekst5");
}


/*DCP-CHECK*/
// menu button opgeslagen als variabelen deButton
var deOptie6 = document.querySelector("main section:nth-of-type(2) ul li:nth-of-type(6) button ");

// menu-button luistert naar klik en voert dan een functie uit
deOptie6.addEventListener("click", toggleOptie6);

// Nieuwe functie toggleMenu 
function toggleOptie6() {  
  // nav opgeslagen als variabelen
  var extraInfo6 = document.querySelector("main section:nth-of-type(2) ul li:nth-of-type(6) p");
  // nav krijgt class toonMenu
  extraInfo6.classList.toggle("toonTekst6");
}