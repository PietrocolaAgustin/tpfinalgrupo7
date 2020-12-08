import {  Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { AlumnoDTO } from 'src/DTOs/alumnoDTO';
import { Alumno } from 'src/entities/alumno.entity';
//import { Alumno } from 'src/alumnos/alumno';
import { AlumnoService } from './alumno.service';


@Controller('alumno')
export class AlumnoController {
    //constructor(private alumnoService: AlumnoService) { }
    public constructor(private readonly alumnoService: AlumnoService) { }


    @Get("get-all-raw")
    public async getAlumnosRaw(): Promise<Alumno[]>{

        return this.alumnoService.getAllRaw();
    }


    @Get("get-all-preinscripto")
    public getAllAlumnoPreinscripto(): Promise<Alumno[]>{
        return this.alumnoService.getAllPreinscriptos();
    }

    @Get("get-all-inscriptos")
    public getAllAlumnoInscripto(): Promise<Alumno[]>{
        return this.alumnoService.getAllInscriptos();
    }


    @Get(":id")
    public getAlumnoById(@Param('id') id: number): Promise<Alumno>{
        return this.alumnoService.getById(id);
    }

    
    @Put(":id")
    public updateAlumno(@Param('id') id: number): Promise<Alumno>{
        return this.alumnoService.aceptarAlumno(id);
    }

    
    @Delete(":id")
    public deleteAlumno(@Param('id') id: number){
        return this.alumnoService.deleteAlumno(id);
    }

    
    @Post("nuevo-alumno")
    createAlumno(@Body() alumnoDto: AlumnoDTO): Promise<Alumno> {
        return this.alumnoService.agregarAlumno(alumnoDto);
    }

}

