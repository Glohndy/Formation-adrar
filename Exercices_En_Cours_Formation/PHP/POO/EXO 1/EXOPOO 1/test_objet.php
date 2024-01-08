<?php
//import 
include './Maison.php';
//instance d'un objet
$villa = new Maison('Villa', 10,30);
//instance d'un objet
$immeuble = new Maison('immeuble', 30,40,10);
//affichage de la surface et du  nom de l'objet
echo "<p>la surface de " .$villa->getNom()." est égale à : ".$villa->surface()." m2</p>";
echo "<p>la surface de " .$immeuble->getNom()." est égale à : ".$immeuble->surface()." m2</p>";