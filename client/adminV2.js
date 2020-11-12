"use strict";
console.log("ANDO");



//let btnAceptar = document.querySelector("#");
//btnAceptar.addEventListener("click" , AceptarInscripcion );
//let btnBorrarAlumno = document.querySelector("#");
//btnBorrarAlumno.addEventListener("click" , borrarAlumno );


let nuevoAlumnoPreinscripto = [];
let nuevoAlumnoInscripto = [];

let listaPreInscriptos = [
    {
        nombreAlumno: "Juan Perez",
        nombreCurso: "Programador Full Stack",
        id: 0,
    }
    ,
    {
        nombreAlumno: "Juan Perez",
        nombreCurso: "Programador Full Stack",
        id: 1,
    }
];

let listaInscriptos = [
    {
        nombreAlumno: "Alberso Fernandez",
        nombreCurso: "Programador Full Stack",
        id: 0,
    }
    ,
    {
        nombreAlumno: "Juan Perez",
        nombreCurso: "Programador Full Stack",
        id: 1,
    }
];

function iniciaPreInscriptos(listaPreInscriptos) {
    let elementoLista = "";
    for (let index = 0; index < listaPreInscriptos.length; index++) {

        elementoLista = elementoLista + (`<li class="list-group-item lista">
                <div class="row">
                    <div class="col-md-5 ">${listaPreInscriptos[index].nombreAlumno + " " + listaPreInscriptos[index].apellidoAlumno}</div>
                    <div class="col-md-5 ">${listaPreInscriptos[index].nombrecurso}</div>
                    <div class="col-md-2 "><button type="button" id="${"button" + index}" class="btn btn-custom" >Aceptar</button>
                    </div>
                </li>`)

    }

    return elementoLista;

}


async function loadAlumnos() {
    let container = document.querySelector("#preInscriptos");
    let response = await fetch(`/alumnos`);
    if (response.ok) {
        //console.log(response);
        let t = await response.json()
        //console.log(t);
        container.innerHTML = iniciaPreInscriptos(t);

        for (let index = 0; index < t.length; index++) {
            let btnAgregar = document.querySelector('#button' + index);
            btnAgregar.addEventListener('click', function () { aceptarAlumno(t[index]) });

        }

    }
}

async function agregar() {

    let nombre = document.querySelector('#nombre').value;
    let apellido = document.querySelector('#apellido').value;
    let curso = document.querySelector('#curso').value;
    let telefono = parseInt(document.querySelector('#telefono').value);
    let dni = parseInt(document.querySelector('#dni').value);
    let mail = document.querySelector('#mail').value;
    let direccion = document.querySelector('#direccion').value;
    let renglon = {
        "nombreAlumno": nombre,
        "apellido": apellido,
        "curso": curso,
        "telefono": telefono,
        "dni": dni,
        "mail": mail,
        "direccion": direccion
    }



    let response = await fetch("/alumnos", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(renglon)
    })
    if (response.ok) {
        let json = await response.text();
        alert(json);
        alert("ok");



    }

}


function iniciarInscriptos(listaInscriptos) {
    let elementoLista = "";
    for (let index = 0; index < listaInscriptos.length; index++) {
        elementoLista = elementoLista + (`<li class="list-group-item lista">
                <div class="row">
                    <div class="col-md-5 ">${listaInscriptos[index].nombreAlumno + " " + listaInscriptos[index].apellidoAlumno}</div>
                    <div class="col-md-5 ">${listaInscriptos[index].nombrecurso}</div>
                    <div class="col-md-2 "><button type="button" id="${"buttonDelete" + index}" class="btn btn-custom" >Eliminar</button>
                    </div>
                </li>`)

    }

    return elementoLista;

}

async function loadInscriptos() {
    console.log("ENTRO A INSCRIPTOS");
    let container = document.querySelector("#inscriptos");
    let response = await fetch('/alumnos-preinscriptos', {
        headers: {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            }
        },
    });
    if (response.ok) {
        let alumnosInscriptos = await response.json()

        //console.log(j);
        container.innerHTML = iniciarInscriptos(alumnosInscriptos);

        for (let index = 0; index < alumnosInscriptos.length; index++) {
            let btnDelete = document.querySelector('#buttonDelete' + index);
            btnDelete.addEventListener('click', function () { borrarAlumno(alumnosInscriptos[index].id)});
    
        }
    }
    
}





async function aceptarAlumno(alumno) {
    //console.log("aaaaaaaaaaaaaaaaaaaaaaaaa");
    let response = await fetch("/alumnos/aceptar", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(alumno)
    })
    if (response.ok) {
        let json = await response.text();
        loadInscriptos();
        loadAlumnos();
        alert("Alumno Aceptado");



    }

}

async function borrarAlumno(idAlumnoInscripto) {
    //console.log("entro a delete");
    let response = await fetch(`/alumnos/` + idAlumnoInscripto, {
        "method": "DELETE",
        "headers": {
            "Content-Type": "application/json"
        }
    });

    loadInscriptos();
}