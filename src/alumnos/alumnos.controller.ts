import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';
import { from } from 'rxjs';
import { AlumnosService } from './alumnos.service';
import { Alumno } from './alumno'; 

@Controller('alumnos')
export class AlumnosController {
    constructor(private alumnosService: AlumnosService) { }

     @Get()
     public getNombreAlumnos(): Alumno[] {
         return this.alumnosService.getAlumnos();
     }

     @Get(':index')
     public getAlumno(@Param('index') index): Alumno {
         return this.alumnosService.getAlumno(index);
     }


    // @Post()
    // create(@Body() alumnospreinscriptos: any): string {
    //     return
    //     this.alumnosService.create(alumnospreinscriptos);
    // }
}
