import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Experiencia } from '../models/experiencia.model';

@Injectable({
    providedIn: 'root'
})
export class ExperienciaService {

    private mockExperiencias: Experiencia[] = [
        {
            id: 'exp_1',
            titulo: 'Parapente en Buenavista',
            categoria: 'Aventura',
            ubicacion: 'Buenavista, Quindío',
            distancia: '45 km de Santagueda',
            duracion: '1 hora',
            precio: 180000,
            sufijo_precio: '/ persona',
            imagenes: ['assets/img/experience/prev_expe/exp_1.png'],
            descripcion: 'Vuela sobre el paisaje cultural cafetero y disfruta de una vista inigualable de los Andes.',
            incluye: ['Vuelo', 'Piloto'],
            puntuacion: 4.9,
            num_resenas: 128
        },
        {
            id: 'exp_2',
            titulo: 'Ruta Gastronómica de Salento',
            categoria: 'Gastronomía',
            ubicacion: 'Salento, Quindío',
            distancia: '15 km de Santagueda',
            duracion: '3 horas',
            precio: 95000,
            sufijo_precio: '/ pareja',
            imagenes: ['assets/img/experience/prev_expe/exp_2.png'],
            descripcion: 'Prueba la trucha al ajillo y el patacón gigante en los mejores restaurantes del pueblo más...',
            incluye: ['Comida', 'Guía'],
            puntuacion: 4.8,
            num_resenas: 84
        },
        {
            id: 'exp_3',
            titulo: 'Jardín Botánico del Quindío',
            categoria: 'Naturaleza',
            ubicacion: 'Calarcá, Quindío',
            distancia: '30 km de Santagueda',
            duracion: 'Medio día',
            precio: 45000,
            sufijo_precio: '/ entrada',
            imagenes: ['assets/img/experience/prev_expe/exp_3.png'],
            descripcion: 'Visita el mariposario más grande de Colombia y avistamiento de aves en un entorno mágico.',
            incluye: ['Entrada', 'Guía'],
            puntuacion: 5.0,
            num_resenas: 210
        },
        {
            id: 'exp_4',
            titulo: 'Termales de Santa Rosa',
            categoria: 'Bienestar',
            ubicacion: 'Santa Rosa de Cabal',
            distancia: '55 km de Santagueda',
            duracion: 'Día completo',
            precio: 70000,
            sufijo_precio: '/ pasadia',
            imagenes: ['assets/img/experience/prev_expe/exp_4.png'],
            descripcion: 'Relájate en aguas termales naturales con cascadas de agua fría en medio de las montañas.',
            incluye: ['Entrada'],
            puntuacion: 4.7,
            num_resenas: 315
        },
        {
            id: 'exp_5',
            titulo: 'Caminata Valle del Cocora',
            categoria: 'Naturaleza',
            ubicacion: 'Valle de Cocora',
            distancia: '40 km de Santagueda',
            duracion: '4 horas',
            precio: 35000,
            sufijo_precio: '/ guia',
            imagenes: ['assets/img/experience/prev_expe/exp_5.png'],
            descripcion: 'Senderismo entre las palmas de cera más altas del mundo, el árbol nacional de Colombia.',
            incluye: ['Guía'],
            puntuacion: 4.9,
            num_resenas: 542
        },
        {
            id: 'exp_6',
            titulo: 'Tour en Jeep Willys',
            categoria: 'Cultura',
            ubicacion: 'Eje Cafetero',
            distancia: '10 km de Santagueda',
            duracion: '2 horas',
            precio: 200000,
            sufijo_precio: '/ tour privado',
            imagenes: ['assets/img/experience/prev_expe/exp_6.png'],
            descripcion: 'Recorre caminos veredales en el transporte tradicional de la región, el famoso "Yipao".',
            incluye: ['Transporte', 'Conductor'],
            puntuacion: 5.0,
            num_resenas: 98
        }
    ];

    constructor() { }

    getExperiencias(): Observable<Experiencia[]> {
        return of(this.mockExperiencias);
    }
}
