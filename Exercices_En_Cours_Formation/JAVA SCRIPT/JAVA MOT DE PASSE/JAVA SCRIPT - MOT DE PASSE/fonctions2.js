


//Explication
//?=.* veut dire eviter de mettre des espaces
//{12,20} veut dire au moins 12 charactères et maximum 20 charactères
//(keyup (touche clavier est relâchée )
//(blur(désélection de l'input)





/*
// test uniquement avec les couleur
const password = document.querySelector('#password');
let regexPwd = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{12,20}$/;
password.addEventListener('blur', ()=>{
    console.log(password);
    if(password.value.match(regexPwd)){
        password.style.backgroundColor = 'green';
    }else{
        password.style.backgroundColor = 'red';
    }
});

const email = document.querySelector('#email');
let regexEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
email.addEventListener('keyup', ()=>{
    console.log(email);
    if(email.value.match(regexEmail)){
        email.style.backgroundColor = 'green';
    }else{
        email.style.backgroundColor = 'red';
    }
});
*/

/*
// test avec le bouton connexion
const password = document.querySelector('#password');
let regexPwd = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{12,20}$/;
const bouton = document.querySelector('#bt');
bouton.addEventListener('blur', ()=>{
    console.log(password);
    if(password.value.match(regexPwd)){
        password.style.backgroundColor = 'green';
    }else{
        password.style.backgroundColor = 'red';
    }
});

const email = document.querySelector('#email');
let regexEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
bouton.addEventListener('click', ()=>{
    console.log(email);
    if(email.value.match(regexEmail)){
        email.style.backgroundColor = 'green';
    }else{
        email.style.backgroundColor = 'red';
    }
});
*/


/*
// test avec paragraphe et le bouton connexion
const password = document.querySelector('#password');
let regexPwd = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{12,20}$/;
const bouton = document.querySelector('#bt');
const paragraphe = document.querySelector('#resultat');
bouton.addEventListener('blur', ()=>{
    console.log(password);
    if(password.value.match(regexPwd)){
        paragraphe.textContent = "Valide";
    }else{
        paragraphe.textContent = "Invalide";
    }
});

const email = document.querySelector('#email');
let regexEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
bouton.addEventListener('click', ()=>{
    console.log(email);
    if(email.value.match(regexEmail)){
        paragraphe.textContent = "Valide";
    }else{
        paragraphe.textContent = "Invalide";
    }
});
*/

/*
//CORRECTION
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const error = document.getElementById('error');
const regexEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{12,20}$/;
//écouteur pour email
email.addEventListener('keyup', ()=>{
    //test si l'email match le regex
    if(email.value.match(regexEmail)){
        email.style.backgroundColor = "green";
    }
    //test sinon ne match pas le regex
    else{
        email.style.backgroundColor = "red";
    }
});
//écouteur pour le password
password.addEventListener('blur', ()=>{
    //test si le password match le regex
    if(password.value.match(regexPassword)){
        password.style.backgroundColor = "green";
    }
    //test sinon ne match pas le regex
    else{
        password.style.backgroundColor = "red";
    }
    //test si les 2 inputs sont valides
    if(email.style.backgroundColor == "green" && regexPassword.test(password.value)){
        error.textContent = 'Valide';
    }
    //test si un des 2 inputs est invalide 
    else{
        error.textContent = 'Invalide';
    }
});
*/
