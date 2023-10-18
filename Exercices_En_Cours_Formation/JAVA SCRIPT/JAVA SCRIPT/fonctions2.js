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
let indice = 0;
let users = [];
for(let i = 0; i<5; i++){
    let user = {
        'nom': prompt("user num "+(i+1)+" Saisir le nom :"),
        'prenom':prompt("user num "+(i+1)+" Saisir le prénom"),
        'age':prompt("user num "+(i+1)+" Saisir l'age"),
        'tel':prompt("user num "+(i+1)+" Saisir le numéro")
    }
    //version avec indice
    //users[i] = user;
    //version avec push
    users.push(user);
}
let minAge = users[0].age;
for(let i = 0; i<users.length; i++){
    //compare si l'age de la colonne est plus petit que l'age de minAge
    if(users[i].age < minAge){
        //remplacer les valeur age minimum
        minAge = users[i].age;
        //remplacer la valeur de la colonne (indice du tableau)
        indice = i;
    }
}
console.log("L'utilisateur le plus jeune est : "+users[indice].prenom+" "+users[indice].nom);


//Correction exercice 9 bis :
//tableau qui va stocker la liste des utilisateurs
let users = [];
//boucle qui va créer 5 utilisateurs
for(let i = 0; i < 3; i++){
    let user = {
        'nom': prompt("Saisir le nom de l'utilisateur N° : "+(i+1)),
        'prenom': prompt("Saisir le prénom de l'utilisateur N° : "+(i+1)),
        'age': prompt("Saisir l'age de l'utilisateur N° : "+(i+1)),
        'tel': prompt("Saisir le numéro de téléphone de l'utilisateur N° : "+(i+1))
    }
    //version avec push
    users.push(user);
    //version avec les indices
    //users[i] = user;
}
/* let minAge = users[0].age; */
let indice = 0;
//parcourir le tableau users 
for(let i = 0; i<users.length; i++){
    //tester si l'age est plus petit que minAge
    if(users[i].age < users[indice].age){
        indice = i;
    }
}
console.log("L'utilisateur "+users[indice].nom+" "+users[indice].prenom+" est le plus jeune");







//Exercice 10 Boucle :
/Un enseignant a besoin de saisir les notes de ses élèves.
//Il a également besoin depuis ces notes de calculer la moyenne.
//Écrire le programme qui permet de saisir la liste des notes (dans un prompt), les stocker dans un tableau et retourner la moyenne du devoir (afficher dans la console).
//tableau qui va stocker les nombres
let notes = [];
//variable qui stocke le nombre de notes
nbrNotes = parseInt(prompt("Choisir le nombre de notes à saisir"));
//compteur
let i = 0;
//somme
let somme = 0;
//valide (tant que le format de données est correct)
let valide = true;
//boucle pour ajouter les notes et calculer la somme
while(i < nbrNotes && valide){
    //ajout d'une note
    let note = parseInt(prompt("Saisir la note de l'èléve"));
    //test si la note est bien un nombre entier
    if(Number.isInteger(note)){
        //ajouter la note au tableau
        notes[i] = note;
        //ajouter a la somme des notes
        somme += notes[i]; 
    }
    //test sinon le format est incorrect
    else{
        //on passe valide à false
        valide = false;
    }
    //on incremente le compteur
    i++;
}
//test si valide vaut true
if(statut){
    //affiche la moyenne
    console.log(somme/nbrNotes);

}
//sinon on affiche une erreur
else{
    console.log("Vous avez une note invalide");
}







