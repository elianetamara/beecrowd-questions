var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let x = parseInt(lines.shift());
let y = parseFloat(lines.shift());
let t = x / y;

console.log(t.toFixed(3) + " km/l");
