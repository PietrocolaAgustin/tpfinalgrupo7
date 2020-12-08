import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuario')
export class Usuario {

    @PrimaryGeneratedColumn()
    idusuario: number;
    @Column()
    private usuario: string;
    @Column()
    private password: string;
}