/* 
 * This file is licensed under the terms of the BSD 3-Clause License.
 */


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Wort eingeben:", function(eingabe: string) {

  const eingabeNormalisiert = eingabe.trim().toLowerCase();
  const laenge = eingabeNormalisiert.length;
  if (laenge === 0) {

    console.log(`Kein Wort zum Überprüfen eingegeben, Abbruch!`);

  } else {

    console.log(`Sollte jetzt überprüfen, ob "${eingabeNormalisiert}" ein Palindrom ist oder nicht ...`);

  }
  rl.close();
});

console.log();