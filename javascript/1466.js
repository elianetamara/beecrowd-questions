var input = require("fs").readFileSync("/dev/stdin", "utf8");
let linhas = input.split("\n");

let n = parseInt(linhas.shift());

class Node {
  constructor(valor) {
    this.valor = valor;
    this.esquerda = null;
    this.direita = null;
  }

  inserir(novoNode) {
    if (this.valor > novoNode.valor) {
      if (this.esquerda === null) {
        this.esquerda = novoNode;
      } else {
        this.esquerda.inserir(novoNode);
      }
    } else if (this.valor < novoNode.valor) {
      if (this.direita === null) {
        this.direita = novoNode;
      } else {
        this.direita.inserir(novoNode);
      }
    } else {
    }
  }

  busca(valorBuscado) {
    if (this.valor == valorBuscado) {
      return true;
    } else {
      if (this.valor > valorBuscado) {
        if (this.esquerda !== null) {
          return this.esquerda.busca(valorBuscado); // Recursividade
        } else {
          return false;
        }
      } else {
        if (this.direita !== null) {
          return this.direita.busca(valorBuscado); // Recursividade
        } else {
          return false;
        }
      }
    }
  }
}

class ArvoreBinaria {
  constructor() {
    this.raiz = null;
  }

  inserir(valor) {
    let novoNode = new Node(valor);

    if (this.raiz === null) {
      this.raiz = novoNode;
    } else {
      this.raiz.inserir(novoNode);
    }
  }

  busca(valorBuscado) {
    if (this.raiz === null) {
      return false;
    } else {
      return this.raiz.busca(valorBuscado);
    }
  }
}

class Fila {
  constructor() {
    this.lista = [];
  }

  enqueue(e) {
    this.lista.push(e);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.lista.shift();
  }

  size() {
    return this.lista.length;
  }

  isEmpty() {
    return this.lista.length === 0;
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.lista[0];
  }
}

for (let i = 1; i <= n; i++) {
  let arvore = new ArvoreBinaria();
  let q = parseInt(linhas.shift());
  let espaco = linhas.shift().split(" ");
  for (let i = 0; i < q; i++) {
    let numero = parseInt(espaco.shift());
    arvore.inserir(numero);
  }
  let fila = new Fila();
  fila.enqueue(arvore.raiz);
  let lista = [];
  if (arvore.raiz !== null) {
    while (!fila.isEmpty()) {
      let node = new Node();
      node = fila.dequeue();

      lista.push(node.valor);

      if (node.esquerda !== null) {
        fila.enqueue(node.esquerda);
      }
      if (node.direita !== null) {
        fila.enqueue(node.direita);
      }
    }
  }

  console.log(`Case ${i}:`);
  console.log(lista.join(" "));
  console.log("");
}
