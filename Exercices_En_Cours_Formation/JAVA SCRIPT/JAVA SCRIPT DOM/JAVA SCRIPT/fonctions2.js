function addTask(){
    const liste = document.getElementById('tasks');
    const texte = document.querySelector('#task').value;
    const paragraphe = document.createElement('p');
    paragraphe.textContent = texte;
    liste.appendChild(paragraphe);


}


//Exercice 14 DOM : 
//Ajouter les éléments HTML suivants dans votre page index.html :
-Titre h1 avec un texte à l'intérieur,
-Une div avec du texte à l'intérieur,
-Dans la div un paragraphe avec du texte à l'intérieur,
En JS :
Vous allez changer:
-la taille de la police du titre h1 en 14 px,
 -la police de la div et du paragraphe en Arial,
-la couleur du texte du paragraphe en vert,
-Ajouter un margin top à la div de 30 px,
Remplacer :
-le contenu du titre h1 par -> nouveau titre,
-le contenu du paragraphe -> nouveau contenu du paragraphe.
NB : En utilisant querySelector.
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 14</title>
    <script src="./script.js" async></script>
</head>
<body>
    <h1>titre</h1>
    <div>texte
        <p>texte</p>
    </div>
</body>
</html>

const titre = document.querySelector('h1');
titre.style.fontSize = "14px";
const section = document.querySelector('div');
const paragraphe = document.querySelector('p');
section.style.fontFamily = 'Arial';
paragraphe.style.fontFamily = 'Arial';
paragraphe.style.color = 'green';
section.style.marginTop = '30px';
titre.textContent = 'nouveau titre';
paragraphe.textContent = 'nouveau contenu du paragraphe';









//Exercice 15 DOM :
//Créer une page HTML qui va contenir les éléments suivants :
-Un titre h1 -> "Liste des utilisateurs",
-Une div,
-Dans la div ajouter :
        --1 balise img,
        --3 paragraphes,
Depuis l'objet JS ci-dessous (remplacer les valeurs par vos propres informations):
 const user = {
  'id' : 1,
  'nom': 'votre nom',
  'prenom': 'votre prénom',
  'age': votre age,
  'image' :'./logo.jpg'
}

-Ajouter un attribut id à la div qui va avoir en valeur -> (user.id),
-Remplacer le contenu des 3 paragraphes par les valeurs user.nom, user.prenom et user.age,
-Remplacer l'image par l'url contenu dans user.image
Mettre en forme en JS les éléments suivants :
-paragraphe nom, prenom, age : police taille 11 px, couleur blue,
-taille de l'image : 100 px de large et 100 px de long,
-Aligner l'image à en haut à droite et ajouter un margin de 10 px.
-remplacer la couleur de fond de la div : rgb(220, 220, 220).
NB : pour remplacer le contenu text d'un élément HTML, utilisez textContent

const user = {
    'id' : 1,
    'nom': 'Mithridate',
    'prenom': 'mathieu',
    'age': 44,
    'image' :'./logo.jpg'
}
const section = document.querySelector('div');
section.setAttribute('id', user.id);
const p1 = document.querySelector('p:nth-child(2)');
const p2 = document.querySelector('p:nth-child(3)');
const p3 = document.querySelector('p:nth-child(4)');
// Version node list
//récupérer les attributs dans une nodelist
const liste = document.querySelectorAll('p');
/*liste[0].textContent = user.nom;
liste[1].textContent = user.prenom;
liste[2].textContent = user.age; */
p1.textContent = user.nom;
p2.textContent = user.prenom;
p3.textContent = user.age;
const image = document.querySelector('img');
image.setAttribute('src', user.image);
//version alternative
/* image.src = user.image;
document.querySelector('img').setAttribute('src', user.image);
document.querySelector('img').src = user.image; */
p1.style.fontSize = "11px";
p2.style.fontSize = "11px";
p3.style.fontSize = "11px";
p1.style.color = 'bleu';
p2.style.color = 'bleu';
p3.style.color = 'bleu';
//version boucle for sur la node list
/* for(i = 0; i<liste.length; i++){
    liste[i].style.fontSize = '11px';
    liste[i].style.color = 'blue';
} */
//version forEach node List
/* liste.forEach(toto => {
    toto.style.fontSize = '11px';
    toto.style.color = 'blue';
}); */
image.style.width = '40px';
image.style.height = '40px';
image.style.float = 'right';
image.style.margin = '10px';
section.style.backgroundColor = 'rgb(220, 220, 220)';





