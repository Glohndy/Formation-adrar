// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
function f1() {
    console.log(17);
}

// Utiliser la fonction f1 pour afficher 17 dans la console.
f1();

// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 18.
function f2() {
    return 18;
}

// Utiliser la fonction f2 pour afficher 18 dans la console.
console.log(f2());

// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?
// La fonction f1 est spécialisée pour faire de l'affichage dans la console. Si c'est ce qu'on veut faire, elle est plus pratique que f2. En revanche, si je veux faire autre chose du résultat (le mettre dans une variable, l'enregistrer dans une base de données, changer la taille du titre, ...), je ne peux le faire qu'avec f2. La fonction f2 me donne plus de libertés.

// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
function f3(n) {
    console.log(2*n);
}

// Utiliser la fonction f3 pour écrire dans la console le double de 98.
f3(98);

// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(n) {
    return 2*n;
}

// Utiliser la fonction f4 pour écrire dans la console le double de 99.
console.log(f4(99));

// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a = f4(99);
console.log("La variable a contient la valeur", a);

// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
function f5(n1, n2) {
    console.log(n1+n2);
}

// Utiliser la fonction f5 pour écrire dans la console la somme de 41 et 77.
f5(41, 77);

// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(n1, n2) {
    return n1+n2;
}

// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
console.log(f6(42, 77));

// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
// incrémenter la variable a de 5.
a += f6(42, 77);
a = a + f6(42, 77);
a = f6(a, f6(42, 77));

// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(n1, n2) {
    if(n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}
console.log("Tests de f7");
console.log(f7(10, 2));
console.log(f7(10, 20));

// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).
function f8(n1, n2, n3) {
    if(n1 > n2) {
        if(n1 > n3) {
            return n1;
        } else {
            return n3;
        }
    } else {
        if(n2 > n3) {
            return n2;
        } else {
            return n3;
        }
    }
}

function f8Bis(n1, n2, n3) {
    if(n1>n2 && n1>n3) {
        return n1;
    } else if(n2>n3) {
        return n2;
    } else {
        return n3;
    }
}
console.log("Tests de f8Bis");
console.log(f8Bis(5,10,15));
console.log(f8Bis(15,10,5));
console.log(f8Bis(10,15,5));
console.log(f8Bis(15,15,5));

function f8Ter(n1, n2, n3) {
    let maxN1N2 = f7(n1, n2);
    return f7(maxN1N2, n3);
}

function f8Quater(n1, n2, n3) {
    return f7(  f7(n1, n2)  ,   n3  );
}

// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.

function f9(n, w) {
    for(let i = 0 ; i < n ; i++) {
        console.log(w);
    }
}

f9(14, "Pierre");
f9(1485, "erreiP");