import { Controller, Get, Post, Put } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';


@Controller('alumnos')
export class AlumnosController {
    constructor(private alumnosService: AlumnosService) {}

    @Get("/preinscriptos")
    public getAlumno() : string{
        return this.alumnosService.getPreinscriptos();
    }
   // @Post("/agregarPreinscriptos")
  //  public postAlumno() : string{
   //     return this.alumnosService.postPreinscripto();
   // }
}
