var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift();
let n = parseInt(line.split(" ").shift());
let v = input.split(' ');


let menor = parseInt(lines.shift());
let posicao = 0;

v.shift();
for(let i = 1; i < n; i++){
    var z = parseInt(v.shift());
    if(z < menor){
        menor = z;
        posicao = i;
    }
}

console.log('Menor valor: ' + menor);
console.log('Posicao: ' + posicao);
