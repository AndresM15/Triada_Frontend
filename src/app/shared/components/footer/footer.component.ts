import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TooltipDirective } from '../../directives/tooltip.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TooltipDirective],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div
          class="footer-left"
          routerLink="/"
          title="Ir al inicio"
          [appTooltip]="'Ir al inicio'"
        >
          <img src="/assets/img/logo.png" alt="Logo Triada Cafetera" class="footer-logo" title="Logo Triada Cafetera">
          <span class="footer-brand">Triada Cafetera</span>
        </div>
        
        <div class="footer-center">
          © 2026 Triada Cafetera. Todos los derechos reservados.
        </div>
        
        <div class="footer-right">
          <a
            routerLink="/privacidad"
            title="Ver política de privacidad"
            [appTooltip]="'Ver política de privacidad'"
          >Privacidad</a>
          <a
            routerLink="/terminos"
            title="Ver términos y condiciones"
            [appTooltip]="'Ver términos y condiciones'"
          >Términos</a>
          <a
            routerLink="/contacto"
            title="Ir a contacto"
            [appTooltip]="'Ir a contacto'"
          >Contacto</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--blanco-crema);
      border-top: 1px solid #eaeaea;
      padding: 1.5rem 0;
      width: 100%;
      margin-top: 2rem;
    }
    
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      padding: 0 5%;
      flex-wrap: wrap;
      gap: 1rem;
    }
    
    .footer-left {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
    }
    
    .footer-logo {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }
    
    .footer-brand {
      color: var(--verde-bosque);
      font-weight: 700;
      font-size: 1.1rem;
    }
    
    .footer-center {
      color: #6b7280;
      font-size: 0.9rem;
      text-align: center;
      flex: 1;
    }
    
    .footer-right {
      display: flex;
      gap: 1.5rem;
    }
    
    .footer-right a {
      color: #6b7280;
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.2s;
    }
    
    .footer-right a:hover {
      color: var(--verde-bosque);
    }
    
    @media (max-width: 800px) {
      .footer-content {
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }
      
      .footer-center {
        margin: 1rem 0;
      }
    }
  `]
})
export class FooterComponent {
}
