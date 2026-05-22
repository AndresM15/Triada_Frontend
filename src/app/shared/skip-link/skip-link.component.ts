import { DOCUMENT } from '@angular/common';
import { Component, Input, inject } from '@angular/core';

@Component({
  selector: 'app-skip-link',
  standalone: true,
  templateUrl: './skip-link.component.html',
  styleUrl: './skip-link.component.css'
})
export class SkipLinkComponent {
  private readonly document = inject(DOCUMENT);

  @Input() targetId = 'main-content';
  @Input() label = 'Saltar al contenido principal';

  onActivate(event: Event): void {
    event.preventDefault();

    const el = this.document.getElementById(this.targetId) as HTMLElement | null;
    if (!el) return;

    el.scrollIntoView({ block: 'start' });
    el.focus?.();
  }
}

