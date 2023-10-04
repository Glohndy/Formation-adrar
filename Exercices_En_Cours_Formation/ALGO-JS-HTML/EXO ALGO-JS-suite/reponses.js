/*
Écrire une fonction syracuse qui prend un nombre en entrée, et qui retourne :
- le triple du nombre + 1 si le nombre est impair
- la moitié du nombre sinon
*/
function syracuse(n) {
    if(n%2 == 1) {
        return 3*n + 1;
    } else {
        return n/2;
    }
}

for(let i = 1 ; i <= 20 ; i++) {
    console.log(i, syracuse(i));
}

/*
Écrire une fonction countDown qui reçoit un nombre positif en entrée, et qui affiche dans la console le compte à rebours jusqu'à 0 en partant de ce nombre.
Par exemple, l'appel à `countDown(3)` devra afficher
3
2
1
0
*/
function countDown(n) {
    for(let i = n ; i >= 0 ; i=i-1) { // i--
        console.log(i);
    }
}
console.log("Compte à rebours en partant de 3");
countDown(3);

console.log("Compte à rebours en partant de 10");
countDown(10);

function countDownBis(n) {
    let i = n ;
    while(i >= 0) { // i--
        console.log(i);
        i=i-1;
    }
}



/*
Écrire une fonction fastCountDown qui reçoit un nombre en entrée et qui affiche un compte à rebours en partant de cette valeur. La valeur sera divisée par 2 à chaque fois, et le compte à rebours s'arrête quand la valeur devient inférieur à 0.1.
Par exemple, l'appel à `fastCountDown(3)` devra afficher
3
1.5
0.75
0.375
0.1875
*/
function fastCountDown(n) {
    let counter = n;
    while(counter > 0.1) {
        console.log(counter);
        counter = counter/2;
    }
}
console.log("Compte à rebours rapide en partant de 3");
fastCountDown(3);

console.log("Compte à rebours rapide en partant de 10");
fastCountDown(10);

function fastCountDownBis(n) {
    for(let counter = n ; counter > 0.1 ; counter = counter/2) {
        console.log(counter);
    }
}
/*
Écrire une fonction evenNumbers qui reçoit deux nombres en entrées et qui affiche tous les nombres pairs entre ces deux nombres.
Par exemple, l'appel à `evenNumbers(5,14)` devra afficher
6
8
10
12
*/
function evenNumbers(n1, n2) {
    for(let i = n1 ; i < n2 ; i++) {
        if(i%2 == 0) {
            console.log(i);
        }
    }
}

evenNumbers(5,14);

function evenNumbersBis(n1, n2) {
    // let start;
    // if(n1%2 == 1) {
        // start = n1+1;
    // } else {
        // start = n1;
    // }
    let start = n1;
    if(n1%2 == 1) {
        start = n1+1; // start++
    }
    
    for(let i = start ; i < n2 ; i+=2) {
        console.log(i);
    }
}

console.log("evenNumbersBis(5,14)");
evenNumbersBis(5,14); // 6
console.log("evenNumbersBis(6,14)");
evenNumbersBis(6,14); // 6

/*
Sur la page wikipedia du PGCD (pas besoin de savoir ce que c'est), on peut trouver l'algorithme récursif suivant :
fonction euclide(a, b)
    si b = 0 alors retourner a
    sinon retourner euclide(b, a modulo b)

Écrire cette fonction.
*/
function euclide(a, b) {
    if(b == 0) {
        return a;
    } else {
        return euclide(b, a%b);
    }
}