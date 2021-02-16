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
      error: {
        type: "Big error",
        description: "Skicka inte med 'true' för då blir det såhär",
      },
      size: 0,
    };
  } else {
    return {
      data: "Much data",
      size: 9,
    };
  }
}

// När saker går bra så kan svarsobjektet se ut på ett sätt
//const response = requestData();
const response = requestData(true);

/* 
  'undefined' kan hjälpa oss att skriva kod som hanterar
  olika objekt enkelt.
*/
if (response.error !== undefined) {
  // Något gick fel
  console.log(
    `Error:${response.error.type} Message:${response.error.description}`
  );
} else {
  // Om allt gick bra
  console.log(`Size:${response.size} Data:${response.data}`);
}
/*
  https://javascript.info/optional-chaining

  Det finns två andra operatorer '?' och  '??' som
  bygger vidare på idén om att använda 'undefined'
  för att reagera på en mängd situationer på ett
  kortfattat sätt

  enskilt frågetecken '?' reagerar på null/undefined
  och om det innan frågetecknet skulle vara null/undefined
  så avbryts allt och hela uttrycket blir till undefined

  '??' stoppar in ett default värde från höger om
  det till vänster skulle vara undefined

  De används ofta tillsammans. 
*/
let status = "Request status\n";
status += response.error?.type ?? "no error";
console.log(status);

let myData = response.data ?? null;

// I stället för detta kan man skriva
if (document.querySelector("main") !== null) {
  document.querySelector("main").remove();
}
// såhär
document.querySelector("main")?.remove();
/* 
   Alltså "om vi hittade ett objekt ta bort det, 
   annars gör ingenting"
*/

/*
  Vanliga gotcha:s i JavaScript!!

  Funktioner som inte returnerar någonting
  ger ändå tillbaka 'undefined'
*/

function add(a, b) {
  a + b;
  // om man glömmer return så får vi 'undefined'
}
console.log("Summan av 5 + 6 är " + add(5, 6));

function sub(a, b) {
  // om man glömmer att skicka med en parameter
  // så blir den också 'undefined'
  return a - b;
}
console.log("Summan av 5 + 6 är " + sub(5));

console.log("================================");
