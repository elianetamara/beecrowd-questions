var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

var horainicio = parseInt(lines.shift());
var mininicio = parseInt(lines.shift());
var horafim = parseInt(lines.shift());
var minfim = parseInt(lines.shift());

horafim = horafim * 60;
horainicio = horainicio * 60;

let durac = horafim + minfim - (horainicio + mininicio);

if (durac <= 0) {
  durac += 24 * 60;
}

var hora = parseInt(durac / 60);
var minutos = durac - 60 * hora;
console.log(`O JOGO DUROU ${hora} HORA(S) E ${minutos} MINUTO(S)`);
