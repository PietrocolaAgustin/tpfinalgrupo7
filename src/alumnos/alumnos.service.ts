import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Alumno } from './alumno';


@Injectable()
export class AlumnosService {


    private listaAlumnos: Alumno[];

    public constructor() {
        this.loadAlumnos();
    }


    public getAlumnos(): Alumno[] {
        return this.listaAlumnos;
    }

    public getAlumno(index: number): Alumno {
        // Más adelante agregar manejo de status code
        //if (index < 0 || index >= this.listaProductos.length)
        return null;

        // return this.listaProductos[index];
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
}



