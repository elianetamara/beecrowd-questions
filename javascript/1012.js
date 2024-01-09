var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var valores = lines.shift().split(" ");

let A = parseFloat(valores.shift());
let B = parseFloat(valores.shift());
let C = parseFloat(valores.shift());
let circulo = 3.14159 * C * C;
let quadrado = B * B;
let retangulo = A * B;
let triangulo = (A * C) / 2;
let trapezio = ((A + B) / 2) * C;

console.log("TRIANGULO: " + triangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));
