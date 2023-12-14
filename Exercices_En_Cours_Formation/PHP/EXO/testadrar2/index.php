<?php
/* Exercice 11 Tableau et boucle :
-Créer une fonction qui affiche la valeur la plus grande du tableau.

Exercice 12 Tableau et boucle :
-Créer une fonction qui affiche la moyenne du tableau.

Exercice 13 Tableau et boucle :
-Créer une fonction qui affiche la valeur la plus petite du tableau. */

$tab = [10,50,26,89,119,12,52,2,25];
function valeurMaxi($tab){
    $max = $tab[0];
    foreach ($tab as $value) {
       if($value>$max){
            $max = $value;
       }
    }
    return $max;
}
function valeurMaxiFor($tab){
    $max = $tab[0];
    for($i = 0; $i<count($tab); $i++){
        if($tab[$i]>$max){
            $max = $tab[$i];
        }
    }
    return $max;
}
//echo valeurMaxi($tab);
echo valeurMaxiFor($tab)."<br>";

function moyTab($tab){
    $somme = 0;
    foreach ($tab as $value) {
        $somme += $value;
    }
    return $somme/count($tab);
}
echo "la valeur moyenne est : ".round(moyTab($tab),2)."<br>";
function valeurMin($tab){
    $min = $tab[0];
    foreach ($tab as $value) {
       if($value<$min){
            $min = $value;
       }
    }
    return $min;
}
echo "la valeur minimale est : ".valeurMin($tab)."<br>";

function min2($tab){
    return min($tab);
}
echo min2($tab);