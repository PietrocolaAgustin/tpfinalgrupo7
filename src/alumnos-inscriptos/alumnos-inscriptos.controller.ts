import { Controller, Get, Delete } from '@nestjs/common';
import { Alumno } from 'src/alumnos/alumno';
import { AlumnosService } from 'src/alumnos/alumnos.service';

@Controller('alumnos-preinscriptos')
export class AlumnosInscriptosController {
    constructor(private alumnosService: AlumnosService) { }


    @Get()
    public getAlumnoInscripto(): Alumno[]{
        
        return this.alumnosService.getAlumnoInscripto();
    }

    @Delete(':index')
    public eliminarAlumno(@Param('index') index): boolean
    {
    return this.alumnosService
    
    //.eliminarAlumno(parseInt(index));
    
    }

}
