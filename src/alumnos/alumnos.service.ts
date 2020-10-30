import { Injectable } from '@nestjs/common';



@Injectable()
export class AlumnosService {
    public getPreinscriptos(): any {
        let alumnosPreinscriptos =  [
            {
                "nombre": "Carlos",
                "apellido": "Gimenez",
                "curso": "Programador FullStack",
                "telefono": "2494 669977",
                "dni": " 32165986",
                "mail": "carlosgimenez@algo.com",
                "direccion": "Richieri 115 "
            }
            ,
            {
                "nombre": "Juan",
                "apellido": "Lopez",
                "curso": "Programador FullStack",
                "telefono": "2494 669977",
                "dni": " 32165986",
                "mail": "carlosgimenez@algo.com",
                "direccion": "Richieri 115 "
            }
        ];
        
        
       
        return alumnosPreinscriptos;
        }
        public postPreinscriptos() : any{
            let alumnosPreinscriptos
        }
}
