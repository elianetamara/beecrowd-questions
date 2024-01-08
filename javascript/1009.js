var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let nome = parseInt(lines.shift());
let sf = parseFloat(lines.shift());
let mt = parseFloat(lines.shift());

let sb = mt * 0.15 + sf;
console.log("TOTAL = R$ " + sb.toFixed(2));
