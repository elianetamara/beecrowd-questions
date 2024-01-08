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
          return this.esquerda.busca(valorBuscado);
        } else {
          return false;
        }
      } else {
        if (this.direita !== null) {
          return this.direita.busca(valorBuscado);
        } else {
          return false;
        }
      }
    }
  }

  percursoPreOrdem(resultado) {
    resultado.push(this.valor);

    if (this.esquerda !== null) {
      this.esquerda.percursoPreOrdem(resultado);
    }

    if (this.direita !== null) {
      this.direita.percursoPreOrdem(resultado);
    }
  }

  percursoEmOrdem(resultado) {
    if (this.esquerda !== null) {
      this.esquerda.percursoEmOrdem(resultado);
    }

    resultado.push(this.valor);

    if (this.direita !== null) {
      this.direita.percursoEmOrdem(resultado);
    }
  }
  percursoPosOrdem(resultado) {
    if (this.esquerda !== null) {
      this.esquerda.percursoPosOrdem(resultado);
    }
    if (this.direita !== null) {
      this.direita.percursoPosOrdem(resultado);
    }
    resultado.push(this.valor);
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

  percursoPreOrdem() {
    if (this.raiz !== null) {
      let resultado = [];
      this.raiz.percursoPreOrdem(resultado);
      return resultado;
    } else {
      return [];
    }
  }

  percursoEmOrdem() {
    if (this.raiz !== null) {
      let resultado = [];
      this.raiz.percursoEmOrdem(resultado);
      return resultado;
    } else {
      return [];
    }
  }

  percursoPosOrdem() {
    if (this.raiz !== null) {
      let resultado = [];
      this.raiz.percursoPosOrdem(resultado);
      return resultado;
    } else {
      ("nada");
      return [];
    }
  }
}

let linha = input.split("\n");
linha.shift();
let s = 1;

for (let i = 0; i < n; i++) {
  let m = parseInt(linha.shift());
  let arvore = new ArvoreBinaria();
  for (let q = 0; q < 1; q++) {
    let a = linha.shift();
    let b = a.split(" ");
    for (let f = 0; f < m; f++) {
      let g = parseInt(b.shift());
      arvore.inserir(g);
    }
  }
  console.log(`Case ${s}:`);
  console.log("Pre.: " + arvore.percursoPreOrdem().join(" "));
  console.log("In..: " + arvore.percursoEmOrdem().join(" "));
  console.log("Post: " + arvore.percursoPosOrdem().join(" "));
  console.log("");
  s++;
}
