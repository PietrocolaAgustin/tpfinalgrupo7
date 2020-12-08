import { Controller, Get, Delete, Param } from '@nestjs/common';
import { Alumno } from 'src/alumnos/alumno';
import { AlumnosService } from 'src/alumnos/alumnos.service';

@Controller('alumnos-inscriptos')
export class AlumnosInscriptosController {
    constructor(private alumnosService: AlumnosService) { }


    @Get()
    public getAlumnoInscripto(): Alumno[]{
        
        return this.alumnosService.getAlumnoInscripto();
    }

  //  @Delete(':index')
  //  public eliminarAlumno(@Param('index') index: string): boolean{
 //   console.log("entro al controlador");
  //  return this.alumnosService.eliminarAlumno(parseInt(index));
   
 //  }
   
}
