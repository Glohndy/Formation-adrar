<?php
class Maison{
    //Attributs
    private string $nom;
    private float $longueur;
    private float $largeur;
    private int $nbrEtage;
    //Constructeur
    public function __construct(string $nom, float $longueur, float $largeur, int $nbrEtage = 1){
        $this->nom = $nom;
        $this->longueur = $longueur;
        $this->largeur = $largeur;
        $this->nbrEtage = $nbrEtage;
    }
    //getter and setter
    public function getNom(): string{
        return $this->nom;
    }
    public function setNom(string $nom): void{
        $this->nom = $nom;
    }
    public function getLongueur(): float{
        return $this->longueur;
    }
    public function setLongueur(float $longueur): void{
        $this->longueur = $longueur;
    }
    public function getLargeur(): float{
        return $this->largeur;
    }
    public function setLargueur(float $largeur): void{
        $this->largeur = $largeur;
    }
    public function getNbrEtage(): int{
        return $this->nbrEtage;
    }
    public function setNbrEtage(int $nbrEtage): void{
        $this->nbrEtage = $nbrEtage;
    }
    //Méthodes
    public function surface(): float{
        return $this->longueur * $this->largeur * $this->nbrEtage;
    }
}