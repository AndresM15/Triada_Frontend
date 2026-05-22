import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true
})
export class TooltipDirective {
  private readonly document = inject(DOCUMENT);
  private readonly host = inject(ElementRef<HTMLElement>);

  @Input('appTooltip') text = '';

  private tooltipEl: HTMLDivElement | null = null;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.show();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.hide();
  }

  @HostListener('focusin')
  onFocusIn(): void {
    this.show();
  }

  @HostListener('focusout')
  onFocusOut(): void {
    this.hide();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.reposition();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.reposition();
  }

  private show(): void {
    const content = (this.text ?? '').trim();
    if (!content) return;
    if (this.tooltipEl) return;

    const el = this.document.createElement('div');
    el.className = 'app-tooltip';
    el.textContent = content;
    this.document.body.appendChild(el);
    this.tooltipEl = el;

    this.reposition();
  }

  private hide(): void {
    if (!this.tooltipEl) return;
    this.tooltipEl.remove();
    this.tooltipEl = null;
  }

  private reposition(): void {
    if (!this.tooltipEl) return;

    const hostRect = this.host.nativeElement.getBoundingClientRect();
    const tip = this.tooltipEl;

    // Reset to measure correctly
    tip.style.left = '0px';
    tip.style.top = '0px';
    tip.style.maxWidth = 'min(320px, calc(100vw - 24px))';

    const tipRect = tip.getBoundingClientRect();

    const margin = 12;
    const gap = 10;

    // Prefer arriba; si no hay espacio, abajo.
    const spaceAbove = hostRect.top;
    const spaceBelow = window.innerHeight - hostRect.bottom;
    const placeAbove = spaceAbove >= tipRect.height + gap + margin || spaceAbove >= spaceBelow;

    let top = placeAbove
      ? hostRect.top - tipRect.height - gap
      : hostRect.bottom + gap;

    // Centrado horizontal con clamp al viewport
    let left = hostRect.left + hostRect.width / 2 - tipRect.width / 2;
    left = Math.max(margin, Math.min(left, window.innerWidth - tipRect.width - margin));
    top = Math.max(margin, Math.min(top, window.innerHeight - tipRect.height - margin));

    tip.style.left = `${left}px`;
    tip.style.top = `${top}px`;
  }
}

