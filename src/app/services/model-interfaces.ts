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
    personaId: number;
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
    personaId: number;
}
  
export interface EducItem extends EducItemPost{
    id: number;
} 

export interface SkillItemPost {
    titulo: string;
    descripcion: string;
    valor: number;
    etiqueta: string;
    personaId: number;
}
  
export interface SkillItem extends SkillItemPost{
    id: number;
} 

export interface Credenciales {
    username: string;
    password: string;
}

export interface AuthResponse {
    successful: boolean;
    accessToken: string;
    roles: Array<string>;
  }
  