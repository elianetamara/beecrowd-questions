var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let idade = [];
let positivos = [];
let x = 0;
let qnt = 0;
while (idade >= 0) {
  idade = parseInt(lines.shift());
  if (idade >= 0) {
    positivos.push(idade);
    x = x + idade;
    qnt++;
  }
}
let media = x / qnt;
console.log(media.toFixed(2));
