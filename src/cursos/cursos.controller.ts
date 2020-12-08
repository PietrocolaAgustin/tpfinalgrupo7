import { Controller, Get, Param } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { Curso } from './curso';

@Controller('cursos')
export class CursosController {
    constructor(private cursosService: CursosService) { }



//    @Get('')
  //  public getCurso(@Param('index') index): Curso []  {
        
        //return this.cursosService.getCurso();
    //}

}
