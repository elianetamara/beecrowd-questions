var input = require("fs").readFileSync("/dev/stdin", "utf8");
var entradas = input.replace("\n", " ");
var lines = entradas.split(" ");

let x1 = parseFloat(lines.shift());
let y1 = parseFloat(lines.shift());
let x2 = parseFloat(lines.shift());
let y2 = parseFloat(lines.shift());

let b = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
let distancia = Math.sqrt(b);

console.log(distancia.toFixed(4));
