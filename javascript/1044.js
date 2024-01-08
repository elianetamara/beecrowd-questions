var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
if (A % B === 0 || B % A === 0) {
  console.log("Sao Multiplos");
} else {
  console.log("Nao sao Multiplos");
}