//Exercice 11 Conditions  :
//Une boulangerie vend des chocolatines. Pour calculer le prix qu'elle va facturer a ses clients elle a besoin d'un programme. 
//-Une chocolatine coûte 1€40 a l'unité jusqu'à 10. 
//-Les 10 suivantes coûtent 1€30 pièce et 
//-Au-delà elles coûtent 1€20 pièce.
//Écrire un programme qui calcule le prix à payer  en fonction de la quantité (depuis un prompt) 
//Afficher dans la console le montant à payer.
//quantité de chocolatine
let nbrChoco = parseInt(prompt("Saisir le nombre de chocolatine"));
//prix total
let total = 0;
//prix des chocolatines
let prixChoco = [1.4, 1.3, 1.20];
//tester le prix pour la quantité comprise entre 1 et 10
if(nbrChoco > 0 && nbrChoco <= 10){
    total = nbrChoco * prixChoco[0];
}
//tester le prix pour une quantité comprise entre 1 et 20
else if(nbrChoco >= 11 && nbrChoco <= 20){
    total = (10*prixChoco[0])+((nbrChoco-10)*prixChoco[1]);
}
//tester le prix pour une quantité supérieure 
else{
    total = (10*prixChoco[0])+(10*prixChoco[1])+((nbrChoco-20)*prixChoco[2]);
}
//afficher dans la console
console.log("Le prix total est égal à : "+total);
//afficher dans un popup
alert("Le prix total est égal à : "+total);






//Exercice 11 BIS Conditions  :
let quantité = prompt("nombre de choco");
let inferieur10prix = (1.40 * quantité);
if(quantité <= 10){
    console.log(inferieur10prix);
}
let superieur10prix = [(quantité - 10) * 1.3 + 14];
if(quantité > 10 && quantité <= 20){
    console.log(superieur10prix);
}
let superieur20prix = [(quantité - 20) * 1.20 + 27];
if(quantité > 20){
    console.log(superieur20prix);
}









//Exercice 12 Boucles :
//Pour son nouveau spectacle, un mentaliste a besoin d'un programme pour s'exercer à deviner un nombre entre 1 et 100.
//Pour réussir son tour il doit deviner le nombre en moins de 10 tentatives.
//A chaque tour il va demander si le nombre qu’il énonce est plus petit ou plus grand que le nombre choisi.
//-Si il réussit à découvrir le nombre en moins de 10 essais 
//            -> son entrainement acharné a payé, 
//-Sinon 
 //          -> il est un mauvais mentaliste et il va devoir changer de métier.
//Il souhaite savoir en cas de réussite (en moins de 10 essais) 
 //          -> le nombre d'essai qu'il a effectué pour trouver le nombre.
//nombre random à trouver
let nbrATrouve = numberRandom(100);
console.log(nbrATrouve);
//nombre de tour de jeu
let tour = 1;
//première tentative
let nbrTrouve = prompt("Saisir le nombre à trouver");
//boucle pour le jeu
while(nbrATrouve != nbrTrouve && tour < 10){
    //condition si le nombre est trop grand
    if(nbrTrouve > nbrATrouve){
        alert("Saisir un nombre plus petit");
    }
    //condition si le nombre est trop petit
    if(nbrTrouve < nbrATrouve){
        alert("Saisir un nombre plus Grand");
    }
    //incrémenter le tour
    tour++;
    //redemander la saisie d'un nombre
    nbrTrouve = prompt("Saisir le nombre à trouver");
}
//condition de victoire
if(nbrATrouve==nbrTrouve){
    alert("Bravo tu as gagné en : "+tour+" tours");
}
//condition de défaite
if(tour > 9){
    alert("Vous avez perdu vous pouvez changer de métier !");
}
//fonction qui génére un nombre random
function numberRandom(nbr){
    return Math.floor((Math.random() * nbr) + 1);
}








//Exercice 13 Boucles :
//Nous avons un jeu de dés que nous souhaitons automatiser.
//Les règles de ce jeu de dès sont les suivantes :
//-Il y à 2 participants : la banque et le joueur.
//-Le jeu dure 5 tours.
//-A chaque tour :
//    --La banque lance un dès de 6 faces (score 1 à 6).
//    --Le joueur lance un dès de 6 faces (score 1 à 6).
 //   --Si le joueur fait plus que la banque, ajouter 1 pts au score du joueur,
//    --Si le joueur fait le même lancé que la banque, ajouter 2 pts au score du joueur.
 //   --Si le joueur fait moins que la banque, ajouter 1 pts au score de la banque.
//-A la fin des 5 tours le gagnant est celui qui a le score le plus élevé.
//-> Afficher le gagnant et son score (nbr de pts).
