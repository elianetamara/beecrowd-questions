var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());

let x = (a * b) / 12;

console.log(x.toFixed(3));
