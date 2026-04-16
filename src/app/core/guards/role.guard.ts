import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    // Obtenemos el rol esperado desde la configuración de la ruta
    const expectedRole = route.data['role'];

    if (authService.isLoggedIn() && authService.hasRole(expectedRole)) {
        return true;
    }

    // Si no tiene el rol, lo manda al inicio o a una página de "No autorizado"
    return router.parseUrl('/');
};