import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';
import { Usuario } from 'src/entities/user.entity';
import { Equal, Repository } from 'typeorm';



@Injectable()
export class LoginService {

    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>
    ) { }


    public async login(userInfo: any): Promise<boolean> {
        const result: Usuario = await this.usuarioRepository.findOne({

            where: [
                {
                    "usuario": Equal(userInfo.usuario),
                    "password": Equal(userInfo.password)
                },

            ]
        });console.log(result);
        if(result !== undefined){
            return true;
        }else{
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "Usuario o contrase;a incorrectos ",
            }, HttpStatus.NOT_FOUND);
        }
        
    }

}