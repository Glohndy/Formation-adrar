<?php
//import 
include './Vehicule.php';
//instancier les objets de la classe Vehicule
$voiture = new Vehicule("Mercedes CLK", 4, 250);
$moto = new Vehicule("Honda CBR", 2, 280);
echo "Le vehicule : ".$voiture->getNom()." est une : ".$voiture->detect()."<br>";
echo "Le vehicule : ".$moto->getNom()." est une : ".$moto->detect()."<br>";
$voiture->boost();
echo "Le véhicule roule à : ".$voiture->getVitesse()."<br>";
echo "Le véhicule le plus rapide est : ".$voiture->plusRapide($moto)."<br>";