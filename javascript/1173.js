var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let v = parseInt(lines.shift());
console.log("N[0] = " + v);

for (let i = 1; i < 10; i++) {
  v = v * 2;
  console.log("N[" + i + "] = " + v);
}
