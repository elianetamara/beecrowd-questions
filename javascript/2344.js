var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let nota = parseInt(lines.shift());
let notacerta;
let list = [];
for (let f = 0; f <= 100; f++) {
  list.push(f);
}

for (let i = 0; i <= list.length; i++) {
  if (nota == i) {
    if (nota === 0) {
      notacerta = "E";
    }
    if (nota >= 1 && nota <= 35) {
      notacerta = "D";
    }
    if (nota >= 36 && nota <= 60) {
      notacerta = "C";
    }
    if (nota >= 61 && nota <= 85) {
      notacerta = "B";
    }
    if (nota >= 86 && nota <= 100) {
      notacerta = "A";
    }
  }
}

console.log(notacerta);
