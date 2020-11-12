export class Alumno {
    private id: number;
    private nombreAlumno: string;
    private apellidoAlumno: string;
    private nombrecurso: string;
    private telefonoAlumno: number;
    private dniAlumno: number;
    private mailAlumno: string;
    private direccionAlumno: string;
    private estadoAlumno : boolean;




    public constructor(id: number, nombreAlumno: string, apellidoAlumno: string, nombrecurso: string, telefonoAlumno: number,
        dniAlumno: number, mailAlumno: string, direccionAlumno: string, estadoAlumno : boolean) {
        this.id = id;
        this.nombreAlumno = nombreAlumno;
        this.apellidoAlumno = apellidoAlumno;
        this.nombrecurso = nombrecurso;
        this.telefonoAlumno = telefonoAlumno;
        this.dniAlumno = dniAlumno;
        this.mailAlumno = mailAlumno;
        this.direccionAlumno = direccionAlumno;
        this.estadoAlumno = estadoAlumno;
    }
    public getidAlumno(): number {
        return this.id;
    }

    public getNombreAlumno(): string {
        return this.nombreAlumno;
    }
    public getApellidoAlumno(): string {
        return this.apellidoAlumno;
    }
    public getNombreCurso(): string {
        return this.nombrecurso;
    }
    public getTelefonoAlumno(): number {
        return this.telefonoAlumno;
    }
    public getDniAlumno(): number {
        return this.dniAlumno;
    }
    public getMailAlumno(): string {
        return this.mailAlumno;
    }
    public getDireccionAlumno(): string {
        return this.direccionAlumno;
    }
    public getestadoAlumno(): boolean {
        return this.estadoAlumno;
    }



} 