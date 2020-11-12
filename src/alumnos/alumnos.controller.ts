import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { Alumno } from './alumno';


@Controller('alumnos')
export class AlumnosController {
    constructor(private alumnosService: AlumnosService) { }

    

    @Get(':index')
    public getAlumno(@Param('index') index): Alumno {
        return this.alumnosService.getAlumno(index);
    }

       

    @Post('/aceptar')
    aceptarAlumno(@Body() alumn: any): string {
        
        return this.alumnosService.aceptarAlumno(alumn);
    }

    @Get()
    public getNombreAlumnos(): Alumno[] {
        return this.alumnosService.getAlumnos();
    }

    @Post()
    create(@Body() alumn: any): string {
        return this.alumnosService.create(alumn);
    }
}
