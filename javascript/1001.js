var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());

let X = A + B;

console.log("X = " + X);
