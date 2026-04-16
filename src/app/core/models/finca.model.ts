export interface Finca {
    id: string;
    nombre: string;
    ubicacion: string; // Específicamente sector Santagueda 
    capacidad: number;
    precioPorNoche: number;
    servicios: string[]; // Piscina, WiFi, etc
    imagenes: string[];
    descripcion: string;
    propietarioId: string;
    puntuacion: number; // Para el sistema de reseñas 
    superanfitrion?: boolean; // Etiqueta especial
}