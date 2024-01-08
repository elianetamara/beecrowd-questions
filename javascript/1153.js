var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var N = parseInt(lines.shift());
var fat = 1;
for (var i = 1; i <= N; i++) {
  fat *= i;
}
console.log(fat);
