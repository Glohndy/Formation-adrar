Exemple formulaire et traitement Super Globale GET et POST :

    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
        <input type="text" name="nom">
        <input type="text" name="prenom">
        <input type="email" name="email">
        <input type="submit" value="envoyer" name="submit">
    </form>
    <form action="" method="post">
        <input type="text" name="nom">
        <input type="submit" value="envoyer" name="submit2">
    </form>
</body>
</html>
<?php
if(isset($_POST["submit"])){
    if(!empty($_POST["nom"])AND !empty($_POST["prenom"]) AND !empty($_POST["email"])){
        echo "le nom est : ".$_POST["nom"]."<br>";
        echo "le prenom est : ".$_POST["prenom"]."<br>";
        echo "le mail est : ".$_POST["email"]."<br>";
    }
    else{
        echo "Veuillez remplir tous les champs du formulaire";
    }
}
?>

Version avec redirection des erreurs :

//index.php
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="./resultat.php" method="post">
        <input type="text" name="nom">
        <input type="text" name="prenom">
        <input type="email" name="email">
        <input type="submit" value="envoyer" name="submit">
    </form>
    <form action="" method="post">
        <input type="text" name="nom">
        <input type="submit" value="envoyer" name="submit2">
    </form>
    <p id="error">
    <?php
        //tester si le paramètre error existe
        if(isset($_GET["error"])){
            echo "Veuillez remplir tous les champs du formulaire";
        }
    ?>
    </p>
</body>
</html>

//resultat.php
<?php
    if(isset($_POST["submit"])){
        if(!empty($_POST["nom"])AND !empty($_POST["prenom"]) AND !empty($_POST["email"])){
            echo "le nom est : ".$_POST["nom"]."<br>";
            echo "le prenom est : ".$_POST["prenom"]."<br>";
            echo "le mail est : ".$_POST["email"]."<br>";
        }
        else{
            header("Location:./index.php?error=1");
        }
    }
?>

redirection (décalage en seconde ) :
header("Refresh: 3;url=./index.php");


Exercice 14 Formulaire :
partie HTML :
créer une page index.php qui va contenir un formulaire :
-avec la méthode POST
-un input text (name : nbr1),
-un input text (name: nbr2),
-un bouton submit,
partie PHP :
-tester si le formulaire est submit,
-Tester si les champs nbr1 et nbr2 sont remplis,
-additionner les 2 nombres,
-Afficher le résultat de l'opération sous la forme :
L'addition des 2 valeurs est égale : résultat


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>exercice 14 :</title>
</head>
<body>
    <form action="" method="post">
        <label for="nbr1">saisir un nombre</label>
        <input type="text" name="nbr1">
        <label for="nbr2">saisir un nombre</label>
        <input type="text" name="nbr2">
        <input type="submit" value="calculer" name="submit">
    </form>
</body>
</html>

<?php
    //test si le bouton est cliqué
    if(isset($_POST["submit"])){
        if(!empty($_POST["nbr1"]) AND !empty($_POST["nbr2"])){
            //test si c'est des nombres
            if(is_numeric($_POST["nbr1"]) AND is_numeric($_POST["nbr2"])){
                $resultat = $_POST["nbr1"]+$_POST["nbr2"];
                echo "La somme des 2 nombres est égale à : ".$resultat;
            }
            else{
                echo "Veuillez renseigner des nombres";
            }
            
        }   
        else{
            echo "Veuillez remplir tous les champs du formulaire";
        }
    }
?>



Exercice 15 Formulaire :
Partie HTML :
créer une page index.php qui va contenir un formulaire :
-avec la méthode POST
-un input text (name : nbr1),
-un input text (name: nbr2),
-un input text (name: operateur),
-un bouton submit,
Partie PHP :
-tester si le formulaire est submit,
-tester si les champs sont remplis,
-tester la valeur de operateur :
si c'est "+" -> addition des 2 nombres,
si c'est "-" -> soustraction des 2 nombres,
si c'est "/" -> division des 2 nombres,
si c'est "*" -> multiplication des 2 nombres.
-Afficher le résultat de l'opération dans la page.

