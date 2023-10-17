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



//Exercice 6 : Tests : 
//Ecrire un algorithme qui demande 3 mots et affiche dans la console si ils sont triés dans l'ordre alphabétiques.
//version avec des variables (string)
let mot1 = prompt('Veuillez saisir un mot');
let mot2 = prompt('Veuillez saisir un mot');
let mot3 = prompt('Veuillez saisir un mot');
if(mot1<=mot2 && mot2<=mot3){
    console.log('Les mots sont dans l\'ordre alphabétique');
}
else {
    console.log('Les mots ne sont pas dans l\'ordre alphabétique');
}
//version avec un tableau
let mots = [];
mots[0] = prompt('Saisir un mot');
mots[1] = prompt('Saisir un mot');
mots[2] = prompt('Saisir un mot');

let tabTri = [];
tabTri[0]= mots[0];
tabTri[1]= mots[1];
tabTri[2]= mots[2];

tabTri.sort();
if(tabTri[0]==mots[0]&&tabTri[1]==mots[1]&&tabTri[2]==mots[2]){
    console.log('Les mots sont dans l\'ordre alphabétique');
}
else {
    console.log('Les mots ne sont pas triés dans l\'ordre');
}


//Cours
//Tableau :
//Créer un tableau vide
let tab= []
//créer un tableau avec des valeurs
let tab2= [10,52, 25, 42];
//ajouter des données à un tableau dans une colonne
tab2[4] = 35;
//ajouter des données à la fin d'un tableau
tab2.push(88);
//supprimer la dernière colonne
tab2.pop()
//modifier une colonne par son numéro
tab2[2] = 14




//Exercice 7 tableau :
//Créer un algorithme qui va demander 3 valeurs numériques (prompt 3 fois) ajouter ces valeurs à un tableau vide (1 valeur 1 colonne,
 2 éme valeur 2 éme colonne, 3 éme valeur 3 éme colonne),
//tester si les valeurs sont dans l'ordre croissant (afficher un message dans la console les valeurs sont triées par ordre croissant),
//sinon (afficher un message dans la console valeurs ne sont pas triées dans l'ordre croissant*)
let nbr1 = prompt("Saisir un nombre");
let nbr2 = prompt("Saisir un nombre");
let nbr3 = prompt("Saisir un nombre");
let tab =[];
//version ajout des colonnes par leur index
tab[0] = nbr1;
tab[1] = nbr2;
tab[2] = nbr3;
//version remplacement du contenu du tableau
/* tab = [nbr1,nbr2,nbr3]
//version avec la méthode push ajouter à la fin du tableau
tab.push(nbr1,nbr2,nbr3) */
//test si les nombres sont bien triés
if(tab[0]<=tab[1]&&tab[1]<=tab[2]){
    console.log('Les valeurs sont triées par ordre croissant');
}
//test sinon pas dans l'ordre
else{
    console.log('Les valeurs ne sont pas triées par ordre croissant');
}




//Exercice 8 Tableau :
//Créer un programme qui va demander 3 valeurs (prompt *3) :
-nom de produit (string),
-prix HT (float),
-quantité (integer),
Ajouter ces informations dans un tableau (chaque valeur dans une nouvelle colonne),
Calculer le prix TTC (prix HT X 1.20 X quantité) et stocker le prix TTC à la fin du tableau.
Afficher le Prix TTC dans la console (depuis la dernière colonne du tableau)
//Récupérer les 3 valeurs
let nomProduit = prompt("Saisir le nom du produit");
let prixHt = parseFloat(prompt("Saisir le prix HT du produit"));
let quantite = parseInt(prompt("Saisir quantite du produit"));
//créer un tableau vide
let tab = [];
//ajouter les 3 valeurs 
tab[0] = nomProduit;
tab[1] = prixHt;
tab[2] = quantite;
//création du tableau avec les 3 valeurs
//let tab = [nomProduit,prixHt, quantite];
//ajouter les colonnes au tableau avec la fonction push
//tab.push(nomProduit, prixHt, quantite);
tab.push(prixHt*quantite*1.20);
//version concatenation
console.log("Le prix TTC est égal à : "+Math.round(tab[3],2)+ " €");
//version template string
console.log(`Le prix TTC est égal à : ${Math.round(tab[3],2)} €`);





//Exemple boucle avec tableau :
let produits = [];
for(let i = 0;i< 2; i++){
    let produit = {
        'nom': prompt("Saisir le nom du produit"),
        'prixHt': parseFloat(prompt("Saisir le prix HT du produit")),
        'quantite': parseInt(prompt("Saisir la quantité du produit"))
    };
    produit.prixTtc = produit.prixHt*produit.quantite*1.2;
    produits.push(produit);
}





//Exercice 9 Tableau et boucle :
//Créer un algorithme qui va ajouter à un tableau users (tableau indexé) :
//à chaque tours de la boucle : 
-un utilisateur (user) (tableau associatif)  qui va contenir : 
             -> nom, prénom, age et un numéro de téléphone,
             (les valeurs seront récupérés avec des prompts)
-La boucle va tourner 5 fois,
Afficher dans la console le nom et le prénom de l'utilisateur qui est le plus jeune (tableau users).
Bonus : afficher dans les prompts (le numéro de l'utilisateur que vous ajoutez)
