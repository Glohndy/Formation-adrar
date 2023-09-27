// Exercice 1 : écrire 50 fois "Bonjour" dans la console.
console.log("Exercice 1");
for(let i = 0 ; i < 50 ; i++) {
    console.log("Bonjou");
}

// Exercice 2 : écrire dans la console :
// A
// B
// A
// B
// A
// B
// A
// B
// A
// B
console.log("Exercice 2");
for(let i = 0 ; i < 5 ; i++) {
    console.log("A");
    console.log("B");
}

console.log("Exercice 2 bis");
for(let i = 0 ; i < 10 ; i++) {
    if(i%2 == 0) {
        console.log("A");
    } else {
        console.log("B");
    }
}
// Exercice 3 : écrire dans la console :
// ...
console.log("Exercice 3");
for(let i = 0 ; i < 3 ; i++) {
    for(let j = 0 ; j < 5 ; j++) {
        console.log("A");
    }
    console.log("B");
}

console.log("Exercice 3 bis");
for(let i = 0 ; i < 18 ; i++) {
    if(i%6 == 5) {
        console.log(i,"B");
    } else {
        console.log(i,"A");
    }
}


// Exercice 4 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
console.log("Exercice 4");
/*console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);*/
let counter4 = 0;
for(let i = 0 ; i < 10 ; i++) {
    console.log(counter4);
    counter4++;
}

console.log("Exercice 4 bis");
for(let i = 0 ; i < 10 ; i++) {
    console.log(i);
}

// Exercice 5 : écrire dans la console :
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
console.log("Exercice 5");
let counter5 = 3;
for(let i = 0 ; i < 10 ; i++) {
    console.log(counter5);
    counter5++;
}

console.log("Exercice 5 bis");
for(let i = 3 ; i < 13 ; i++) {
    console.log(i);
}

console.log("Exercice 5 ter");
for(let i = 0 ; i < 10 ; i++) {
    console.log(i+3);
}

// Exerice 6 : écrire dans la console :
// 0
// 1
// 2
// 3
// 0
// 1
// 2
// 3
// 0
// 1
console.log("Exercice 6");
for(let i = 0 ; i < 2 ; i++) {
    for(let j = 0 ; j < 4 ; j++) {
        console.log(j);
    }
}
console.log(0);
console.log(1);

console.log("Exercice 6 bis");
for(let i = 0 ; i < 10 ; i++) {
    console.log(i%4);
}

// Exercice 7 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// A
// A
// A
// 8
// 9
console.log("Exercice 7");
for(let i = 0 ; i < 5 ; i++) {
    console.log(i);
}
for(let i = 0 ; i < 3 ; i++) {
    console.log("A");
}
for(let i = 8 ; i < 10 ; i++) {
    console.log(i);
}

console.log("Exercice 7 bis");
for(let i = 0 ; i < 10 ; i++) {
    if(i < 5) {
        console.log(i);
    } else {
        if(i < 8) {
            console.log("A");
        } else {
            console.log(i);
        }
    }

}

console.log("Exercice 7 ter");
for(let i = 0 ; i < 10 ; i++) {
    if(i < 5) {
        console.log(i);
    } else if(i < 8) {
        console.log("A");
    } else {
        console.log(i);
    }
}
console.log("Exercice 7 quater");
for(let i = 0 ; i < 10 ; i++) {
    if(i == 5) {
        console.log("A");
    } else if(i == 6) {
        console.log("A");
    } else if(i == 7) {
        console.log("A");
    } else {
        console.log(i);
    }
}

console.log("Exercice 7 quinquies");
for(let i = 0 ; i< 10 ; i++) {
    if(i==5 || i==6 || i==7) {
        console.log("A");
    } else {
        console.log(i);
    }
}

console.log("Exercice 7 sexies");
for(let i = 0 ; i < 10 ; i++) {
    if(i<5 || i>7) {
        console.log(i);
    } else {
        console.log("A");
    }
}

console.log("Exercice 7 septies")
for(let i = 0 ; i < 10 ; i++) {
    if( i > 4 && i < 8  ) { // i est compris entre 4 et 8
        console.log("A");
    } else {
        console.log(i);
    }
}

// Exercice 8 : écrire dans la console :
// 100
// 1
// 2
// 103
// 4
// 5
// 106
// 7
// 8
// 109
console.log("Exercice 8");
for(let i = 0 ; i< 10 ; i++) {
    if(i%3 == 0) { // i est un multiple de 3
        console.log(i+100);
    } else {
        console.log(i);
    }
}

// Exercice 9 : écrire dans la console :
// 0
// 101
// 202
// 3
// 104
// 205
// 6
// 107
// 208
// 9
console.log("Exercice 9");
for(let i = 0 ; i< 10 ; i++) {
    if(i%3 == 0) {
        console.log(i+0*100);
    } else if(i%3 == 1) {
        console.log(i+1*100);
    } else {
        console.log(i+2*100);
    }
}

console.log("Exercice 9 bis");
for(let i = 0 ; i < 10 ; i++) {
    console.log( i + (i%3)*100 );
}