Bonus :
-Tester si l'opérateur est différent de  " + - / ou * ",
Afficher une erreur l'opération n'existe pas.
-Tester si le 2 éme nombre vaut 0 (division par zero)
Afficher la division par zéro est impossible,


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>exercice 14 :</title>
</head>
<body>
    <form action="" method="post">
        <label for="nbr1">saisir un nombre</label>
        <input type="text" name="nbr1">
        <label for="nbr2">saisir un nombre</label>
        <input type="text" name="nbr2">
        <label for="operateur">saisir un opérateur (+ - / *)</label>
        <input type="text" name="operateur">
        <input type="submit" value="calculer" name="submit">
    </form>
</body>
</html>

<?php
    //test si le bouton est cliqué
    if(isset($_POST["submit"])){
        //test si les champs ne sont pas vides ou nbr2 vaut zero
        if(!empty($_POST["nbr1"]) AND ($_POST["nbr2"] != "" OR is_numeric($_POST["nbr2"])) AND !empty($_POST["operateur"])){
            //test si c'est des nombres
            if(is_numeric($_POST["nbr1"]) AND is_numeric($_POST["nbr2"])){
                $operateur = $_POST["operateur"];
                $nbr1 = $_POST["nbr1"];
                $nbr2 = $_POST["nbr2"];
                //test de l'opérateur
                switch ($operateur) {
                    case '+':
                        echo "Le résultat est égal à : ".$nbr1+$nbr2;
                        break;
                    case '-':
                        echo "Le résultat est égal à : ".$nbr1-$nbr2;
                        break;
                    case '/':
                        //test si $nbr2 vaut 0
                        if($nbr2 === "0"){
                            echo "division par zéro impossible";
                        }
                        //test sinon on fait la division
                        else{
                            echo "Le résultat est égal à : ".$nbr1/$nbr2;
                        }
                        break;
                    case '*':
                        echo "Le résultat est égal à : ".$nbr1*$nbr2;
                        break;
                    case '**':
                        echo "Le résultat est égal à : ".$nbr1**$nbr2;
                        break;
                    default:
                        echo "L'opération est impossible";
                        break;
                }
            }
            //test sinon ce n'est pas des nombres
            else{
                echo "Veuillez renseigner des nombres";
            }
            
        }
        //test sinon les champs sont vides  
        else{
            echo "Veuillez remplir tous les champs du formulaire";
        }
    }
?>



Exemple inport de fichier :

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>transferer un fichier</title>
</head>
<body>
    <form action="" method="post" enctype="multipart/form-data">
        <label for="nom">Saisir le nom</label>
        <input type="text" name="nom">
        <label for="prenom">Saisir le prenom</label>
        <input type="text" name="prenom">
        <label for="image">importer une image</label>
        <input type="file" name="image">
        <input type="submit" value="envoyer" name="submit">
    </form>
</body>
</html>
<?php
    //tester si le bouton
    if(isset($_POST['submit'])){
        echo '<pre>';
        var_dump($_FILES["image"]);
        echo '</pre>';
        $ext = getFileExtension($_FILES["image"]["name"]);
        //test si l'extension est png, jpg, jpeg
        if($ext === "png" OR $ext === "PNG" OR $ext === "jpg" OR $ext === "JPG" OR $ext === "jpeg" OR $ext === "JPEG"){
            //test si le fichier est plus petit que 10 Mo
            if($_FILES["image"]["size"] <= 102401024){
                 move_uploaded_file($_FILES["image"]["tmp_name"],'./image/'.$_FILES["image"]["name"]);
            }
            //sinon on affiche trop grand
            else{
                echo "Le fichier est trop grand";
            }
        }
        //sinon on affiche le format est incorrect
        else{
            echo "le format est incorrect";
        }
    }
function getFileExtension($file){
    return substr(strrchr($file,'.'),1);
}
?>





Exercice 16 super globale POST et FILES :
Partie HTML :
Ajouter dans le fichier un formulaire HTML qui va contenir les éléments suivants :
-1 input de type text name : nom,
-1 input de type text name : prenom,
-1 input de type email name : email,
-1 input de type password name : password,
-1 input de type file name : fichier,
-1 input de type submit name : submit
Partie PHP :
-Vérifier si le formulaire est submit,
-Vérifier si les champs sont bien remplis (nom, prénom, email, passord),
-Si les champs sont vides -> afficher un message "veuillez remplir tous les champs du formulaire",
-vérifier si un fichier à été importé $_FILES["fichier"]["tmp_name"],
-Si le fichier est importé -> déplacer dans un répertoire fichier,
-Sinon ne rien importer ->  afficher un message "il n'y a pas de fichier"

