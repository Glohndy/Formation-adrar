CREATE DATABASE ticket;
USE ticket;
CREATE TABLE produit(
id_produit INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_produit VARCHAR(50) NOT NULL,
description_produit TEXT NOT NULL,
prix_produit DECIMAL(4,2) NOT NULL,
id_categorie INT
)Engine=InnoDB;
CREATE TABLE categorie(
id_categorie INT PRIMARY KEY  AUTO_INCREMENT NOT NULL,
nom_categorie VARCHAR(50) NOT NULL
)Engine=InnoDB;
CREATE TABLE ticket(
id_ticket INT PRIMARY KEY  AUTO_INCREMENT NOT NULL,
date_ticket DATETIME NOT NULL,
id_vendeur INT
)Engine=InnoDB;
CREATE TABLE vendeur(
id_vendeur INT PRIMARY KEY  AUTO_INCREMENT NOT NULL,
nom_vendeur VARCHAR(50) NOT NULL,
prenom_vendeur VARCHAR(50) NOT NULL
)Engine=InnoDB;
CREATE TABLE ajouter(
id_ticket INT,
id_produit INT,
quantite INT DEFAULT 1,
PRIMARY KEY(id_ticket, id_produit)
)Engine=InnoDB;
-- ajout des contraintes
ALTER TABLE produit
ADD CONSTRAINT fk_completer_categorie
FOREIGN KEY (id_categorie)
REFERENCES categorie(id_categorie);

ALTER TABLE ticket
ADD CONSTRAINT fk_vendre_vendeur
FOREIGN KEY (id_vendeur)
REFERENCES vendeur(id_vendeur);

ALTER TABLE ajouter
ADD CONSTRAINT fk_ajouter_ticket
FOREIGN KEY (id_ticket)
REFERENCES ticket(id_ticket);

ALTER TABLE ajouter
ADD CONSTRAINT fk_ajouter_produit
FOREIGN KEY (id_produit)
REFERENCES produit(id_produit);


INSERT INTO categorie(nom_categorie) VALUE('alimentaire'),('liquide'),('animalerie');
INSERT INTO produit(nom_produit, description_produit, prix_produit, id_categorie) VALUE('banane', 'chic banane', 12, 1);
INSERT INTO produit(nom_produit, description_produit, prix_produit, id_categorie) VALUE('chips', 'bon chips', 1.5, 1);
INSERT INTO produit(nom_produit, description_produit, prix_produit, id_categorie) VALUE('jus de pomme', 'bon jus de pomme', 12, 2);
INSERT INTO produit(nom_produit, description_produit, prix_produit, id_categorie) VALUE('bonbon', 'mon bonbon', 1.9, 1);
INSERT INTO produit(nom_produit, description_produit, prix_produit, id_categorie) VALUE('spagueti', 'bon spa', 5.9, 1);


INSERT INTO vendeur(nom_vendeur, prenom_vendeur) VALUE('jimmix', 'morel');
INSERT INTO vendeur(nom_vendeur, prenom_vendeur) VALUE('kouassi', 'morel');
INSERT INTO vendeur(nom_vendeur, prenom_vendeur) VALUE('skull', 'jimmix');


INSERT INTO ticket(date_ticket, id_vendeur) VALUE('2023/06/20 10:50:25', 1);
INSERT INTO ticket(date_ticket, id_vendeur) VALUE('2024/07/18 12:50:25', 2);
INSERT INTO ticket(date_ticket, id_vendeur) VALUE('2021/05/27 10:45:17', 3);



INSERT INTO ajouter(id_ticket, id_produit, quantite) VALUE(1, 1, 5);
INSERT INTO ajouter(id_ticket, id_produit, quantite) VALUE(1, 2, 10);
INSERT INTO ajouter(id_ticket, id_produit, quantite) VALUE(2, 3, 5);
INSERT INTO ajouter(id_ticket, id_produit, quantite) VALUE(2, 2, 10);
INSERT INTO ajouter(id_ticket, id_produit, quantite) VALUE(3, 4, 5);
INSERT INTO ajouter(id_ticket, id_produit, quantite) VALUE(3, 5, 10);
