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

let n = parseInt(lines.shift());

for (let f = 0; f < n; f++) {
  let x = lines.shift();
  let pilha = new Pilha();
  let cont = 0;
  for (let b of x) {
    if (b === "<") {
      pilha.push(b);
    }
    if (b === ">") {
      if (pilha.top() == "<") {
        cont++;
        pilha.pop();
      }
    }
  }
  console.log(cont);
}
