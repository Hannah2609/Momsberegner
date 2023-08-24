"use strict";
// Nedenstående udskriver i konsol hvis beløb = 100 og moms = 20.

momsBeregner(100, 20);

function momsBeregner (belob, moms = 25) {

console.log(belob + (belob / 100) * moms);
}

// nedenstående er et forsøg

// document.querySelector("button").addEventListener("click", momsBeregner);

// function momsBeregner() {
//   const belob = document.querySelector("#belob");
//   const momsInput = document.querySelector("#moms");
//   const moms = momsInput || 25;

//   const resultText = document.querySelector("#result");
//   const result = belob + (belob * moms) / 100;

//   resultText.textContent = result;
// }
