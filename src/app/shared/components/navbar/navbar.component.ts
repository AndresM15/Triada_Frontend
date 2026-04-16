import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="navbar">
      <div class="logo" routerLink="/catalog">
        <img src="/assets/img/logo.png" alt="Logo">
        <span class="logo-text">Triada Cafetera</span>
      </div>

      <div class="nav-links">
        <a routerLink="/catalog" routerLinkActive="active">Fincas</a>
        <a routerLink="/experiencias" routerLinkActive="active">Experiencias</a>
        <a routerLink="/nosotros" routerLinkActive="active">Nosotros</a>
      </div>

      <div class="auth-actions">
        <ng-container *ngIf="!authService.isLoggedIn(); else userMenu">
          <button class="btn-login" routerLink="/auth/login">Iniciar Sesión</button>
          <button class="btn-register" routerLink="/auth/register">Registrarse</button>
        </ng-container>

        <ng-template #userMenu>
          <span class="user-name">{{ authService.currentUser()?.nombre }}</span>
          <button (click)="authService.logout()" class="btn-logout">Salir</button>
        </ng-template>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 5%;
      background-color: white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      position: relative;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 5px;
      font-weight: bold;
      color: var(--verde-bosque);
      cursor: pointer;
      font-size: 0.5rem;
    }
    .logo img {
      width: 10px; 
      height: auto;  
      width: 30px;
      height: 30px; 
    }
    .logo-text {
      font-size: 1.5rem;
    }
    .nav-links { 
      display: flex; 
      gap: 2rem; 
      align-items: center;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      font-weight: 800;
      font-size: 18px;
      line-height: 20px;
    }
    .nav-links a {
      text-decoration: none;
      color: var(--texto-oscuro);
      font-weight: 500;
    }
    .active { color: var(--terracota) !important; border-bottom: 2px solid var(--terracota); }
    .auth-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .btn-login {
      background-color: white;
      color: var(--verde-bosque);
      border: none;
      padding: 10px 30px;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 600;
      font-size: 18px;
      line-height: 20px;
    }
    .btn-login:hover {
      opacity: 0.9;
    }
    .btn-register {
      background-color: var(--verde-bosque);
      color: white;
      padding: 10px 30px;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
      border-radius: 9999px;
      cursor: pointer;
      font-weight: 600;
      font-size: 18px;
      line-height: 20px;
    }
    .btn-register:hover {
      background-color: var(--verde-bosque);
      color: white;
    }
    .btn-logout {
      background-color: white;
      color: var(--terracota);
      border: 1px solid var(--terracota);
      padding: 8px 18px;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 500;
    }
    .btn-logout:hover {
      background-color: var(--terracota);
      color: white;
    }
    .user-name {
      font-weight: 500;
      color: var(--texto-oscuro);
    }
  `]
})
export class NavbarComponent {
  authService = inject(AuthService);
}