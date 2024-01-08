var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let numfunc = parseInt(lines.shift());
let horast = parseInt(lines.shift());
let valorhora = parseFloat(lines.shift());

let salario = horast * valorhora;

console.log("NUMBER = " + numfunc);
console.log("SALARY = U$ " + salario.toFixed(2));
