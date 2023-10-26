/*<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./script.js" async></script>
    <title>Ecouteur événement</title>
</head>
<body>
    <button id="bt1">bouton 1</button>
    <button id="bt2">bouton 2</button>
</body>
</body>
</html>

//Récupération des éléments HTML
const bt1 = document.querySelector('#bt1');
const bt2 = document.querySelector('#bt2');
const listeBt = document.querySelectorAll("button");

//ajout d'un événement click (bouton 1)
bt1.addEventListener('click', (e)=>{
    console.log('j\'ai cliqué sur ce super bouton numéro 1');
});

//ajout d'un événement click (bouton 2)
bt2.addEventListener('click', (e)=>{
    console.log('j\'ai cliqué sur ce super bouton numéro 2');
    //équivalent (this) dans onclick (html)
    //console.log(e.target);
});

console.log(listeBt);
//ajouter un événement click sur tous les boutons 
listeBt.forEach(element=>{
    element.addEventListener('click', ()=>{
        //équivalent de (this) comme dans onclick en (HTML) pour récupérer l'élément cliqué
        console.log(element);
    });
});
*/





/*
Exercice 21 DOM écouteur événement :
Depuis l'énoncé de l'exercice 8 :
-Ajouter dans la page :
--3 inputs de type text : (id= nom, id = prixHt, id=quantite)
--1 input de type button (id= bt),
--1 paragraphe (id= resultat)
Créer un écouteur d'événement 'click ' sur le bouton (id=bt) qui va exécuter le traitement suivant :
-Récupérer le contenu des 3 inputs dans des variables,
-Vérifier si les champs sont remplis, 
     ->Si les champs ne sont pas remplis -> modifier la couleur de fond des inputs vide en rouge
     ->Si les champs sont remplis -> modifier la couleur des inputs en vert,
                                                             -> effectuer le calcul du prixTTC (prixHt x quantite x 1.20)
                                                             -> afficher dans resultat la sortie du calcul (le prix TTC est  égal à : ... €)

//REPONSE EXO 21
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./script.js" async></script>
    <title>Ecouteur événement 21</title>
</head>
<body>
    <div>
        <label for="nom">Saisir le nom du produit :</label>
        <input type="text" name="nom" id="nom">
        <label for="prixHt">Saisir le prix HT :</label>
        <input type="text" name="prixHt" id="prixHt">
        <label for="quantite">Saisir la quantite :</label>
        <input type="text" name="quantite" id="quantite">
        <input type="button" value="Calculer" id="bt">
    </div>
    <p id="resultat"></p>
</body>
</body>
</html>

//JS
//récupération du paragraphe (pour afficher le résultat du calcul)
const resultat = document.querySelector('#resultat');
//liste des inputs text
const inputs = document.querySelectorAll('input[type="text"]');
//le bouton bt
const bt = document.querySelector('#bt');
//ajouter un écouteut événement click sur le bouton
bt.addEventListener('click', ()=>{
    //tester si les champs sont remplis (boucle)
    for(let i = 0; i<inputs.length; i++){
        //si vide
        if(inputs[i].value== ""){
            inputs[i].style.backgroundColor = 'red';
        }
        //si rempli
        else{
            inputs[i].style.backgroundColor = 'green';
        }
        //version opérateur ternaire
        //inputs[i]==""?inputs[i].style.backgroundColor = 'red': inputs[i].style.backgroundColor = 'green';
    }
    //tester les valeurs pour le calcul
    if(!isNaN(inputs[1].value )&&!isNaN(inputs[2].value ) && inputs[1].value >0 && inputs[2].value >0){
        resultat.textContent = "Le prix TTC de l'article : "+inputs[0].value +" est égal à : "+(parseInt(inputs[1].value) * parseFloat(inputs[2].value) *1.20).toFixed(2)+ " €";
    }
    //test si les valeurs ne correspondent pas à des nombres ou plus petite que 0
    else{
        resultat.textContent = "Les données saisies sont incorrectes";
    }
});
*/










//RESULTAT NON TERMINE EXO 21
let resultat = document.querySelector('#resultat');
const bt = document.querySelector('#bt');

bt.addEventListener('click', ()=>{
    let inputs = document.querySelectorAll('input[type="text"]');
    for (let i = 0; i < inputs.length; i++){
        if(inputs[i].value == ""){
            inputs[i].style.backgroundColor = 'red';
        }else{
            inputs[i].style.backgroundColor = 'green';
        }
    }
});



