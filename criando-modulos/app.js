// Arquivo de Teste dos Módulos

let funcoes = require("./modulo.js");

let a = 1;
let b = 1;

// Fazendo o Cálculos
let resultadoSoma = funcoes.soma(a,b);
let resultadoSub = funcoes.sub(a,b);
let resultadoMult = funcoes.mult(a,b);
let resultadoDiv = funcoes.div(a,b);

// Imprimindo os Cálculos 
console.log("Soma: ",resultadoSoma);
console.log("Subtração: ",resultadoSub);
console.log("Multiplicação: ", resultadoMult);
console.log("Divisão: ", resultadoDiv);