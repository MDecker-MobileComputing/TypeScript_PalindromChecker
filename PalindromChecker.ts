/*
 * This file is licensed under the terms of the BSD 3-Clause License.
 */


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("\nWort eingeben > ", function(eingabe: string) {

  const eingabeNormalisiert = eingabe.trim().toLowerCase();
  const laenge = eingabeNormalisiert.length;
  if (laenge === 0) {

    console.log("Kein Wort zum Überprüfen eingegeben, Abbruch!\n");

  } else {

    /* ****** Ab hier ergänzen ****************************************************************** */

    console.log(`\nSollte jetzt überprüfen, ob "${eingabeNormalisiert}" ein Palindrom ist oder nicht ...\n`);

    /* ****************************************************************************************** */
  }
  rl.close();
});
