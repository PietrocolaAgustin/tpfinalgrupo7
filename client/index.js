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
    let loginResponse = await fetch("/login",
    {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "usuario": document.getElementById("usuario").value,
            "password": document.getElementById("password").value
        })
    })
if (loginResponse.ok) {

    let response = await fetch("adminV2.html");
    response = await response.text();
    document.getElementById("content").innerHTML = response;
    localStorage.setItem("SelectMenu", "adminV2.html");

    loadAlumnos();
    loadInscriptos();
  

} else {
    alert("Error en los datos");
}


   

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
    if (localStorage.getItem("SelectMenu") == "adminV2.html")
        showAdmin();
    else if (localStorage.getItem("SelectMenu") == "contacto.html")
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

    let btnAgregar = document.querySelector("#inscribir");
    btnAgregar.addEventListener("click", agregar);

}

btnInscripcion.addEventListener('click', showInscripcion);



async function showCursos() {
    let response = await fetch("cursos.html");
    response = await response.text();
    document.getElementById("content").innerHTML = response;
    localStorage.setItem("SelectMenu", "cursos.html");

    insertarContenido("cursoFS.html", "contentCursos");

    let btnFullStack = document.getElementById("ProgFS");
    let btnPSI = document.getElementById("PSI");
    let btnPrgoDispMobiles = document.getElementById("ProgDispositivosMobiles");
    let btnModelado3d = document.getElementById("modelado3d");
    let btnAutocad = document.getElementById("autocad");

    btnFullStack.addEventListener('click', () => insertarContenido("cursoFS.html", "contentCursos"));
    btnPSI.addEventListener('click', () => insertarContenido("cursoPSI.html", "contentCursos"));
    btnPrgoDispMobiles.addEventListener('click', () => insertarContenido("cursoProgDispositivosMobiles.html", "contentCursos"));
    btnModelado3d.addEventListener('click', () => insertarContenido("modeladoEimpresion3d.html", "contentCursos"));
    btnAutocad.addEventListener('click', () => insertarContenido("autocad.html", "contentCursos"));
}

btnCursos.addEventListener('click', showCursos);



async function insertarContenido(nombrePagina, contenedorid) {
    let response = await fetch(nombrePagina)
    response = await response.text();
    document.getElementById(contenedorid).innerHTML = response;


}



