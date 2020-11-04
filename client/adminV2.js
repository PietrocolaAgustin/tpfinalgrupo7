"use strict";
console.log("ANDO");



//let btnAceptar = document.querySelector("#");
//btnAceptar.addEventListener("click" , AceptarInscripcion );
//let btnBorrarAlumno = document.querySelector("#");
//btnBorrarAlumno.addEventListener("click" , borrarAlumno );


let nuevoAlumnoPreinscripto = [];

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

/*

function agregarPreinscripto() {
    console.log("Funcion Agregar");
    let nombre = document.querySelector('#nombre').value;
    let apellido = document.querySelector('#apellido').value;
    let curso = document.querySelector('#curso').value;
    let telefono = document.querySelector('#telefono').value;
    let dni = document.querySelector('#dni').value;
    let mail = document.querySelector('#mail').value;
    let direccion = document.querySelector('#direccion').value;


    let nuevoAlumno = {
        "nombre": nombreAlumno,
        "apellido": apellido,
        "curso": curso,
        "telefono": telefono,
        "dni": dni,
        "mail": mail,
        "direccion": direccion,
    }
    nuevoAlumnoPreinscripto.push(nuevoAlumno);

    mostrarPreinscriptos();


    btnpreInscribir.addEventListener("click", consle.log("CARGO"));
}

*/




/*function mostrarPreinscriptos() {
    let html = "";
    for (let r of compras) {
        html += `
    <tr>
    <td>${r.producto}</td>
    <td>${r.precio}</td>
    </tr>
    `;
    }
    document.querySelector("#tblCompras").innerHTML = html;
}*/
/*
function AceptarInscripcion() {
    console.log("Funcion Agregar");
    let producto = document.querySelector('#producto').value;
    let precio =
        parseInt(document.querySelector('#precio').value);

    let renglon = {
        "producto": producto,
        "precio": precio
    }
    compras.push(renglon);

    mostrarTablaCompras();

}
*/
function iniciaPreInscriptos(listaPreInscriptos) {
    let elementoLista = "";
    for (let index = 0; index < listaPreInscriptos.length; index++) {
        elementoLista = elementoLista + (`<li class="list-group-item lista">
                <div class="row">
                    <div class="col-md-5 ">${listaPreInscriptos[index].nombreAlumno + " " + listaPreInscriptos[index].apellidoAlumno}</div>
                    <div class="col-md-5 ">${listaPreInscriptos[index].nombrecurso}</div>
                    <div class="col-md-2 "><button type="button" id="${index}" class="btn btn-custom" onclick="aceptarAlumno(${listaPreInscriptos[index]})">Aceptar</button>
                    </div>
                </li>`)

    }

    return elementoLista;

}


async function loadAlumnos() {
    let container = document.querySelector("#preInscriptos");
    let response = await fetch(`/alumnos`);
    if (response.ok) {
        console.log(response);
        let t = await response.json()
        console.log(t);
        container.innerHTML = iniciaPreInscriptos(t);

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