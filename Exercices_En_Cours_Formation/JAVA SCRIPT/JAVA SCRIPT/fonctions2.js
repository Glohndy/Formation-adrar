//Exercice 1 variable :
//Ecrivez un algorithme qui va interchanger  la valeur de 2 variables nb1 et nb2
let nbr1 = 10;
let nbr2 = 5;
let temp = nbr1; //10
nbr1 = nbr2; //5
nbr2 = temp;


Concaténation :
let texte = "Bonjour ";
let utilisateur = "Mathieu";
//concatenation version double ""
console.log("la solution est : "+texte+" "+utilisateur+" "+(nbr1+nbr2));
//version simple ''
console.log('la solution est : '+texte+' '+utilisateur+' '+(nbr1+nbr2));
//version template string
console.log(`La solution est : ${texte} ${utilisateur} ${nbr1+nbr2}`);



//Exercice 2 : Les tests :
//Ecrire un algorithme qui prend un nombre (variable nbr1) en entrée affiche dans la console si le nombre est positif ou négatif.
/*
    Variables 
*/
let nbr1 = prompt("Saisir un nombre");

/* 
    Logique 
*/
//test si nbr1 est positif
if(nbr1 > 0){
    console.log("Positif");
}
//test sinon si nbr 1 est égal à 0
else if(nbr1 == 0){
    console.log("Egale 0");
}
//test sinon si nbr1 n'est pas un nombre
else if(isNaN(nbr1)){
    console.log("Ce n'est pas un nombre");
}
//test sinon nbr1 est négatif
else{
    console.log("Négatif");
}



//Exercice 3 : Les tests :
//Ecrire un algorithme qui prend deux  nombres en entrée (variable nbr1 et nbr2) affiche dans la console si la somme des deux nombres (addition) est positive ou négative.
/*
    Variables 
*/
let nbr1 = parseInt(prompt("Saisir le nombre 1"));
let nbr2 = parseInt(prompt("Saisir le nombre 2"));
/* 
    Logique 
*/
//test si nbr1 + nbr 2est positif
if(nbr1 + nbr2 > 0){
    console.log("Positif");
}
//test sinon si nbr 1 + nbr2 est égal à 0
else if(nbr1 + nbr2 == 0){
    console.log("Egale 0");
}
//test sinon si nbr1 + nbr 1 n'est pas un nombre
else if(isNaN(nbr1+nbr2)){
    console.log("Ce n'est pas un nombre");
}
//test sinon nbr1 + nbr2 est négatif
else{
    console.log("Négatif");
}

//version factorisé addition
/*
    Variables 
*/
let nbr1 = parseInt(prompt("Saisir le nombre 1"));
let nbr2 = parseInt(prompt("Saisir le nombre 2"));
/* 
    Logique 
*/
let addition = nbr1 +nbr2;
//test si nbr1 + nbr 2est positif
if(addition > 0){
    console.log("Positif");
}
//test sinon si nbr 1 + nbr2 est égal à 0
else if(addition == 0){
    console.log("Egale 0");
}
//test sinon si nbr1 + nbr 1 n'est pas un nombre
else if(isNaN(addition)){
    console.log("Ce n'est pas un nombre");
}
//test sinon nbr1 + nbr2 est négatif
else{
    console.log("Négatif");
}



//Exercice 4  : Tests :
//Ecrire un algorithme qui demande deux nombres à l’utilisateur et l’informe ensuite si le produit (multiplication)
// est négatif ou positif (on inclut cette fois le traitement du cas où le produit peut-être nul). 
// Attention toutefois, on ne doit pas calculer le produit ! (multiplication)
let nbr1 = prompt("Saisir le nombre 1");
let nbr2 = prompt("Saisir le nombre 2");

//tests si les 2 nombres sont des nombres
if(isNaN(nbr1) || isNaN(nbr2)){
    console.log("Un des 2 valeurs n'est pas un nombre");
}
//Test si les nombres sont positif ou négatif
else if((nbr1 > 0 && nbr2 > 0) || (nbr1 < 0 && nbr2 < 0)){    
    console.log("Le produit est positif");
}
//Test si un des 2 nombres vaut 0
else if(nbr1 == 0 || nbr2 == 0){
    console.log("Le produit vaut 0");
}
//Test sinon  
else{
    console.log("Le produit est négatif");
}




//Exercice 5 : Tests  :
//Ecrire un algorithme qui demande l’âge d’un enfant à l’utilisateur. Ensuite, il l’informe de sa catégorie : 
"Poussin" de 6 à 7 ans
"Pupille" de 8 à 9 ans
"Minime" de 10 à 11 ans
"Cadet" après 12 ans

let age = parseInt(prompt("Saisir le nombre 1"));
switch(true){
    case age>=6 && age<=7:
        console.log("poussin");
        break;
    case age>=8 && age<=9:
        console.log("pupille");
        break;
    case age>=10 && age<=11:
        console.log("Minime");
        break;
    case age>12:
        console.log("poussin");
        break;
}

//EXO 5
let age = parseInt(prompt("Saisir votre age"));
//version condition
if(age>=12){
    console.log("Cadet");
}
else if(age >= 10){
    console.log("Minime");
}
else if(age >= 8){
    console.log("Pupille");
}
else if(age >= 6){
    console.log("Poussin");
}
else{
    console.log("Trop jeune");
}
//switch case
switch (true) {
    case age>=12:
        console.log("Cadet");
        break;
    case age>=10:
        console.log("Minime");
        break;
    case age>=8:
        console.log("Pupille");
        break;
    case age>=6:
        console.log("Poussin");
        break;
    default:
        console.log("Trop jeune");
        break;
}
//switch case version valeur numérique
switch (age) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Trop jeune");
        break;
    case 6:
    case 7:
        console.log("Poussin");
        break;
    case 8:
    case 9:
        console.log("Pupille");
        break;
    case 10:
    case 11:
        console.log("Minime");
        break;
    default:
        console.log("Cadet");
        break;
}