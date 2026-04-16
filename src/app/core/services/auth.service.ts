import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface UserSession {
    id: string;
    nombre: string;
    rol: 'cliente' | 'propietario' | 'admin';
    token: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    // Usamos un Signal para manejar el estado reactivo del usuario 
    currentUser = signal<UserSession | null>(null);

    constructor() { }

    // Simulación de Login
    login(email: string, pass: string): Observable<boolean> {
        // Aquí simulas una validación exitosa
        const mockUser: UserSession = {
            id: 'usr_123',
            nombre: 'Usuario Prueba',
            rol: 'cliente',
            token: 'fake-jwt-token-12345'
        };

        this.currentUser.set(mockUser);
        return of(true);
    }

    logout(): void {
        this.currentUser.set(null);
    }

    isLoggedIn(): boolean {
        return !!this.currentUser();
    }

    hasRole(role: string): boolean {
        return this.currentUser()?.rol === role;
    }
}