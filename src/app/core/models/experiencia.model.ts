export interface Experiencia {
    id: string;
    titulo: string;
    categoria: string;
    ubicacion: string;
    distancia: string;
    duracion: string;
    precio: number;
    sufijo_precio: string;
    imagenes: string[];
    descripcion: string;
    incluye: string[];
    puntuacion: number;
    num_resenas: number;
    superanfitrion?: boolean;
}
