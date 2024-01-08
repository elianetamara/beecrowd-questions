var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

var X = parseInt(lines.shift());
var Y = parseInt(lines.shift());
let cont = 0;
let Z = "";
for (i = 1; i < Y; i++) {
  cont += 1;
  if (cont == X) {
    cont = 0;
    Z += `${i}\n`;
  } else {
    Z += `${i} `;
  }
}
Z += `${Y}`;
console.log(Z);
