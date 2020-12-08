import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Alumno } from './alumno';


@Injectable()
export class AlumnosService {


    private listaAlumnos: Alumno[];
    private listaInscriptos: Alumno[];

    public constructor() {
        this.loadAlumnos();
        this.loadAlumnoInscripto();
    }


    public getAlumnos(): Alumno[] {
        this.loadAlumnos();
        return this.listaAlumnos;
    }

    public getAlumno(index: number): Alumno {


        return null;

    }

    public getAlumnoInscripto(): Alumno[] {

        this.loadAlumnoInscripto();
        return this.listaInscriptos;
    }


    private loadAlumnos(): void {
        let archivo = fs.readFileSync('alumnos.csv', 'utf8');
        if (archivo !== "") {
            const elementos = archivo.split('\n').map(p => p.replace('\r', '')).map(p => p.split(','));

            this.listaAlumnos = [];
            elementos.forEach((elem, i) => {
                let alumno = new Alumno(
                    parseInt(elementos[i][0]),
                    elementos[i][1],
                    elementos[i][2],
                    elementos[i][3],
                    parseInt(elementos[i][4]),
                    parseInt(elementos[i][5]),
                    elementos[i][6],
                    elementos[i][7],
                    elementos[i][8] === "false" ? false : true
                );

                this.listaAlumnos.push(alumno);

            });
            
        }else{
            //si array alumno es vacio le asigna a lista alumnos array vacio 
            this.listaAlumnos = [];

        }
    }

    public create(alumno: any) {

        let nombreAlumno = alumno['nombreAlumno'];
        let apellidoAlumno = alumno['apellido'];
        let curso = alumno['curso'];
        let telefonoAlumno = alumno['telefono'];
        let dniAlumno = alumno['dni'];
        let mailAlumno = alumno['mail'];
        let direccionAlumno = alumno['direccion'];

        //si todos los valores estan definidos entra
        if (nombreAlumno && apellidoAlumno && curso && telefonoAlumno && dniAlumno && mailAlumno && direccionAlumno) {
            let id = null;
            let archivo = fs.readFileSync('alumnos.csv').toString();
           // let elementos = archivo.split('\n');
           // le asigno id alumno_ + el valor del  largo del array
            id = "alumno_" + this.listaAlumnos.length;
            const alumno = new Alumno(id, nombreAlumno, apellidoAlumno, curso, telefonoAlumno, dniAlumno, mailAlumno, direccionAlumno, false);
            //si es el primer alumno a insertar entra al if (no genera el /n )
            if (archivo === "") {
                fs.appendFileSync('alumnos.csv',

                    alumno.getidAlumno() + ","
                    + alumno.getNombreAlumno() + ","
                    + alumno.getApellidoAlumno() + ","
                    + alumno.getNombreCurso() + ","
                    + alumno.getTelefonoAlumno() + ","
                    + alumno.getDniAlumno() + ","
                    + alumno.getMailAlumno() + ","
                    + alumno.getDireccionAlumno() + ","
                    + alumno.getestadoAlumno());
            } else {

                fs.appendFileSync('alumnos.csv',
                    "\n" +
                    alumno.getidAlumno() + ","
                    + alumno.getNombreAlumno() + ","
                    + alumno.getApellidoAlumno() + ","
                    + alumno.getNombreCurso() + ","
                    + alumno.getTelefonoAlumno() + ","
                    + alumno.getDniAlumno() + ","
                    + alumno.getMailAlumno() + ","
                    + alumno.getDireccionAlumno() + ","
                    + alumno.getestadoAlumno());
            }
            return "Usted se encuentra Preinscripto ";
        }
        else
            return "parametros incorrectos";
    }


