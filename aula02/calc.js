// código sem modularização:

/* 

function soma(a, b) {
  return a+b
}

function subtracao(a, b) {
  return a-b
}

function multiplicacao(a, b) {
  return a*b
}

function divisao(a, b) {
  if (b != 0) {
    return a/b
  }
  else {
    console.log("Erro! Denominador igual a 0.")
  }
}

console.log(divisao(4, 2))

*/


// código com modularização: 
//    -> a modularização é bastante utilizada para o carregamento de bibliotecas no Javascript

var somaFunc = require("./soma")
var subFunc = require("./subtracao")
var multFunc = require("./multiplicacao")
var divFunc = require("./divisao")

console.log(somaFunc(1, 2))
console.log(subFunc(3, 2))
console.log(multFunc(4, 2))
console.log(divFunc(6, 2))