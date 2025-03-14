var pessoa = require("./commons/Pessoa");
var soma = require("./commons/Soma");
var imposto = require("./commons/CalculoImposto");

natascha = pessoa();

//console.log(JSON.stringify(natascha));
//console.log(soma(2,2));

console.log('Valor do produto com imposto: ' + imposto.adicionar(10));
console.log('Valor do imposto:' + imposto.valor(10));
console.log('Taxa do Imposto:' + imposto.taxa)