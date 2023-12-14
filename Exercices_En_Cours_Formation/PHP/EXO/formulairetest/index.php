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


Correction exercice 14 :

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


Correction exercice 15 :


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