//Exemple de récupération de valeurs dans des inputs :
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>récupération formulaire</title>
    <script src="./script.js" async></script>
</head>
<body>
    <h1>Liste des utilisateurs</h1>
    <input type="text" name="" id="nom">
    <input type="text" name="" id="prenom">
    <button id="bt" onclick="recup()">Ajouter</button>
</body>
</html>


//récupération des inputs html
const nom = document.querySelector('#nom');
const prenom = document.querySelector('#prenom');
//fonction recupération des valeurs
function recup(){
    console.log(nom.value);
    console.log(prenom.value);
}







Exercice 16 DOM :
Depuis l'exemple ci-dessus et la correction de l'exercice 11 (prix des chocolatines) :
-Dans la page HTML ajouter les éléments suivants :
      --un titre h1 (calculer le prix à payer),
      --un input de type text ( id = quantite),
      --un bouton (onclick = calculer()),
      --un paragraphe (id= resultat),
-Dans la partie JS :
créer une fonction qui va se nommer calculer et qui va éffectuer le calcul du prix à payer des chocolatines :
récupérer la valeur de l'input (id quantité) avec value,
afficher dans le paragraphe (id = résultat) le montant à payer.
Bonus : Tester si le champ quantité est vide 
      => afficher dans le paragraphe "Veuillez choisir un nombre de chocolatine"

      Partie HTML :
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EX 16 DOM Chocolatines</title>
    <script src="./script.js" async></script>
</head>
<body>
    <h1>Calculer le montant à payer :</h1>
    <label for="quantite">Saisir le nombre de chocolatines</label>
    <input type="text" name="quantite" id="quantite">
    <button id="bt" onclick="calculer()">Calculer</button>
    <p id="resultat"></p>
</body>
</html>

Partie JS :
function calculer(){
    //récupération de la valeur
    const quantite = parseInt(document.querySelector('#quantite').value);
    //récuparion de l'attribut resultat
    let resultat = document.querySelector('#resultat');
    //prix total
    let total = 0;
    const msg = "Le prix total est égal à : ";
    //prix des chocolatines
    let prixChoco = [1.4, 1.3, 1.20];
    //test si quantité est vide
    if(quantite ==""){
        total = "Veuillez renseigner le nombre de chocolatine";
    }
    //test si quantité n'est pas un nombre
    if(isNaN(quantite)){
        total = "Veuillez saisir une valeur numérique";
    }
    //test si quantité est égal à 0 ou inférieure
    if(quantite == 0 || quantite < 0){
        total = "Veuillez saisir une valeur supérieure à 0";
    }
    //test si quantité est un nombre
    if(!isNaN(quantite) && quantite !=0 && quantite > 0){
        //tester le prix pour la quantité comprise entre 1 et 10
        if(quantite > 0 && quantite <= 10){
            total = msg+quantite * prixChoco[0]+" €";
        }
        //tester le prix pour une quantité comprise entre 1 et 20
        else if (quantite >= 11 && quantite <= 20){
            total = msg+(10*prixChoco[0])+( quantite-10)*prixChoco[1]+" €";
        }
        //tester le prix pour une quantité supérieure 
        else{
            total = msg+(10*prixChoco[0])+(10*prixChoco[1])+(quantite-20)*prixChoco[2]+" €";
        }
    }
    //afficher le résultat
    resultat.textContent = total;
}








