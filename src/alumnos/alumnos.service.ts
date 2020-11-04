import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Alumno } from './alumno';


@Injectable()
export class AlumnosService {


    private listaAlumnos: Alumno[];

    public constructor() {

    }


    public getAlumnos(): Alumno[] {
        this.loadAlumnos();
        return this.listaAlumnos;
    }

    public getAlumno(index: number): Alumno {
        // Más adelante agregar manejo de status code

        return null;


    }


    private loadAlumnos(): void {
        let archivo = fs.readFileSync('alumnos.csv', 'utf8');
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
                elementos[i][7]

            );

            this.listaAlumnos.push(alumno);

        });
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
            id = "alumno_" + elementos.length;
            const alumno = new Alumno(id, nombreAlumno, apellidoAlumno, curso, telefonoAlumno, dniAlumno, mailAlumno, direccionAlumno);

            
            fs.appendFileSync('alumnos.csv',
                "\n" +
                  alumno.getidAlumno()+ ","
                + alumno.getNombreAlumno() + ","
                + alumno.getApellidoAlumno() + ","
                + alumno.getNombreCurso() + ","
                + alumno.getTelefonoAlumno() + ","
                + alumno.getDniAlumno() + ","
                + alumno.getMailAlumno() + ","
                + alumno.getDireccionAlumno());
            return "ok";
        }
        else
            return "parametros incorrectos";
    }
}



