"use strict";

let btnAdmin = document.getElementById("admin");
let btnContacto = document.getElementById("contacto");
let btnInscripcion = document.getElementById("inscripcion");
let btnHome = document.getElementById("home");
let btnCursos = document.getElementById("cursos");
let btnIngreso = document.getElementById("btnIngresar");


async function showMain() {
    let response = await fetch("main.html");
    response = await response.text();
    document.getElementById("content").innerHTML = response;
    localStorage.setItem("SelectMenu", "main.html");


}
btnHome.addEventListener('click', showMain);

traerDelocalStorage();



async function showAdmin() {
    let response = await fetch("admin.html");
    response = await response.text();
    document.getElementById("content").innerHTML = response;
    localStorage.setItem("SelectMenu", "admin.html");



}

//btnAdmin.addEventListener('click', showAdmin );

async function showLogAdmin() {
    let response = await fetch("loginadm.html");
    response = await response.text();
    document.getElementById("content").innerHTML = response;
    localStorage.setItem("SelectMenu", "loginadm.html");



}

btnAdmin.addEventListener('click', showLogAdmin);

//funcion bajar info de localstorage
function traerDelocalStorage() {
if (localStorage.getItem("SelectMenu") == "admin.html")
      showAdmin();
else if(localStorage.getItem("SelectMenu") == "contacto.html")
     showContacto();
else if (localStorage.getItem("SelectMenu") == "inscripcion.html")
showInscripcion();
else if (localStorage.getItem("SelectMenu") == "cursos.html")
showCursos();
else if (localStorage.getItem("SelectMenu") == "loginadm.html")
showLogAdmin();
else  
showMain();
}


async function showContacto() {
    let response = await fetch("contacto.html");
    response = await response.text();
    document.getElementById("content").innerHTML = response;
    localStorage.setItem("SelectMenu", "contacto.html");
    
    



}

btnContacto.addEventListener('click', showContacto);


async function showInscripcion() {
    let response = await fetch("inscripcion.html");
    response = await response.text();
    document.getElementById("content").innerHTML = response;
    localStorage.setItem("SelectMenu", "inscripcion.html");



}

btnInscripcion.addEventListener('click', showInscripcion);



async function showCursos() {
    let response = await fetch("cursos.html");
    response = await response.text();
    document.getElementById("content").innerHTML = response;
    localStorage.setItem("SelectMenu", "cursos.html");


}

btnCursos.addEventListener('click', showCursos);