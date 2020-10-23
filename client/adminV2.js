"use strict";
console.log("entro")
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

function iniciaPreInscriptos() {
    let elementoLista = "";
    for (let index = 0; index < listaPreInscriptos.length; index++) {
        elementoLista = elementoLista + (`<li class="list-group-item lista">
        <div class="row">
            <div class="col-md-5 ">${listaPreInscriptos[index].nombreAlumno}</div>
            <div class="col-md-5 ">${listaPreInscriptos[index].nombreCurso}</div>
            <div class="col-md-2 "><button type="button" class="btn btn-custom">Aceptar</button>
            </div>
        </li>`)

    }
    console.log(elementoLista);
    console.log(document.getElementById("preInscriptos"));
    document.getElementById("preInscriptos").innerHTML = elementoLista;
    
}



