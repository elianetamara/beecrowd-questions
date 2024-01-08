var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var x = parseInt(lines.shift());
var y = parseInt(lines.shift());
var soma = 0;
if (x > y) {
  for (var j = y; j <= x; j++) {
    if (j % 13 !== 0) {
      soma += j;
    }
  }
}
if (y > x) {
  for (var j = x; j <= y; j++) {
    if (j % 13 !== 0) {
      soma += j;
    }
  }
}
console.log(soma);
