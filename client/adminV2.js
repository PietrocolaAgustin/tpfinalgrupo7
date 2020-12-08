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
                    <div class="col-md-5 ">${listaPreInscriptos[index].nombre + " " + listaPreInscriptos[index].apellido}</div>
                    <div class="col-md-5 ">${listaPreInscriptos[index].curso.nombre}</div>
                    <div class="col-md-2 "><button type="button" id="${"button" + index}" class="btn btn-custom" >Aceptar</button>
                    </div>
                </li>`)

    }

    return elementoLista;

}


async function loadAlumnos() {
    let container = document.querySelector("#preInscriptos");
    let response = await fetch(`./alumno/get-all-preinscripto`);
    if (response.ok) {
        //console.log(response);
        let arrayAlumnos = await response.json()
        //console.log(t);
        container.innerHTML = iniciaPreInscriptos(arrayAlumnos);

        for (let index = 0; index < arrayAlumnos.length; index++) {
            let btnAgregar = document.querySelector('#button' + index);
            btnAgregar.addEventListener('click', function () { aceptarAlumno(arrayAlumnos[index].idalumno) });

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
        //clave        //valor
        "nombre": nombre,
        "apellido": apellido,
        "idcurso": parseInt(curso),
        "telefono": telefono,
        "dni": dni,
        "mail": mail,
        "direccion": direccion
    }    
        let response = await fetch("/alumno/nuevo-alumno", {
            "method": "POST",
            "headers": {

                "Content-Type": "application/json"
            },
            "body": JSON.stringify(renglon)

        });
       // console.log(response);
        if (response.ok) {
            let json = await response.text();
            alert("Se acepto tu solicitud de preinscripcion");
            //alert("ok");
        }
        else{
            alert("Falla en la carga de datos");
        }
    }

   




function iniciarInscriptos(listaInscriptos) {
    let elementoLista = "";
    for (let index = 0; index < listaInscriptos.length; index++) {
        elementoLista = elementoLista + (`<li class="list-group-item lista">
                <div class="row">
                    <div class="col-md-5 ">${listaInscriptos[index].nombre + " " + listaInscriptos[index].apellido}</div>
                    <div class="col-md-5 ">${listaInscriptos[index].curso.nombre}</div>
                    <div class="col-md-2 "><button type="button" id="${"buttonDelete" + index}" class="btn btn-custom" >Eliminar</button>
                    </div>
                </li>`)

    }

    return elementoLista;

}

async function loadInscriptos() {
    //console.log("ENTRO A INSCRIPTOS");
    let container = document.querySelector("#inscriptos");
    let response = await fetch('/alumno/get-all-inscriptos', {
        headers: {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            }
        },
    });


    if (response.ok) {
        let alumnosInscriptos = await response.json()
        console.log(alumnosInscriptos);
        //console.log(j);
        container.innerHTML = iniciarInscriptos(alumnosInscriptos);

        for (let index = 0; index < alumnosInscriptos.length; index++) {
            let btnDelete = document.querySelector('#buttonDelete' + index);
            btnDelete.addEventListener('click', function () { borrarAlumno(alumnosInscriptos[index].idalumno) });

        }
    }

}





async function aceptarAlumno(idalumno) {
    //console.log("aaaaaaaaaaaaaaaaaaaaaaaaa");
    let response = await fetch("/alumno/" + idalumno, {
        "method": "PUT",
        "headers": {
            "Content-Type": "application/json"
        },

    })
    if (response.ok) {
        let json = await response.text();
        loadInscriptos();
        loadAlumnos();
        alert("Alumno Aceptado");



    }

}

async function borrarAlumno(idalumno) {
    //console.log("entro a delete");
    // en alumnos-inscriptos delete no funciona por eso el fetch es /alumnos
    let response = await fetch(`/alumno/` + idalumno, {
        "method": "DELETE",
        "headers": {
            "Content-Type": "application/json"
        }
    });

    loadInscriptos();
}