"use strict";
// Nedenstående udskriver i konsol hvis beløb = 100 og moms = 20.

momsBeregner(100, 20);

function momsBeregner (beløb, moms = 25) {

console.log(beløb + (beløb / 100) * moms);
}



// nedenstående er et forsøg

// document.querySelector("button").addEventListener("click", momsBeregner);

// function momsBeregner(belob, moms = 25) {
//  belob = document.querySelector("#belob");
//  moms = document.querySelector("#moms");
//  const resultText = document.querySelector("#result");
 
//  let result = belob + (belob / 100) * moms;

//  resultText.textContent = $(result);

//   console.log(belob + (belob / 100) * moms);
// }
