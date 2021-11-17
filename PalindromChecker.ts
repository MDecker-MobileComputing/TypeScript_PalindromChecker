const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Wort eingeben:", function(eingabe: string) {

  const eingabeTrimmed = eingabe.trim();

  if (eingabeTrimmed.length === 0) {

    console.log(`Kein Wort zum Überprüfen eingegeben, Abbruch!`);

  } else {

    console.log(`Sollte jetzt überprüfen, ob "${eingabeTrimmed}" ein Palindrom ist oder nicht ...`);

  }
  rl.close();
});

console.log();