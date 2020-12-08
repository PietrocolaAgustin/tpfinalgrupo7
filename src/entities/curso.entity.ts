import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Alumno } from './alumno.entity';

@Entity('cursos')
export class Curso {

    @PrimaryGeneratedColumn()
    idcursos: number;
    @Column()
    private nombre: string;
    @Column()
    private descripcion: string;
    @Column()
    private cupo: number;

    // @OneToOne(() => Alumno, (alumno: Alumno) => alumno.curso)
    // public alumno: Alumno;
}