Bonus : 
Vérifier si le format est : png, jpg, jpeg et pdf,
Vérifier si le taille du fichier est plus petit que 1 Mo


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post" enctype="multipart/form-data">
        <label for="nom">Saisir le nom</label>
        <input type="text" name="nom">
        <label for="prenom">Saisir le prénom</label>
        <input type="text" name="prenom">
        <label for="email">Saisir le mail</label>
        <input type="email" name="email">
        <label for="password">Saisir le mot de passe</label>
        <input type="password" name="password">
        <label for="fichier">Ajouter un fichier</label>
        <input type="file" name="fichier">
        <input type="submit" value="Ajouter" name="submit">
    </form>
</body>
</html>
<?php
    //vérifier si le formulaire est submit
    if(isset($_POST["submit"])){
        //tester si les champs sont remplis
        if($_POST["nom"] !="" AND $_POST["prenom"] !="" AND $_POST["email"]!="" AND $_POST["password"]!=""){
            //test si le fichier est importé
            if($_FILES["fichier"]["tmp_name"] !=""){
                move_uploaded_file($_FILES["fichier"]["tmp_name"], "./fichier/".$_FILES["fichier"]["name"]);
            }
            //test sinon le fichier n'existe pas
            else{
                echo "il n'y a pas de fichier";
            }
        }
        //test si les champs ne sont pas tous remplis
        else{
            echo "veuillez remplir tous les champs du formulaire";
        }
    }



Correction exercice 16 Bonus :
Partie PHP :
//vérifier si le formulaire est submit
    if(isset($_POST["submit"])){
        //tester si les champs sont remplis
        if($_POST["nom"] !="" AND $_POST["prenom"] !="" AND $_POST["email"]!="" AND $_POST["password"]!=""){
            //test si le fichier est importé
            if($_FILES["fichier"]["tmp_name"] !=""){
                //récupération de l'extension du fichier
                $ext = strtolower(getFileExtension($_FILES["fichier"]["name"]));
                //test si l'extension du fichier (png, jpg, jpeg et pdf)
                if($ext === "png" OR $ext === "jpg" OR $ext === "jpeg" OR $ext === "pdf"){
                    //tester si la taille du fichier est inférieure ou égale à 1 Mo 10241024
                    if($_FILES["fichier"]["size"] <= 10241024){
                        //déplacement du fichier dans le répertoire fichier (à la racine du projet)
                        move_uploaded_file($_FILES["fichier"]["tmp_name"], "./fichier/".$_FILES["fichier"]["name"]);
                        echo "le fichier à bien été importé";
                    }
                    //test si le fichier est plus grand que 1 Mo (10241024 octés)
                    else{
                        echo "La taille du fichier est trop grande";
                    }
                }
                //test si l'extension du fichier n'est pas (png, jpg, jpeg et pdf)
                else{
                    echo "l'extension du fichier est invalide";
                }
            }
            //test sinon le fichier n'existe pas
            else{
                echo "il n'y a pas de fichier";
            }
        }
        //test si les champs ne sont pas tous remplis
        else{
            echo "veuillez remplir tous les champs du formulaire";
        }
    }
    function getFileExtension($file){
        return substr(strrchr($file,'.'),1);
    }




    Exemple de template PHP :

    home.php :
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>page accueil</title>
</head>
<body>
    <header>
        <?php 
            include './navbar.php';
        ?>
    </header>
    <!-- corp de ma page-->
    <form action="" method="post">
        <label for="name">saisir le nom</label>
        <input type="text" name="nom">
        <input type="submit" value="envoyer">
    </form>
    <?php
        require './footer.php';
    ?>
</body>
</html>

navbar.php :
<nav class="navbar">
    <ul>
        <li><a href="">home</a></li>
        <li><a href="">inscription</a></li>
        <li><a href="">connexion</a></li>
        <li><a href="">liste des articles</a></li>
        <li><a href="">contact</a></li>
    </ul>
</nav>

footer.php :
<footer>
    <ul>
        <li><a href="">Condition CGV</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">mentions légales</a></li>
        <li><a href="">réseaux sociaux</a></li>
    </ul>
</footer>

Fonction pour nettoyer les entrées utilisateurs :
function cleanInput(?string $value):?string{
    return htmlspecialchars(strip_tags(trim($value)),ENT_NOQUOTES);
}





