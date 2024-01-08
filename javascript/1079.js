var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let cont = 0;
let num = [];
let casosteste = parseInt(lines.shift());

for (let i = 0; i < casosteste; i++) {
  let valores = lines.shift();
  let valor = valores.split(" ");
  for (let f = 0; f < 3; f++) {
    var n = valor.shift();
    num.push(cont);
    num[cont] = parseFloat(n);
    cont++;
  }
}

for (let p = 0; p < num.length; p += 3) {
  let media = (num[p] * 2 + num[p + 1] * 3 + num[p + 2] * 5) / 10;
  console.log(media.toFixed(1));
}
