"use strict";
// Nedenstående udskriver i konsol hvis beløb = 100 og moms = 20:
// moms er standart

// momsBeregner(100, 20);

// function momsBeregner (belob, moms = 25) {

// console.log(belob + (belob / 100) * moms);
// }

// nedenstående er et forsøg:

const belobElm = document.querySelector("#belob");
const momsInputElm = document.querySelector("#moms");

const resultText = document.querySelector("#result");
document.querySelector("button").addEventListener("click", klik);

function klik() {
  const belobInput = parseInt(belobElm.value);
  const momsInput =  parseInt(momsInputElm.value);
  resultText.textContent = momsBeregner(belobInput,momsInput);
  console.log("klik", belobInput,momsInput);
}

function momsBeregner(belob, moms) {
  const result = belob + (belob * moms) / 100;

  return result;
}

// console.log(momsBeregner(100, 25));
// Return i konsol:

// const belob = 100;
// const momsetBelob = momsBeregner(belob, moms = 25);

// function momsBeregner (belob, moms = 25) {
// const result = belob + (belob / 100) * moms;
// console.log(`beløb plus moms`, result);

// return result;

// }
