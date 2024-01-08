var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let N = parseInt(lines.shift());
let listfib = [];

let x = "";
listfib[0] = 0;
listfib[1] = 1;
for (let i = 2; i < N; i++) {
  listfib[i] = listfib[i - 1] + listfib[i - 2];
}

x = listfib[0];
for (let p = 1; p < listfib.length; p++) {
  x = x + " " + listfib[p];
}

console.log(x);
