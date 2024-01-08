var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

class Pilha {
  constructor() {
    this.lista = [];
  }

  push(e) {
    this.lista.push(e);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.lista.pop();
  }

  size() {
    return this.lista.length;
  }

  isEmpty() {
    return this.lista.length === 0;
  }

  top() {
    if (this.isEmpty()) {
      return null;
    }
    let tam = this.lista.length - 1;
    return this.lista[tam];
  }
}

let quant = lines.length;

while (quant !== 0) {
  let x = lines.shift();
  x = x.split("");
  let pilha = new Pilha();
  let y = true;
  let quanta = 0;
  let quantb = 0;
  let quant1 = 0;
  let quant2 = 0;
  for (let b of x) {
    if (b === "(") {
      pilha.push(b);
      quant1++;
      quanta++;
    }
    if (b === ")") {
      quant2++;
      if (pilha.top() === "(") {
        pilha.pop();
      }
      quantb++;
    }
  }
  if (pilha.size() !== 0 || quanta != quantb) {
    y = false;
  }

  if (quant1 === 0 && quant2 === 0) {
  } else {
    if (y) {
      console.log("correct");
    } else {
      console.log("incorrect");
    }
  }
  quant--;
}