Exemple de requête depuis un formulaire :
    connectBdd.php:
<?php
    $bdd = new PDO('mysql:host=localhost;dbname=cyberdev',
    'root','',
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post" enctype="multipart/form-data">
        <label for="nom">Saisir le nom</label>
        <input type="text" name="nom">
        <label for="prenom">Saisir le prénom</label>
        <input type="text" name="prenom">
        <input type="submit" value="Ajouter" name="submit">
    </form>
</body>
</html>
<?php
    include './utils.php';
    include './connectBdd.php';
    echo '<pre>';
    var_dump(showAllUser($bdd));
    echo '</pre>';
    //vérifier si le formulaire est submit
    if(isset($_POST["submit"])){
        //tester si les champs sont remplis
        if($_POST["nom"] !="" AND $_POST["prenom"] !=""){
            inject($_POST["nom"],$_POST["prenom"],$bdd);
            //ajouterUtilisateur($_POST["nom"],$_POST["prenom"],$bdd);
        }
        //test si les champs ne sont pas tous remplis
        else{
            echo "veuillez remplir tous les champs du formulaire";
        }
    }
function ajouterUtilisateur(string $nom, string $prenom, $bdd){
    $bdd->query("INSERT INTO utilisateur(nom,prenom) VALUE('$nom', '$prenom')");
}

function ajouterUtilisateurPrepareV1(string $nom, string $prenom, $bdd){
    $requete = $bdd->prepare("INSERT INTO utilisateur(nom,prenom) VALUE(:nom, :prenom)");
    $requete->execute(
        ["nom"=>$nom,"prenom"=>$prenom]
    );
}
function ajouterUtilisateurPrepareV2(string $nom, string $prenom, $bdd){
    $requete = $bdd->prepare("INSERT INTO utilisateur(nom,prenom) VALUE(?,?)");
    $requete->bindParam(1,$nom,PDO::PARAM_STR);
    $requete->bindParam(2,$prenom,PDO::PARAM_STR);
    $requete->execute();
}
function inject(string $nom, string $prenom, $bdd){
    $bdd->query("SELECT id, nom, prenom FROM utilisateur WHERE nom = '$nom' AND '$prenom'");
}
function showAllUser($bdd){
    $requete = $bdd->prepare("SELECT id,nom,prenom FROM utilisateur");
    $requete->execute();
    $data = $requete->fetchAll(PDO::FETCH_ASSOC);
    return $data;
}
//SQL
create database cyberdev;
use cyberdev;
create table utilisateur (
id int primary key auto_increment not null,
nom varchar(50) not null,
prenom varchar(50) not null
);










Exemple de requête et affichage dans une page :

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post" enctype="multipart/form-data">
        <label for="nom">Saisir le nom</label>
        <input type="text" name="nom">
        <label for="prenom">Saisir le prénom</label>
        <input type="text" name="prenom">
        <input type="submit" value="Ajouter" name="submit">
    </form>
</body>
</html>
<?php
    include './utils.php';
    include './connectBdd.php';
    //récupération de la liste de tous les utiliateurs
    $users = showAllUser($bdd);
    //récupération de l'utilisateur qui a comme id = 1
    $user = showUserById(2, $bdd);
    //boucle for pour afficher la liste des utilisateurs (fetchAll)
    for ($i=0; $i < count($users); $i++) { 
        echo "<p> id : ".$users[$i]["id"]." nom : ".$users[$i]["nom"]." prenom : ".$users[$i]["prenom"]."<p>";
    }
    //boucle foreach pour afficher la liste des utilisateurs (fetchAll)
    foreach ($users as $key) {
        echo "<p> id : ".$key["id"]." nom : ".$key["nom"]." prenom : ".$key["prenom"]."<p>";
    }
    if($user){
        //version fetch afficher un utilisateur 
        echo "<p> id : ".$user["id"]." nom : ".$user["nom"]." prenom : ".$user["prenom"]."<p>";
    }
    else{
        echo "l'utilisateur n'existe pas";
    }
    //vérifier si le formulaire est submit
    if(isset($_POST["submit"])){
        //tester si les champs sont remplis
        if($_POST["nom"] !="" AND $_POST["prenom"] !=""){
            inject($_POST["nom"],$_POST["prenom"],$bdd);
            //ajouterUtilisateur($_POST["nom"],$_POST["prenom"],$bdd);
        }
        //test si les champs ne sont pas tous remplis
        else{
            echo "veuillez remplir tous les champs du formulaire";
        }
    }
function ajouterUtilisateur(string $nom, string $prenom, $bdd){
    $bdd->query("INSERT INTO utilisateur(nom,prenom) VALUE('$nom', '$prenom')");
}

function ajouterUtilisateurPrepareV1(string $nom, string $prenom, $bdd){
    $requete = $bdd->prepare("INSERT INTO utilisateur(nom,prenom) VALUE(:nom, :prenom)");
    $requete->execute(
        ["nom"=>$nom,"prenom"=>$prenom]
    );
}
function ajouterUtilisateurPrepareV2(string $nom, string $prenom, $bdd){
    $requete = $bdd->prepare("INSERT INTO utilisateur(nom,prenom) VALUE(?,?)");
    $requete->bindParam(1,$nom,PDO::PARAM_STR);
    $requete->bindParam(2,$prenom,PDO::PARAM_STR);
    $requete->execute();
}
function inject(string $nom, string $prenom, $bdd){
    $bdd->query("SELECT id, nom, prenom FROM utilisateur WHERE nom = '$nom' AND '$prenom'");
}
function showAllUser($bdd){
    $requete = $bdd->prepare("SELECT id,nom,prenom FROM utilisateur");
    $requete->execute();
    $data = $requete->fetchAll(PDO::FETCH_ASSOC);
    return $data;
}

function showUserById(int $id,$bdd){
    $requete = $bdd->prepare("SELECT id,nom,prenom FROM utilisateur WHERE id = ?");
    $requete->bindParam(1,$id,PDO::PARAM_INT);
    $requete->execute();
    $data = $requete->fetch(PDO::FETCH_ASSOC);
    return $data;
}








exercice 17 SQL :
-Partie SQL : 
Créer une base de données qui va contenir :
-une table utilisateur (nom, prenom, email, password)
-Partie PHP :
-importer le fichier bddConnect.php (avec les bons paramètres nom_bdd, login_bdd et password_bdd)
-Créer une fonction qui va ajouter un utilisateur en BDD (insert)
-Vérifier si le formulaire est submit,
-Tester si les 4 champs sont bien remplis,
-Si les champs ne sont pas tous remplis afficher -> "veuillez remplir les champs du formulaire"
-Appeler la fonction qui fait la requête SQL (insert)
-Afficher un message pour indiquer que l'utilisateur est enregistré en BDD
-Partie HTML :
Un formulaire qui va contenir les éléments suivants :
-Un input text (nom),
-Un input text (prenom),
-Un input email (email),
-Un input password (password),
-Un input submit (submit).

Bonus :
hasher le password en utisant la méthode md5,
Enregistrer le mot de passe hashé (pas la version en clair du formulaire).
https://www.php.net/manual/fr/function.md5

Correction Exercice 17 :
Partie SQL :
create database cyberdev2;
use cyberdev2;
create table utilisateur (
id int primary key auto_increment not null,
nom varchar(50) not null,
prenom varchar(50) not null,
email varchar(50) not null,
password_utilisateur varchar(100) not null
);



Partie HTML :
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajouter un utilisateur</title>
</head>
<body>
    <form action="" method="post">
        <label for="nom">Saisir votre nom :</label>
        <input type="text" name="nom">
        <label for="prenom">Saisir votre prénom :</label>
        <input type="text" name="prenom">
        <label for="email">Saisir votre email :</label>
        <input type="email" name="email">
        <label for="password_utilisateur">Saisir votre mot de passe :</label>
        <input type="password" name="password_utilisateur">
        <input type="submit" value="Ajouter" name="submit">
    </form>
</body>
</html>


Partie Connexion BDD :
<?php
    $bdd = new PDO('mysql:host=localhost;dbname=cyberdev2',
    'root','',
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
?>


Partie PHP :
<?php 
    //import de la connexion à la BDD
    include './connectBdd.php';
    //récupération des données du formulaire
    //tester si le bouton est cliqué
    if(isset($_POST["submit"])){
        //tester si les champs sont remplis
        if(!empty($_POST["nom"]) AND !empty($_POST["prenom"]) 
        AND !empty($_POST["email"]) AND !empty($_POST["password_utilisateur"])){
            ajouterUtilisateur($_POST["nom"], $_POST["prenom"], $_POST["email"], $_POST["password_utilisateur"],$bdd);
            echo "L'utilisateur ".$_POST["nom"]." a été ajouté en BDD";
        }
    }
   
    //Fonction pour ajouter un utilisateur en BDD
    function ajouterUtilisateur($nom,$prenom,$email,$password,$bdd){
        //bloc pour exécuter le code
        try {
            $requete = $bdd->prepare('INSERT INTO utilisateur(nom,prenom,email,password_utilisateur)VALUE
            (?,?,?,?)');
            $requete->bindParam(1,$nom,PDO::PARAM_STR);
            $requete->bindParam(2,$prenom,PDO::PARAM_STR);
            $requete->bindParam(3,$email,PDO::PARAM_STR);
            $requete->bindParam(4,$password,PDO::PARAM_STR);
            $requete->execute();
        }
        //bloc pour récupérer les erreurs 
        catch (Exception $e) {
            //affichage de l'erreur
            die("Error : ".$e->getMessage());
        }
    }
?>


Correction Exercice 17 Bonus :
//appel de la fonction ajouterUtilisateur
ajouterUtilisateur($_POST["nom"], $_POST["prenom"], $_POST["email"], md5($_POST["password_utilisateur"]),$bdd);

//Requête SQL :
$requete = $bdd->prepare('INSERT INTO utilisateur(nom,prenom,email,password_utilisateur)VALUE
(?,?,?,md5(?))');







Exercice 18 SQL Select :
-Partie PHP :
-Créer une fonction getAllUtilisateur qui va renvoyer la liste des utilisateurs contenu dans la table utilisateur avec les colonnes suivantes : nom, prenom, email (retourner un tableau indéxé avec des associatifs par enregistrement) 
NB : voir les exemples plus haut dans le chan PHP, 
-Partie affichage :
-récupérer le tableau de la fonction getAllUtilisateur (stocker dans une variable),
-éffectuer une boucle pour afficher dans des paragraphes les informations suivantes :
Nom : valeur du nom, Prénom : valeur du prénom, Email : valeur de l'email.
Bonus : 
Gérer le cas ou on n'a pas d'utilisateur en BDD et afficher une message => "il n'y a pas d'utilisateur en BDD"
Bonus 2 : modifier la requête SQL pour qu'elle retourne aussi l'id utilisateur,
Créer une nouvelle page PHP qui va se nommer modifierUtilisateur.php
Affichage : afficher chaque utilisateur comme ci-dessous :

<p>Nom : valeur du nom, Prénom : valeur du prénom, Email : valeur de l'email</p>
<a href="./modifierUtilisateur.php?id= valeur de l'id">Modifier l'utilisateur</a>

CORRECTION
<?php
    //importer la connexion à la bdd
    include './connectBdd.php';
    //stocker la la liste des utilisateurs
    $users = getAllUtilisateur($bdd);
    //tester si $users est différent de vide
    if($users){
        //parcourir la liste des utilisateurs (version foreach)
        foreach($users as $user){
            //afficher les utilisateurs
            echo "<p> Nom : ".$user["nom"]." Prénom : ".$user["prenom"]." Email : ".$user["email"]."</p>";
            echo "<a href='./modifierUtilisateur.php?id=".$user["id"]."'>Modifier utilisateur</a>";
        }
        //parcourir la liste des utilisateurs (version for)
        /* for ($i = 0; $i < count($users); $i++) { 
            //afficher les utilisateurs
            echo "<p> Nom : ".$users[$i]["nom"]." Prénom : ".$users[$i]["prenom"]." Email : ".$users[$i]["email"]."</p>";
            echo "<a href='./modifierUtilisateur.php?id=".$users[$i]["id"]."'>Modifier utilisateur</a>";
        } */
    }
    //test sinon $users est vide
    else{
        echo "la table est vide";
    }
    
    //fonction qui récupére un tableau d'utilisateur (nom, prenom, email)

    function getAllUtilisateur(PDO $bdd){
        try {
            //préparer la requête
            $requete = $bdd->prepare("SELECT id,nom,prenom,email FROM utilisateur");
            //éxécuter
            $requete->execute();
            //fetch le résultat dans $data
            $data = $requete->fetchAll(PDO::FETCH_ASSOC);
            //retourner $data
            return $data;
        } 
        catch (Exception $e) {
            die("Error : ".$e->getMessage());
        }
    }
?>



