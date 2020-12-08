import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Curso } from './curso.entity';

@Entity('alumno')
export class Alumno {

    @PrimaryGeneratedColumn()
    idalumno: number;
    @Column()
    private nombre: string;
    @Column()
    private apellido: string;
    @Column()
    private idcurso: number;
    @Column({type: "bigint"})
    private telefono: number;
    @Column({type: "bigint"})
    private dni: number;
    @Column()
    private mail: string;
    @Column()
    private direccion: string;
    @Column()
    private estado: boolean;

    @ManyToOne(() => Curso )
    @JoinColumn({name :'idcurso'})
    curso: Curso;


    public constructor(id?: number, nombre?: string, apellido?: string, idcurso?: number, telefono?: number, dni?: number, mail?: string, direccion?: string, estado?: boolean) {
        this.idalumno = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.idcurso = idcurso;
        this.telefono = telefono;
        this.dni = dni;
        this.mail = mail;
        this.direccion = direccion;
        this.estado = estado;
    }

    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nombre : string): void{
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }
    public setApellido(apellido : string): void{
        this.apellido = apellido;
    }

    public getIdCurso(): number {
        return this.idcurso;
    }
    public setIdCurso(idcurso : number): void{
        this.idcurso = idcurso;
    }

    public getTelefono(): number {
        return this.telefono;
    }
    public setTelefono(telefono : number): void{
        this.telefono = telefono;
    }

    public getMail(): string {
        return this.mail;
    }
    public setMail(mail : string): void{
        this.mail = mail;
    }

    public getDireccion(): string {
        return this.direccion;
    }
    public setDireccion(direccion : string): void{
        this.direccion = direccion;
    }

    public getEstado(): boolean {
        return this.estado;
    }
    public setEstado(estado : boolean): void{
        this.estado = estado;
    }




}