<?php
/*Exercice 9 :
-Créer une fonction qui prend en entrée 3 valeurs et retourne le nombre le plus petit (echo dans la page web).

Exercice 10 :
-Créer une fonction qui prend en entrée 1 valeur (l’âge d’un enfant). Ensuite, elle informe de sa catégorie (echo dans la page web) : 
•    "Poussin" de 6 à 7 ans
•    "Pupille" de 8 à 9 ans
•    "Minime" de 10 à 11 ans
•    "Cadet" après 12 ans
Bonus : Refaire l’exercice en utilisant le switch case.*/

CORRECTION


//Exercice 9
function plusPetit($nb1, $nb2, $nb3){
    if($nb1 < $nb2 AND $nb1 < $nb3){
        return $nb1;
    }
    else if($nb2 < $nb3 ) {
        return $nb2;
    }
    else {
        return $nb3;
    }
}
echo "Le nombre le plus petit est : ".plusPetit(10,58,3);
//Exercice 10 :
function testAge($age) {
    if($age >= 6 AND $age <= 7) {
        return "Poussin";
    }
    else if ($age >= 8 AND $age <= 9) {
        return "Pupille";
    }
    else if ($age >= 10 AND $age <= 11) {
        return "Minime";
    }
    else if ($age >= 12) {
        return "Cadet";
    }
    else {
        return "Trop jeune";
    }
}
echo "le niveau est : ".testAge(10);

BONUS

function testAgeSwitch(int $age){
    switch ($age) {
        case 1 : case 2: case 3: case 4: case 5:
            return "trop jeune";
            break;
        case 6: case 7:
            return "Poussin";
            break;
        case 8 : case 9:
            return "Pupille";
            break;
        case 10 : case 11 :
            return "Minime";
            break;
        default:
            return "Cadet";
            break;
    }
}
echo testAgeSwitch(12);
?>