Exercice 17 DOM :
Transformer l'exercice 8 pour que le programme utilise des éléments HTML plutôt que des prompts et console.log.
Partie HTML 
Ajouter  les éléments suivants :
-un titre h1 -> calculer le prix TTC,
-un input de (type text, id = prixHt),
-un input de (type text, id = quantite),
-un bouton (onclick =calculer()),
-un paragraphe (id= resultat),
Partie JS :
Créer une fonction calculer :
-récupérer les valeurs des 2 inputs,
-refaire le calcul comme dans l'exercice 8 (correction),
-Afficher le résultat dans le paragraphe (id= resultat)

Partie JS :
function calculer(){
    //Récupération des 3 inputs de la page HTML
    const nom = document.querySelector('#nom').value;
    const prixHt = parseFloat(document.querySelector('#prixHt').value);
    const quantite = parseInt(document.querySelector('#quantite').value);
    //Récuperation de la zone (afficher le résultat)
    const resultat = document.querySelector('#resultat');
    let total = 0;
    //tester si les champs sont bien remplis
    if(prixHt == "" || quantite=="" || isNaN(prixHt) || isNaN(quantite) || nom ==""){
        total = "Veuillez renseigner les valeurs avec des nombres";
    }
    else{
        total = "Le prix total de "+nom+" est égal à : "+(prixHt*quantite*1.20).toFixed(2)+" €";
    }
    resultat.textContent = total;
}

Partie HTML :
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./script.js" async></script>
    <title>Exercice 16 DOM Chocolatines</title>
</head>
<body>
    <h1>Calculer le prix à payer</h1>
    <label for="nom">Saisir le nom du produit</label>
    <input type="text" name="nom" id="nom">
    <label for="prixHt">saisir le prix HT</label>
    <input type="text" name="prixHt" id="prixHt">
    <label for="quantite">Saisir la quantité </label>
    <input type="text" name="quantite" id="quantite">
    <input type="button" value="Calculer" onclick="calculer()">
    <p id="resultat"></p>
</body>
</html>







Exemple createElement HTML / JS :
let compteur = 1;
function ajouter(){
    //récupération de l'élément HTML (ajouter des titres)
    const liste = document.getElementById('resultat');
    //création d'un élément HTML
    const titre = document.createElement('h1');
    //ajout d'un attribut id
    titre.setAttribute('id', compteur++);
    //récupération de l'input HTML (#texte)
    const texte = document.querySelector('#texte').value;
    //assigner la valeur de texte
    titre.textContent = texte;
    //ajouter un enfant à la liste
    liste.appendChild(titre);
}

<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./script.js" async></script>
    <title>Exemple CreateElement JS</title>
</head>
<body>
    <input type="text" id="texte">
    <button onclick="ajouter()">Ajouter</button>
    <div id="resultat">
    </div>
</body>
</html>








//Exercice 18 DOM :
//En vous inspirant de l'exemple ci-dessus :
Partie HTML :
-un titre h1 = liste des tâches,
-un input de type text (id= task),
-un bouton (id = add, onclick = addTask()) texte Ajouter,
-un bouton (id = delAllTask, onclick = delAllTask()) texte Tout Supprimer,
-un bouton (id = reload, onclick = reload()) texte Recharger la page,
-une div (id = tasks)
Partie JS :
-Créer une fonction addtask qui va ajouter à chaque clic sur le bouton une nouvelle tache à la div (id = task),:
-Récupérer la div (tasks)
Récupérer la valeur de l'input (id task),
-Créer un paragraphe,
Ajouter la valeur de l'input (id task)  au paragraphe,
Ajouter le paragraphe à la div (id = tasks)
-Créer une fonction delAllTask qui va à chaque clic sur le bouton supprimer tous les enfants (child) contenu dans la div (tasks),
-Créer une fonction reload qui va à chaque clic sur le bouton recharger la page.


//Ajouter
function addTask(){
    const liste = document.getElementById('tasks');
    const texte = document.querySelector('#task').value;
    const paragraphe = document.createElement('p');
    paragraphe.textContent = texte;
    liste.appendChild(paragraphe);
}

//Supprimer tout
function delAllTask(){
    const liste = document.getElementById('tasks');
    while(liste.firstChild){
        liste.removeChild(liste.firstChild);
    }
}

//Rafraichir la page
function reload(){
    location.reload();
}





















