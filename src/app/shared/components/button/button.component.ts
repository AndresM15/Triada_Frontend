import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [CommonModule],
    template: `
    <button [ngClass]="variant" [type]="type" class="btn-shared">
      <ng-content></ng-content>
    </button>
  `,
    styles: [`
    .btn-shared {
      padding: 10px 20px;
      border-radius: 8px;
      border: none;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .primary {
      background-color: var(--verde-bosque);
      color: white;
    }
    .primary:hover { background-color: #24481f; }
    
    .secondary {
      background-color: var(--terracota);
      color: white;
    }
    .secondary:hover { background-color: #8e694d; }
  `]
})
export class ButtonComponent {
    @Input() variant: 'primary' | 'secondary' = 'primary';
    @Input() type: 'button' | 'submit' = 'button';
}