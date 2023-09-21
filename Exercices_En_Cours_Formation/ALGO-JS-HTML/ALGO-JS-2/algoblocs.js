/*
//A1
// Change the turtle position
setPos(300,300);
faceDown();
setLineWidth(10);
changeColor(color.red);

//realisation

forward(177);
left(90);
forward(88);
*/


/*


//A2
// Change the turtle position
setPos(300,300);
faceLeft();
setLineWidth(10);
changeColor(color.green);

//realisation
forward(100);
faceDown(90);
forward(100);
left(90);
forward(200);
faceUp(90);
forward(200);
*/


/*
//A3
// Change the turtle position
setPos(300,300);
faceDown();
setLineWidth(10);
changeColor(color.red);

//realisation
forward(200);
faceUp();
forward(100);
left(90);
forward(100);
faceRight();
forward(200);
*/
/*
//A4
// Change the turtle position
setPos(150,500);
faceRight();
setLineWidth(10);
changeColor(color.red);
forward(200);

//realisation
arcLeft(100,180);
faceLeft()
forward(200);
arcRight(100,180);
faceRight();
forward(200);
*/

/* POUR LES REPETITION*/

/*
// B1
// Initialisation
setPos(100,100);
setLineWidth(10);
changeColor(color.green);
faceRight();

//realisation
for (let i=0 ; i<4 ;  i++) {
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}
*/


/*
// B2
// Initialisation
setPos(20,300);
setLineWidth(10);
changeColor(color.red);
faceUp();

//realisation
for (let i=0 ; i<4 ;  i++) {
    forward(100);
    faceRight();
    forward(100);
    faceDown();
    forward(100);
    faceRight();
    forward(100);
    faceUp();
}
*/

/*

// B3
// Initialisation
setPos(100,300);
setLineWidth(10);
changeColor(color.red);
faceRight();

//realisation
for (let i=0 ; i<4 ;  i++) {
    forward(100);
    right(90);

}
*/


/*
// B4
// Initialisation
setPos(200,300);
setLineWidth(10);
changeColor(color.red);
faceRight();

//realisation
for (let i=0 ; i<3 ;  i++) {
    forward(150);
    left(120);

}
*/

/*
// B5
// Initialisation
setPos(200,400);
setLineWidth(10);
changeColor(color.red);
faceUp();

//realisation
forward(300);


for (let i=0 ; i<3 ;  i++) {
    right(120); 
    forward(150);
    
}
*/

/*

// B6
// Initialisation
setPos(50,400);
setLineWidth(10);
changeColor(color.red);
faceRight();

//realisation

for (let i=0 ; i<2 ;  i++) {
    forward(100);
    faceUp();
    forward(100);
    right(90);
}
changeColor(color.green);
for (let i=0 ; i<3 ;  i++) {
    faceRight();
    forward(100);
    faceDown();
    forward(100);
    right(90);
}
*/

/*
// B6
// Initialisation
setPos(50,400);
setLineWidth(10);
changeColor(color.red);
faceRight();

//realisation

for (let i=0 ; i<3 ;  i++) {
    forward(100);
    left(120);
}
faceDown();
for (let i=0 ; i<4 ;  i++) {
    forward(100);
    left(90);
}
*/

/*
// B7
// Initialisation
setPos(100,200);
setLineWidth(10);
changeColor(color.red);
faceRight();

for (let i=0 ; i<8 ;  i++) {
    forward(100);
    right(135);
    forward(100);
    right(90);
}
*/

/*
// B8
// Initialisation
setPos(100,300);
setLineWidth(10);
changeColor(color.red);
faceRight();
forward(100);
up();
forward(50);
down();
//realisation
for (let i=0 ; i<3 ;  i++) {
    forward(150);
    right(120);

}
*/



//BOUCLE DANS LES BOUCLES
// C1
// Initialisation
setPos(25,300);
setLineWidth(10);
changeColor(color.red);
faceRight();

//realisation
for (let i=0 ; i<4 ;  i++) {
    for (let j=0 ; j<3 ;  j++) {
        forward(100);
        right(120);
}
        forward(100);
}



let longueur;  /*pour creer le nom de la variable*/
longueur=200;  /*déclarier la variable*/
console.log(longueur); 

