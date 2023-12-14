<?php
/*
Exercice 1 :
-Créer une variable de type int avec pour valeur 5,
-Afficher le contenu de la variable (utilisation de la fonction php echo),
-Afficher son type (utilisation de la fonction php gettype),
-Créer une variable de type String avec pour valeur votre prénom,
-Afficher le contenu de la variable (utilisation de la fonction php echo),
-Créer une variable de type booléen avec pour valeur false,
-Afficher son type (utilisation de la fonction php gettype).*/

CORRECTION

    $nbr1 = 5;
    echo $nbr1;
    echo "<br>";
    echo gettype($nbr1)."<br>";
    $prenom = "Mathieu";
    echo $prenom."<br>";
    $boolean = false;
    echo gettype($boolean)."<br>";


    Exercice 2 Concaténation :
-Créer 1 variable $a qui a pour valeur « bon »,
-Créer 1 variable $b qui a pour valeur « jour »,
-Créer 1 variable $c qui a pour valeur 10,
-Concaténer $a, $b et $c +1,
-Afficher le résultat de la concaténation.

Exercice 3 Concaténation :
-Créer une variable $a qui a pour valeur bonjour,
-Afficher un paragraphe (balise html) et à l’intérieur les mots suivants :l’adrar,
-Ajouter la variable $a avant la phase dans le paragraphe,
-Cela doit donner :
<p>bonjour l’Adrar</p>

Exercice 4 Concaténation et opérateur :
-Créer une variable prix HT (d’un article),
-Créer une variable (le nombre d’articles),
-Créer une variable  (le taux de TVA), 
-Stocker dans une variable le calul du (total TTC),
-Afficher le prix HT, le nbr d’articles et le taux de TVA (utilisez la fonction echo),
-Afficher le total TTC (utilisez la fonction echo).

CORRECTION

    /* 
    -Créer 1 variable $a qui a pour valeur « bon »,
    -Créer 1 variable $b qui a pour valeur « jour »,
    -Créer 1 variable $c qui a pour valeur 10,
    -Concaténer $a, $b et $c +1,
    -Afficher le résultat de la concaténation. */
    $a = "Bon";
    $b = "Jour";
    $c = 10;
    echo $a.$b.$c+1;
    /*
    -Créer une variable $a qui a pour valeur bonjour,
    -Afficher un paragraphe (balise html) et à l’intérieur les mots suivants :l’adrar,
    -Ajouter la variable $a avant la phase dans le paragraphe,
    -Cela doit donner :
    <p>bonjour l’Adrar</p> */

    $a = "Bonjour";
    echo "<p>$a l'Adrar</p>";
    echo '<p>'.$a.' l\'Adrar</p>';
    echo "<p>".$a." l'Adrar</p>";

    /*  
    -Créer une variable prix HT (d’un article),
    -Créer une variable (le nombre d’articles),
    -Créer une variable  (le taux de TVA), 
    -Stocker dans une variable le calul du (total TTC),
    -Afficher le prix HT, le nbr d’articles et le taux de TVA (utilisez la fonction echo),
    -Afficher le total TTC (utilisez la fonction echo). */
    $prixHt = 2.49;
    $quantite = 5;
    $tva = 1.2;
    $total = $prixHt*$quantite*$tva;
    echo "le total est égal à : $total €";
    echo "le total est égal à : ".$total." €";
    echo 'le total est égal à : '.$total.' €';
    echo 'le total est égal à '.($prixHt*$quantite*$tva).' €';


    Exercice 5 fonction: 
-Créer une fonction qui soustrait à $a la variable $b (2 paramètres en entrée),
-la fonction doit renvoyer le résultat de la soustraction $a-$b (return).

Exercice 6 fonction: 
-Créer une fonction qui prend en entrée un nombre à virgule (float),
-la fonction doit renvoyer l’arrondi (return) du nombre en entrée.

CORRECTION

    function soustraction($a,$b){
        return $a-$b;
    }
    echo soustraction(50.8645,18.897854);

    function arrondi(float $a):float{
        return round($a,2);
    }
    echo "la valeur arrondie est égale à : ".arrondi(10.897);



    Exercice 7 Fonction  :
-Créer une fonction qui prend en entrée 3 valeurs et renvoie la somme des 3 valeurs.
Bonus : 
passer plusieurs valeurs en entrées et retourner la somme de ces valeurs peut importe le nombre de valeur.
NB : utiliser le type intérable ... voir le cours page 20/21

Exercice 8 Fonction :
-Créer une fonction qui prend en entrée 3 valeurs et retourne la valeur moyenne des 3 valeurs (saisies en paramètre). 

CORRECTION

    //exercice 7
    function somme($a,$b,$c){
        return $a+$b+$c;
    }
    echo somme(10,25,10)."<br>";
    //bonus ex 7
    function somme2(...$liste){
        $somme = 0;
        foreach ($liste as $value) {
            $somme += $value;
        }
        return $somme;
    }
    echo somme2(10,25,10)."<br>";
    //exercice 8
    function moyenne($a,$b,$c){
        return ($a+$b+$c)/3;
    }
    echo moyenne(10,11,12)."<br>";


?>

