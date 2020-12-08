export class Curso {
    private idCurso: number;
    private nombreCurso: string;
    private descripcionCurso: string;


public constructor(idCurso: number, nombreCurso: string, descrpcionCurso: string ) {
    this.idCurso = idCurso;
    this.nombreCurso = nombreCurso;
    this.descripcionCurso = descrpcionCurso;
 
}

public getidCurso(): number {
    return this.idCurso;
}

public getNombreCurso(): string {
    return this.nombreCurso;
}

public getDescripcionCurso(): string{
    return this.descripcionCurso;
}





}