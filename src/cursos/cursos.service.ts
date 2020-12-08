import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Curso } from './curso';

@Injectable()
export class CursosService {

private curso = Curso;



    
   // public getCurso(): Curso[] {
    //    this.getCurso();
        //return this.curso;
   // }
}
