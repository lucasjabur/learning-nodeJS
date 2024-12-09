var divisao = function (a, b) {
  if (b != 0) {
    return a/b
  }
  else {
    console.log("Erro! Denominador igual a 0.")
  }
}

module.exports = divisao;