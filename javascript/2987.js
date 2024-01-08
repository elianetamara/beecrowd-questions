var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let letra = lines.shift();

let p = 0;
let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num = [];
num = alfabeto.split("");
num.push(alfabeto.lenght);

for (var i = 0; i < 26; i++) {
  if (num[i] == letra) {
    p = i;
  }
}
console.log(p + 1);
