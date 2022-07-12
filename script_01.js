"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
function test() 
{
    console.log("Hallo Robert!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();
// console.log(firstName); // Fehler: Scope!

function ausgabeNamen() {
    let firstName = "Anna"; // what happens in Vegas, ...
    console.log("Hallo " + firstName + "!");
}


/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

ausgabeNamenParam("Anna"); // Argument 
ausgabeNamenParam("Craig");
ausgabeNamenParam("Fatih");

function ausgabeNamenParam(firstName) { // Parameter
    console.log("Hallo " + firstName + "!");
}

/***** Funktionen 02c *****/
// 2c. Mehrer Parameter *****/

ausgabeNamenParams("Maxine","Mütze");
ausgabeNamenParams(prompt("Vorname?"),prompt("Nachname?"));

function ausgabeNamenParams(firstName, familyName) { // Parameter
    console.log("Hallo " + firstName + " " + familyName + "!");
}

// /***** Funktion 03a /*******
// 03a. Vorbereitung
//  Postulat: one function = one job (uncle job)
//  SRP single responsibility principle

ausgabeNamenParams2("Max","Mütze");

 function ausgabeNamenParams2(firstName, familyName) {  //Parameter

// 1. Funktionalität: string composing

const gap = " ";
const outputStr = "Hallo"+ gap + firstName + gap + familyName + "!"

// 2. Funktionalität: data output
console.log(outputStr);


 }


 /**** Funktion 03b  *******/
 // Trennen der Funktionalität | return

 // 1. Funktionalität: string composing

getString("Maxine","Mütze");
output(getString("Maxine","Mütze"));
function getString(firstName, familyName) {
    const gap = " ";
    const outputStr = "Hallo"+ gap + firstName + gap + familyName + "!";
    return outputStr;  //----> Daten zum Call
    console.log("Hi");  // return BEENDET die Funkltion!
 }

// 2. Funktionalität: data output
// output("Hello");
function output(outputData) {
    console.log(outputData);
}
