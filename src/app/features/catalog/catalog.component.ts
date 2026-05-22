import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FincaService } from '../../core/services/finca.service';
import { Finca } from '../../core/models/finca.model';
import { Router } from '@angular/router';
import { TooltipDirective } from '../../shared/directives/tooltip.directive';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, TooltipDirective],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {
  private fincaService = inject(FincaService);
  private router = inject(Router);
  fincas: Finca[] = [];
  categories = [
    { label: 'Cabañas', icon: 'assets/img/catalog/icon_1.png' },
    { label: 'Piscinas', icon: 'assets/img/catalog/icon_2.png' },
    { label: 'Naturaleza', icon: 'assets/img/catalog/icon_3.png' },
    { label: 'Cafeteras', icon: 'assets/img/catalog/icon_4.png' },
    { label: 'Lujo', icon: 'assets/img/catalog/icon_5.png' },
    { label: 'Vistas', icon: 'assets/img/catalog/icon_6.png' },
    { label: 'Aventuras', icon: 'assets/img/catalog/icon_7.png' },
    { label: 'Glamping', icon: 'assets/img/catalog/icon_8.png' }
  ];

  ngOnInit(): void {
    // Obtenemos las fincas del servicio (por ahora datos simulados) 
    this.fincaService.getFincas().subscribe(data => {
      this.fincas = data;
    });
  }

  goToFinca(fincaId: string): void {
    this.router.navigate(['/catalog/details', fincaId]);
  }
}