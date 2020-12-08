import { Body, Controller, Get, Post, Put, Param, Delete } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { Alumno } from './alumno';


@Controller('alumnos')
export class AlumnosController {
    constructor(private alumnosService: AlumnosService) { }

    

    //obtengo de a 1 alumno segun id(index)
    @Get(':index')
    public getAlumno(@Param('index') index): Alumno {
        
        return this.alumnosService.getAlumno(index);
    }

       

    @Post('/aceptar')
    aceptarAlumno(@Body() alumn: any): string {
        
        return this.alumnosService.aceptarAlumno(alumn);
    }

    // obtengo array alumno
    @Get()
    public getNombreAlumnos(): Alumno[] {
        return this.alumnosService.getAlumnos();
    }

    @Post()
    create(@Body() alumn: any): string {
        return this.alumnosService.create(alumn);
    }

    @Delete(':id')
    public eliminarAlumno(@Param('id') id: number): boolean{
    //console.log("entro al controlador");
    return this.alumnosService.eliminarAlumno(id);
   
   }
}
