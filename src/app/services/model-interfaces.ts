export interface Persona{
    id: number;
    nombre: string;
    apellido: string;
    ocupacion: string;
    descripcion: string;
    ubicacion: string;
    lugarTrabajo: string;
    email: string;
    telefono: string;
    imagenPerfil: string;
    banner: string;
    github: string;
}

export interface ExpItemPost {
    titulo: string;
    descripcion: string;
    lugar: string;
    fechaInicio?: Date;
    fechaFin?: Date;
    isCurrent: boolean;
    imagen: string;
    personaId: number;
    displayOrder: number;
}
  
export interface ExpItem extends ExpItemPost{
    id: number;
}

export interface EducItemPost {
    titulo: string;
    descripcion: string;
    institucion: string;
    fechaInicio?: Date;
    fechaFin?: Date;
    isCurrent: boolean;
    imagen: string;
    personaId: number;
    displayOrder: number;
}
  
export interface EducItem extends EducItemPost{
    id: number;
} 

export interface SkillItemPost {
    titulo: string;
    valor: number;
    tipo: string;
    personaId: number;
    displayOrder: number;

    //descripcion: string; 
    //etiqueta: string;   
}
  
export interface SkillItem extends SkillItemPost{
    id: number;
} 

export interface SkillItemPost {
    titulo: string;
    valor: number;
    tipo: string;
    personaId: number;

    //descripcion: string; 
    //etiqueta: string;   
}
  
export interface SkillItem extends SkillItemPost{
    id: number;
} 

export interface ProyectoItemPost{
    titulo: string;
    descripcion: string;
    fecha: Date;
    link: string;
    imagen: string;
    personaId: number;
    displayOrder: number;
}

export interface ProyectoItem extends ProyectoItemPost {
    id: number
}

export interface Credenciales {
    username: string;
    password: string;
}

export interface AuthResponse {
    successful: boolean;
    accessToken: string;
    refreshToken:string;
    roles: Array<string>;
}

export class OrderDTO {
    id?: number;
    displayOrder?: number;
  
    constructor(id: number, disOr: number){
      this.id=id;
      this.displayOrder=disOr;
    }
}
  