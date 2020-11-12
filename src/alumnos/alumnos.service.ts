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
                    elementos[i][0],
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

        if (nombreAlumno && apellidoAlumno && curso && telefonoAlumno && dniAlumno && mailAlumno && direccionAlumno) {
            let id = null;
            let archivo = fs.readFileSync('alumnos.csv').toString();
            let elementos = archivo.split('\n');
            id = "alumno_" + this.listaAlumnos.length;
            const alumno = new Alumno(id, nombreAlumno, apellidoAlumno, curso, telefonoAlumno, dniAlumno, mailAlumno, direccionAlumno, false);
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
           let idInscripto = "alumno_" + this.listaInscriptos.length;

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

            let posicion = null;

            for (let index = 0; index < this.listaAlumnos.length; index++) {
                if (alumno.getidAlumno() === this.listaAlumnos[index].getidAlumno()) {
                    posicion = index;

                }
            }
            let archivo = fs.readFileSync('alumnos.csv', 'utf8');

            let arrayActualizado = archivo.split('\n');
            arrayActualizado.splice(posicion, 1);
            const archivoActualizado = arrayActualizado.join('\n');
            console.log(arrayActualizado);
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
                    elementos[i][0],
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



    public eliminarAlumno(position: number): boolean {
        let removed = this.listaInscriptos.splice(position,1);
        return removed.length == 1;
        }
}

