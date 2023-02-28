console.log('Hello World!')

document.getElementById("buttonmassa").onclick = function() {

  let massatot = document.getElementById("massatotal").value;
  let frango = Math.ceil(massatot/100 * 47.48)
  let creme = Math.ceil(massatot/100 * 11.17)
  let dueto = Math.ceil(massatot/100 * 11.17)
  let requeijao = Math.ceil(massatot/100 * 27.93)
  let margarina = Math.ceil(massatot/100 * 1.66)
  let cebola = Math.ceil(massatot/100 * 1.66)
  let alho = Math.ceil(massatot/100 * 1.1)

  //console log for debugging

  console.log(massatot)
  console.log(frango)
  console.log(creme)
  console.log(dueto)
  console.log(requeijao)
  console.log(margarina)
  console.log(cebola)
  console.log(alho)

  document.getElementById("displayfrango").value = frango;
  document.getElementById("displaydueto").value = dueto;
  document.getElementById("displaycreme").value = creme;
  document.getElementById("displayrequeijao").value = requeijao;
  document.getElementById("displaymargarina").value = margarina;
  document.getElementById("displaycebola").value = cebola;
  document.getElementById("displayalho").value = alho;

  document.getElementById("displayfrangotab").innerHTML = frango+"g";
  document.getElementById("displayrequeijaotab").innerHTML = requeijao+"g";
  document.getElementById("displaycremetab").innerHTML = creme+"g";
  document.getElementById("displayduetotab").innerHTML = dueto+"g";
  document.getElementById("displaycebolatab").innerHTML = cebola+"g";
  document.getElementById("displaymargarinatab").innerHTML = margarina+"g";
  document.getElementById("displayalhotab").innerHTML = alho+"g";

   let uv_frango = document.getElementById("uv_frango").getAttribute('value')
   let mu_frango = document.getElementById("mu_frango").getAttribute('value')

   let uv_requeijao = document.getElementById("uv_requeijao").getAttribute('value')
   let mu_requeijao = document.getElementById("mu_requejao").getAttribute('value')

   let uv_creme = document.getElementById("uv_creme").getAttribute('value')
   let mu_creme = document.getElementById("mu_creme").getAttribute('value')

   let uv_dueto = document.getElementById("uv_dueto").getAttribute('value')
   let mu_dueto = document.getElementById("mu_dueto").getAttribute('value')

   let uv_margarina = document.getElementById("uv_margarina").getAttribute('value')
   let mu_margarina = document.getElementById("mu_margarina").getAttribute('value')

   let uv_alho = document.getElementById("uv_alho").getAttribute('value')
   let mu_alho = document.getElementById("mu_alho").getAttribute('value')

   let uv_cebola = document.getElementById("uv_cebola").getAttribute('value')
   let mu_cebola = document.getElementById("mu_cebola").getAttribute('value')

   function displayvalorquantteste(obj, uv, mu){

   let valorquant = obj*(uv/mu);
   let numString = valorquant.toString();
   let stringWithFiveDecimals = numString.match(/^-?\d+(?:\.\d{0,2})?/)[0];
   let displayvalorquant = "R$: "+(parseFloat(stringWithFiveDecimals));
   return displayvalorquant;

   }

   document.getElementById("displayvalorquantfrango").innerHTML = displayvalorquantteste(frango, uv_frango, mu_frango);
   document.getElementById("displayvalorquantrequeijao").innerHTML = displayvalorquantteste(requeijao, uv_requeijao, mu_requeijao);
   document.getElementById("displayvalorquantcreme").innerHTML = displayvalorquantteste(creme, uv_creme, mu_creme);
   document.getElementById("displayvalorquantdueto").innerHTML = displayvalorquantteste(dueto, uv_dueto, mu_dueto);
   document.getElementById("displayvalorquantcebola").innerHTML = displayvalorquantteste(cebola, uv_cebola, mu_cebola);
   document.getElementById("displayvalorquantmargarina").innerHTML = displayvalorquantteste(margarina, uv_margarina, mu_margarina);
   document.getElementById("displayvalorquantalho").innerHTML = displayvalorquantteste(alho, uv_alho, mu_alho);









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