    public aceptarAlumno(alumno: any): string {

        //let id = alumno['id'];
        let nombreAlumno = alumno['nombreAlumno'];
        let apellidoAlumno = alumno['apellidoAlumno'];
        let curso = alumno['nombrecurso'];
        let telefonoAlumno = alumno['telefonoAlumno'];
        let dniAlumno = alumno['dniAlumno'];
        let mailAlumno = alumno['mailAlumno'];
        let direccionAlumno = alumno['direccionAlumno'];

        //console.log(alumno);
        if (nombreAlumno && apellidoAlumno && curso && telefonoAlumno && dniAlumno && mailAlumno && direccionAlumno) {
           let idInscripto =  this.listaInscriptos.length;

            const alumno = new Alumno(idInscripto, nombreAlumno, apellidoAlumno, curso, telefonoAlumno, dniAlumno, mailAlumno, direccionAlumno, false);
            if(this.listaInscriptos.length === 0){

            fs.appendFileSync('alumnosinscriptos.csv',
                
                alumno.getidAlumno() + ","
                + alumno.getNombreAlumno() + ","
                + alumno.getApellidoAlumno() + ","
                + alumno.getNombreCurso() + ","
                + alumno.getTelefonoAlumno() + ","
                + alumno.getDniAlumno() + ","
                + alumno.getMailAlumno() + ","
                + alumno.getDireccionAlumno() + ","
                + alumno.getestadoAlumno());
            }else{
                fs.appendFileSync('alumnosinscriptos.csv',
                "\n" +
                alumno.getidAlumno() + ","
                + alumno.getNombreAlumno() + ","
                + alumno.getApellidoAlumno() + ","
                + alumno.getNombreCurso() + ","
                + alumno.getTelefonoAlumno() + ","
                + alumno.getDniAlumno() + ","
                + alumno.getMailAlumno() + ","
                + alumno.getDireccionAlumno() + ","
                + alumno.getestadoAlumno());
            }
            // borro alumno de listaAlumnos(preinscripto) segun id
            let posicion = null;
            //busco id
            for (let index = 0; index < this.listaAlumnos.length; index++) {
                //cuando encuentro el id de alumno a aceptar guardo el index o la posicion
                if (alumno.getidAlumno() == this.listaAlumnos[index].getidAlumno()) {
                    posicion = index;

                }
            }
            //leo el archivo
            let archivo = fs.readFileSync('alumnos.csv', 'utf8');
            //divido la lineas por el caracter /n . devuelve nuevo array
            let arrayActualizado = archivo.split('\n');
            //elimino elemento 1 elemento segun posicion
            arrayActualizado.splice(posicion, 1);
            //junto nuevamente las linias separadas anteriormente separados por /n
            const archivoActualizado = arrayActualizado.join('\n');
            //console.log(arrayActualizado);
            //sobreescribo el archivo con datos actualizados
            fs.writeFileSync('alumnos.csv', archivoActualizado);



            return null;
        }



    }

    public loadAlumnoInscripto(): void {

        let archivo = fs.readFileSync('alumnosinscriptos.csv', 'utf8');
        if (archivo !== "") {

            const elementos = archivo.split('\n').map(p => p.replace('\r', '')).map(p => p.split(','));
            this.listaInscriptos = [];
            elementos.forEach((elem, i) => {

                let inscripto = new Alumno(
                    parseInt(elementos[i][0]),
                    elementos[i][1],
                    elementos[i][2],
                    elementos[i][3],
                    parseInt(elementos[i][4]),
                    parseInt(elementos[i][5]),
                    elementos[i][6],
                    elementos[i][7],
                    elementos[i][8] === "true" ? true : false
                );

                this.listaInscriptos.push(inscripto);

            });

        } else {
            this.listaInscriptos = [];
        }
    }



    public eliminarAlumno(idAlumnoInscripto: number): boolean {
        //leo el archivo
        let archivo = fs.readFileSync('alumnosinscriptos.csv', 'utf8');
        //divido la lineas por el caracter /n . devuelve array
        let arrayActualizado = archivo.split('\n');
        
        let posicion = null;
        //recorro listaIncriptos 
        for (let index = 0; index < this.listaInscriptos.length; index++) {
                //cuando encuentro id de alumno guardo la posicion del alumno en el array
            if (idAlumnoInscripto == this.listaInscriptos[index].getidAlumno()) {
                posicion = index;
            }
        }
        //elimino elemento 1 elemento segun posicion
        let alumnoEliminado = arrayActualizado.splice(posicion, 1);
        //junto nuevamente las linias separadas anteriormente separados por /n
        const archivoActualizado = arrayActualizado.join('\n');
        //console.log(arrayActualizado);
        //sobreescribo el archivo
        fs.writeFileSync('alumnosinscriptos.csv', archivoActualizado);
        return alumnoEliminado.length == 1;
        }
}

