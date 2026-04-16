import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Finca } from '../models/finca.model';

@Injectable({
    providedIn: 'root'
})
export class FincaService {

    private mockFincas: Finca[] = [
        {
            id: '1', nombre: 'Finca La Esperanza', ubicacion: 'Salento, Quindío', capacidad: 10, precioPorNoche: 450000,
            servicios: ['Vista a la montaña', 'Piscina'], imagenes: ['assets/img/finca/Prev_finca/fin_1.png'], descripcion: '', propietarioId: 'prop_01', puntuacion: 4.92
        },
        {
            id: '2', nombre: 'Casa de Campo El Cafetal', ubicacion: 'Filandia, Quindío', capacidad: 6, precioPorNoche: 320000,
            servicios: ['Experiencia cafetera', 'WiFi'], imagenes: ['assets/img/finca/Prev_finca/fin_2.png'], descripcion: '', propietarioId: 'prop_02', puntuacion: 4.85
        },
        {
            id: '3', nombre: 'Glamping Los Nevados', ubicacion: 'Santa Rosa de Cabal, Risaralda', capacidad: 2, precioPorNoche: 550000,
            servicios: ['Jacuzzi privado', 'Pet friendly'], imagenes: ['assets/img/finca/Prev_finca/fin_3.png'], descripcion: '', propietarioId: 'prop_03', puntuacion: 4.98
        },
        {
            id: '4', nombre: 'Hacienda Real', ubicacion: 'Armenia, Quindío', capacidad: 15, precioPorNoche: 1200000,
            servicios: ['Piscina infinita', 'Chef incluido'], imagenes: ['assets/img/finca/Prev_finca/fin_4.png'], descripcion: '', propietarioId: 'prop_04', puntuacion: 5.0, superanfitrion: true
        },
        {
            id: '5', nombre: 'Villa Panorámica', ubicacion: 'Pereira, Risaralda', capacidad: 8, precioPorNoche: 680000,
            servicios: ['Diseño moderno', 'WiFi Fibra'], imagenes: ['assets/img/finca/Prev_finca/fin_5.png'], descripcion: '', propietarioId: 'prop_05', puntuacion: 4.75
        },
        {
            id: '6', nombre: 'Cabaña El Refugio', ubicacion: 'Montenegro, Quindío', capacidad: 4, precioPorNoche: 280000,
            servicios: ['Cerca al Parque del Café', 'Familiar'], imagenes: ['assets/img/finca/Prev_finca/fin_6.png'], descripcion: '', propietarioId: 'prop_06', puntuacion: 4.60
        },
        {
            id: '7', nombre: 'Eco-Lodge Manizales', ubicacion: 'Manizales, Caldas', capacidad: 4, precioPorNoche: 390000,
            servicios: ['Avistamiento de aves', 'Sostenible'], imagenes: ['assets/img/finca/Prev_finca/fin_7.png'], descripcion: '', propietarioId: 'prop_07', puntuacion: 4.95
        },
        {
            id: '8', nombre: 'Casa Grande Quimbaya', ubicacion: 'Quimbaya, Quindío', capacidad: 20, precioPorNoche: 950000,
            servicios: ['Para grupos grandes', 'BBQ'], imagenes: ['assets/img/finca/Prev_finca/fin_8.png'], descripcion: '', propietarioId: 'prop_08', puntuacion: 4.88
        }
    ];

    constructor() { }

    // Simula el GET de todas las fincas
    getFincas(): Observable<Finca[]> {
        return of(this.mockFincas);
    }

    // Simula el GET de una finca específica por su ID
    getFincaById(id: string): Observable<Finca | undefined> {
        const finca = this.mockFincas.find(f => f.id === id);
        return of(finca);
    }

}