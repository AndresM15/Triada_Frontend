import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'catalog',
        loadComponent: () => import('./features/catalog/catalog.component').then(m => m.CatalogComponent)
    },
    {
        path: 'catalog/details/:id',
        loadComponent: () => import('./features/catalog/finca-detail/finca-detail.component').then(m => m.FincaDetailComponent)
    },
    {
        path: 'auth/login',
        loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'auth/register',
        loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: 'experiencias',
        loadComponent: () => import('./features/experience/experience.component').then(m => m.ExperienceComponent)
    },
    {
        path: 'booking/summary/:id',
        loadComponent: () => import('./features/booking/booking-summary/booking-summary.component').then(m => m.BookingSummaryComponent)
    },
    {
        path: 'booking/confirmation/:id',
        loadComponent: () => import('./features/booking/booking-confirmation/booking-confirmation.component').then(m => m.BookingConfirmationComponent)
    },
    { path: '', redirectTo: 'catalog', pathMatch: 'full' },
    { path: '**', redirectTo: 'catalog' }
];