<?php
class Vehicule{
    private string $nomVehicule;
    private int $nbrRoue;
    private int $vitesse;
    //constructeur
    public function __construct(string $nom, int $nbrRoue, int $vitesse){
        $this->nomVehicule = $nom;
        $this->nbrRoue = $nbrRoue;
        $this->vitesse = $vitesse;
    }
    /* public function __destruct(){
        echo "A la casse !";
    } */
    public function getNom(): string{
        return $this->nomVehicule;
    }
    public function setNom(string $nom): void{
        $this->nomVehicule = $nom;
    }
    public function getNbrRoue(): int{
        return $this->nbrRoue;
    }
    public function setNbrRoue(int $nbrRoue): void{
        $this->nbrRoue = $nbrRoue;
    }
    public function getVitesse(): int{
        return $this->vitesse;
    }
    public function setVitesse(int $vitesse): void{
        $this->vitesse = $vitesse;
    }
    //méthodes
    public function detect(): string{
        if($this->nbrRoue == 2){
            return "Moto";
        }
        else if($this->nbrRoue == 4){
            return "Voiture";
        }
        else{
            return "Autre";
        }
    }
    public function boost(): void{
        $this->vitesse += 50; 
    }
    public function plusRapide(Vehicule $objet): string{
        if($this->vitesse > $objet->vitesse){
            return $this->nomVehicule;
        }
        else if($this->vitesse < $objet->vitesse){
            return $objet->nomVehicule;
        }
        else{
            return "Vitesse identique";
        }
    }



    
    //Exemple function statique et magic methode :

    public static function plusRapideV2(Vehicule $objet1, Vehicule $objet2): string{
        if($objet1->vitesse > $objet2->vitesse){
            return $objet1->nomVehicule;
        }
        else if($objet1->vitesse < $objet2->vitesse){
            return $objet2->nomVehicule;
        }
        else{
            return "Vitesse identique";
        }
    }

    public static function plusRapideV3(array $liste): string{
        $maxVitesse = $liste[0];
        //boucle
        foreach ($liste as $key => $value) {
            if($value->vitesse >$maxVitesse->vitesse){
                $maxVitesse = $liste[$key];
            }
        }
        return $maxVitesse->nomVehicule;
    }
    public function __toString(): string{
        return "Le véhicule se nomme : ".$this->nomVehicule;
    }
}