var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());

let P1 = 3.5;
let P2 = 7.5;

let X = A * P1 + B * P2;
let Y = P1 + P2;
let media = X / Y;

console.log("MEDIA = " + media.toFixed(5));
