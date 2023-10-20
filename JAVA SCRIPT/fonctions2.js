const quantite = document.querySelector('#quantite');
const resultat = document.querySelector('#resultat');


function calculer(){
    

//let quantité = prompt("nombre de choco");
let inferieur10prix = (1.40 * quantite.value);
if(quantite.value <= 10){
    console.log(inferieur10prix.value);
}
let superieur10prix = [(quantité - 10) * 1.3 + 14];
if(quantite.value > 10 && quantite.value <= 20){
    console.log(superieur10prix.value);
}
let superieur20prix = [(quantite.value - 20) * 1.20 + 27];
if(quantite.value > 20){
    console.log(superieur20prix.value);
}
resultat.textContent = ""
}