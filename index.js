console.log('Hello World!')

document.getElementById("buttonmassa").onclick = function() {

  var massatot = document.getElementById("massatotal").value;
  var frango = massatot/100 * 47.48
  var creme_de_leite = massatot/100 * 11.17
  var dueto = massatot/100 * 11.17
  var requeijão = massatot/100 * 27.93
  var margarina = massatot/100 * 1.66
  var cebola = massatot/100 * 1.66
  var alho = massatot/100 * 1.1
  console.log(massatot)
  console.log(frango)
  console.log(creme_de_leite)
  console.log(dueto)
  console.log(requeijão)
  console.log(margarina)
  console.log(cebola)
  console.log(alho)

}

//let massa = {
//     massatotal : Number(prompt('Qual a quantidade total de massa?(g)')),
//     frango: 850,
//     requeijão: 500,
//     dueto: 200,
//     cremedeleite: 200,
//     cebola: 30,
//     margarina: 30,
//     alho: 20,
//}




function calcprop (massatot) {
  console.log("A Quantidade de frango é:" + massatotal*47.48);
};