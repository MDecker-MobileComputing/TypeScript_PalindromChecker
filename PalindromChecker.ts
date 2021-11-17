const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Wort eingeben:", function(eingabe: string) {

  const eingabeNormalisiert = eingabe.trim().toLowerCase();
  if (eingabeNormalisiert.length === 0) {

    console.log(`Kein Wort zum Überprüfen eingegeben, Abbruch!`);

  } else {

    console.log(`Sollte jetzt überprüfen, ob "${eingabeNormalisiert}" ein Palindrom ist oder nicht ...`);

  }
  rl.close();
});

console.log();