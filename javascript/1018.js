var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let numnotas = parseInt(lines.shift());
let notas = numnotas;

var notas100 = parseInt(notas / 100);
notas -= notas100 * 100;
var notas50 = parseInt(notas / 50);
notas -= notas50 * 50;
var notas20 = parseInt(notas / 20);
notas -= notas20 * 20;
var notas10 = parseInt(notas / 10);
notas -= notas10 * 10;
var notas5 = parseInt(notas / 5);
notas -= notas5 * 5;
var notas2 = parseInt(notas / 2);
notas -= notas2 * 2;
var notas1 = parseInt(notas);

console.log(numnotas);
console.log(notas100 + " nota(s) de R$ 100,00");
console.log(notas50 + " nota(s) de R$ 50,00");
console.log(notas20 + " nota(s) de R$ 20,00");
console.log(notas10 + " nota(s) de R$ 10,00");
console.log(notas5 + " nota(s) de R$ 5,00");
console.log(notas2 + " nota(s) de R$ 2,00");
console.log(notas1 + " nota(s) de R$ 1,00");
