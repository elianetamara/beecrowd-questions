var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let T = parseInt(lines.shift());
let N = [];
let p = 0;
while (p < 999) {
  for (let i = 0; i < T; i++) {
    if (p > 999) break;
    N.push(p);
    N[p] = i;
    p++;
  }
}
for (let i = 0; i < N.length; i++) {
  console.log("N[" + i + "] = " + N[i]);
}
