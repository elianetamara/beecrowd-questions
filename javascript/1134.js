var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var n = parseInt(lines.shift());
var alcool = 0;
var gasolina = 0;
var diesel = 0;
while (n != 4) {
  if (n == 1) {
    alcool++;
  } else if (n == 2) {
    gasolina++;
  } else if (n == 3) {
    diesel++;
  }
  n = parseInt(lines.shift());
}
console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcool);
console.log("Gasolina: " + gasolina);
console.log("Diesel: " + diesel);
