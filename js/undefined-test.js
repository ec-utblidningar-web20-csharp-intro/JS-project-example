"use strict";
// Innan  <body> har laddats klart.

// Alla properties som ett objekt _inte_ innehåller
// får automatiskt värdet undefined

let obj = {
  name: "ball",
  size: 3.5,
};
console.log("What is obj.name? " + typeof obj.name);

//..

// stavar fel
console.log("What is obj.Name? " + typeof obj.Name);

// Vi kan testa om en property finns
console.log("Does obj.Name exist? " + obj.Name === undefined);

/*
  Detta är bra när vi tex i svar från web-api:er kan
  få olika JSON objekt skickade tillbaka.
*/
function requestData(didFail = false) {
  if (didFail) {
    return {
      error: "Big error",
      errorDescription: "Skicka inte med 'true' för då blir det såhär",
    };
  } else {
    return {
      data: "Much data",
      size: 9,
    };
  }
}

// När saker går bra så kan svarsobjektet se ut på ett sätt
const response = requestData();
//const response = requestData(true);

/* 
  'undefined' kan hjälpa oss att skriva kod som hanterar
  olika objekt enkelt.
*/
if (response.error !== undefined) {
  // Något gick fel
  console.log(`Error:${response.error} Message:${response.errorDescription}`);
} else {
  // Om allt gick bra
  console.log(`Size:${response.size} Data:${response.data}`);
}
/*
  Det finns två andra operatorer '?' och  '??' som
  bygger vidare på idén om att använda 'undefined'
  för att reagera på en mängd situationer på ett
  kortfattat sätt
*/

// undefined i DOM
document.addEventListener("DOMContentLoaded", function () {
  // När <body> har laddats klart.
});

console.log("================================");
