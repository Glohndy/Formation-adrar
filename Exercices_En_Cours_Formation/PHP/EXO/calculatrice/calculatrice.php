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