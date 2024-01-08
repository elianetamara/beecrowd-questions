var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let N = parseInt(lines.shift());

let testes = [];
let total = 0;
let c = 0;
let r = 0;
let s = 0;

for (let i = 0; i < N; i++) {
  var x = lines.shift().split(" ");

  let y = parseInt(x.shift());
  let tipo = x.shift().trim();

  testes[i] = y;
  total += testes[i];

  if (tipo == "C") {
    c += testes[i];
    testes.push(c.lenght);
  } else if (tipo == "R") {
    r += testes[i];
    testes.push(r.lenght);
  } else if (tipo == "S") {
    s += testes[i];
    testes.push(s.lenght);
  }
}

let porcC = ((c / total) * 100).toFixed(2);
let porcR = ((r / total) * 100).toFixed(2);
let porcS = ((s / total) * 100).toFixed(2);

console.log("Total: " + total + " cobaias");
console.log("Total de coelhos: " + c);
console.log("Total de ratos: " + r);
console.log("Total de sapos: " + s);
console.log("Percentual de coelhos: " + porcC + " %");
console.log("Percentual de ratos: " + porcR + " %");
console.log("Percentual de sapos: " + porcS + " %");
