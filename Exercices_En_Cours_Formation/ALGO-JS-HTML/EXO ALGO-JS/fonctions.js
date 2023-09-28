// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
function f1(){
    console.log(17);
}
// Utiliser la fonction f1 pour afficher 17 dans la console.
f1();
// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 18.
function f2(){
    return 18;
}
// Utiliser la fonction f2 pour afficher 18 dans la console.
console.log(   f2()    )
// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?

// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
function f3(n){
    console.log(2*n);
}
// Utiliser la fonction f3 pour écrire dans la console le double de 98.
f3(98);
// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(n){
    return 2*n;
}
// Utiliser la fonction f4 pour écrire dans la console le double de 99.
console.log( f4(99)   )
// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
a = f4(99);
console.log(a);
// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
function f5(a,b){
    console.log(a+b);
}
// Utiliser la fonction f5 pour écrire dans la console la somme de 41 et 77.
f5(41,77);
// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(a,b){
    return a+b;
}
// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
console.log( f6(42,77)   )
// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
a+=f6(42,77);
console.log("maintenant la variable de a est = à",a);

// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}
console.log(f7(17,18));
// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
function f8(a,b,c){
    if(a>b && a>c){
        return a;
    }else if(b>a && b>c){
        return b;
    } else{
        return c;
    } 
}
console.log(f8(9,2,10));
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).

// Écrire une fonction f9 qui prend 
//un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.

function f9(n,w){
    for(let i = 0; i < n ; i++){
    console.log(w);
    }
}
f9(4,"bonbon");