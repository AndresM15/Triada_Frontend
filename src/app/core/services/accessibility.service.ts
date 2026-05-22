import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

type AccessibilityPrefs = {
  highContrast: boolean;
  textScale: number;
};

const STORAGE_KEY = 'a11y:prefs';
const MIN_SCALE = 0.85;
const MAX_SCALE = 1.5;

@Injectable({ providedIn: 'root' })
export class AccessibilityService {
  private readonly document = inject(DOCUMENT);

  readonly highContrast = signal(false);
  readonly textScale = signal(1);

  constructor() {
    this.loadFromStorage();
    this.applyToDom();
  }

  toggleHighContrast(): void {
    this.setHighContrast(!this.highContrast());
  }

  setHighContrast(enabled: boolean): void {
    this.highContrast.set(enabled);
    this.applyToDom();
    this.saveToStorage();
  }

  setTextScale(scale: number): void {
    const clamped = this.clamp(scale, MIN_SCALE, MAX_SCALE);
    this.textScale.set(clamped);
    this.applyToDom();
    this.saveToStorage();
  }

  increaseTextScale(step = 0.1): void {
    this.setTextScale(this.textScale() + step);
  }

  decreaseTextScale(step = 0.1): void {
    this.setTextScale(this.textScale() - step);
  }

  reset(): void {
    this.highContrast.set(false);
    this.textScale.set(1);
    this.applyToDom();
    this.saveToStorage();
  }

  private applyToDom(): void {
    const root = this.document?.documentElement;
    if (!root) return;

    root.classList.toggle('a11y-high-contrast', this.highContrast());
    root.style.setProperty('--text-scale', String(this.textScale()));
  }

  private loadFromStorage(): void {
    try {
      const raw = this.document?.defaultView?.localStorage?.getItem(STORAGE_KEY);
      if (!raw) return;

      const parsed = JSON.parse(raw) as Partial<AccessibilityPrefs>;
      if (typeof parsed.highContrast === 'boolean') {
        this.highContrast.set(parsed.highContrast);
      }
      if (typeof parsed.textScale === 'number') {
        this.textScale.set(this.clamp(parsed.textScale, MIN_SCALE, MAX_SCALE));
      }
    } catch {
      // si hay datos corruptos, ignoramos y usamos defaults
    }
  }

  private saveToStorage(): void {
    try {
      const payload: AccessibilityPrefs = {
        highContrast: this.highContrast(),
        textScale: this.textScale()
      };
      this.document?.defaultView?.localStorage?.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // si no hay storage (modo privado/SSR), no persistimos
    }
  }

  private clamp(value: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, value));
  }
}

