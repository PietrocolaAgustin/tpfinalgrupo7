import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Alumno } from 'src/entities/alumno.entity';
import * as fs from 'fs';
import { Equal, LessThan, LessThanOrEqual, MoreThan, MoreThanOrEqual, Repository } from 'typeorm';
import { AlumnoDTO } from '../DTOs/alumnoDTO';

@Injectable()
export class AlumnoService {
    

    constructor(
        @InjectRepository(Alumno)
        private readonly alumnoRepository: Repository<Alumno>
    ) { }

    public async getAllRaw(): Promise<Alumno[]> {
        console.log("getAllRaw de alumnos")
        let result;
        try {
            result = await this.alumnoRepository.query("select * from alumno");
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }

        let alumnos: Alumno[] = [];
        result.forEach(element => {
            let p: Alumno = new Alumno(
                element['idalumno'],
                element['nombre'],
                element['apellido'],
                element['idcurso'],
                element['telefono'],
                element['dni'],
                element['mail'],
                element['direccion'],
                element['estado'])

            alumnos.push(p);
        });

        return alumnos;
    }


    public async getAllPreinscriptos(): Promise<Alumno[]> {
        console.log("Get All Alumnos Preinscriptos");
        try {

            const result: Alumno[] = await this.alumnoRepository.find({
                 relations: ["curso"] ,
                where: [
                    { "estado": Equal(false) },
                    
                ]
            });
            return result

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }

    public async getAllInscriptos(): Promise<Alumno[]> {
        console.log("Get All Alumnos Inscriptos");
        try {

            const result: Alumno[] = await this.alumnoRepository.find({
                relations: ["curso"],
                where: [
                    { "estado": Equal(true) },
                    
                ]
            });
            return result

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }



    public async getById(id: number): Promise<Alumno> {
        console.log("Getting Alumno id: " + id);
        try {
            const alumno: Alumno = await this.alumnoRepository.findOne(id);
            return alumno;

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }


    public async aceptarAlumno(id: number): Promise<Alumno>{
        try {
            let alumno: Alumno = await this.getById(id);

            if(alumno){

                alumno.setEstado(true);
                

                const alumnoUpdated: Alumno = await this.alumnoRepository.save(alumno);

                if (alumnoUpdated) {
                    return alumnoUpdated;
                }else {
                    throw new HttpException('No se pudo aceptar alumno', HttpStatus.NOT_MODIFIED);    
                }                
            }else{
                throw new HttpException('No se pudo aceptar alumno', HttpStatus.NOT_FOUND);
            }
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
              }, HttpStatus.NOT_FOUND);
        }        
    }

    public async deleteAlumno(id: number){        
        try {
            let alumno: Alumno = await this.getById(id);
            if (alumno) {
                let deleteResult = await this.alumnoRepository.delete(id);
                return deleteResult;
            }
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
              }, HttpStatus.NOT_FOUND);
        }
    }




    public async agregarAlumno(alumnoDto: AlumnoDTO): Promise<Alumno> {
        try {
            const alumnoNuevo: Alumno = await this.alumnoRepository.save(new Alumno(
                null,
                alumnoDto.nombre,
                alumnoDto.apellido,
                alumnoDto.idcurso,
                alumnoDto.telefono,
                alumnoDto.dni,
                alumnoDto.mail,
                alumnoDto.direccion,
                false)
            );
            if(alumnoNuevo){

                return alumnoNuevo;
            }else{
                throw new HttpException('No se pudo crear el producto', HttpStatus.NOT_FOUND);
            }
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
              }, HttpStatus.NOT_FOUND);
        }        
}
}
