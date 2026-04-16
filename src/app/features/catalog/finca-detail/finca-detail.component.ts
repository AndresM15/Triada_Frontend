import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FincaService } from '../../../core/services/finca.service';
import { Finca } from '../../../core/models/finca.model';

@Component({
  selector: 'app-finca-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './finca-detail.component.html',
  styleUrl: './finca-detail.component.css'
})
export class FincaDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private fincaService = inject(FincaService);
  private router = inject(Router);

  finca: Finca | undefined;
  
  galleryImages: string[] = [
    'assets/img/finca/finca_1.png',
    'assets/img/finca/finca_2.png',
    'assets/img/finca/finca_3.png',
    'assets/img/finca/finca_4.png',
    'assets/img/finca/finca_5.png'
  ];

  // Specific mock data matching the requested UI design
  fincaDetails = {
    pricePerNight: 350000,
    rating: 4.92,
    reviews: 12,
    aboutTextP1: 'Despierta con el aroma del café recién tostado en la Hacienda Villa Café. Ubicada en el corazón del Eje Cafetero, nuestra finca combina la arquitectura tradicional antioqueña con las comodidades modernas. Disfruta de atardeceres espectaculares desde el corredor principal, recorre nuestros senderos ecológicos y vive la experiencia auténtica de la cultura cafetera.',
    aboutTextP2: 'Ideal para familias y grupos de amigos que buscan desconexión total. La propiedad cuenta con cocina totalmente equipada, zona de BBQ, y acceso privado al río Quindío.',
    quickInfo: [
      {
        icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
        title: 'Tipo', value: 'Finca Completa'
      },
      {
        icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
        title: 'Huéspedes', value: 'Hasta 8'
      },
      {
        icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>',
        title: 'Habitaciones', value: '4 Dobles'
      },
      {
        icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>',
        title: 'Internet', value: 'Alta Velocidad'
      }
    ],
    amenities: [
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12c.5-1 1-1.5 2-1.5s1.5.5 2 1.5 1 1.5 2 1.5 1.5-.5 2-1.5 1-1.5 2-1.5s1.5.5 2 1.5 1 1.5 2 1.5 1.5-.5 2-1.5 1-1.5 2-1.5s1.5.5 2 1.5"></path><path d="M2 18c.5-1 1-1.5 2-1.5s1.5.5 2 1.5 1 1.5 2 1.5 1.5-.5 2-1.5 1-1.5 2-1.5s1.5.5 2 1.5 1 1.5 2 1.5 1.5-.5 2-1.5 1-1.5 2-1.5s1.5.5 2 1.5"></path><path d="M8 8v-1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v1"></path><path d="M12 6V4"></path><path d="M12 2v2"></path></svg>', name: 'Piscina con vista a la montaña' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16"></path><path d="M4 8h16"></path><path d="M4 20L12 12l8 8"></path></svg>', name: 'Estacionamiento gratuito' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"></path><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path><path d="M9 13h6"></path><path d="M9 9h6"></path><path d="M9 17h6"></path></svg>', name: 'Terraza privada' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20"></path><path d="M8 6h8"></path><path d="M8 10h8"></path><path d="M8 14h8"></path></svg>', name: 'Zona de asados' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5c-2.8 0-5 2.2-5 5 0 3.9 5 8 5 8s5-4.1 5-8c0-2.8-2.2-5-5-5z"></path><circle cx="12" cy="10" r="1.5"></circle></svg>', name: 'Admite mascotas' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>', name: 'Tour de café incluido' }
    ]
  };

  bookingBreakdown = {
    nightsCount: 5,
    nightsTotal: 1750000,
    cleaningFee: 80000,
    serviceFee: 120000,
    total: 1950000
  };

  nearbyExperiences = [
    {
      title: 'Cata de Café Premium',
      rating: 4.9,
      reviews: 128,
      description: 'Aprende a diferenciar notas y aromas con nuestros expertos baristas.',
      priceText: 'Desde $45.000 COP / persona',
      image: 'assets/img/experience/expe_2.png' // Placeholder re-used from your experiences
    },
    {
      title: 'Cabalgata al Atardecer',
      rating: 4.8,
      reviews: 84,
      description: 'Recorrido a caballo por los cafetales y senderos de montaña.',
      priceText: 'Desde $60.000 COP / persona',
      image: 'assets/img/experience/expe_3.png'
    }
  ];
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.fincaService.getFincaById(id).subscribe(finca => {
          this.finca = finca;
          // Override name/location to perfectly match the requested mockup
          if(this.finca) {
            this.finca.nombre = 'Hacienda Villa Café';
            this.finca.ubicacion = 'Salento, Quindío, Colombia';
          }
        });
      }
    });
  }

  goToBooking(): void {
    const id = this.route.snapshot.paramMap.get('id') || '1';
    this.router.navigate(['/booking/summary', id]);
  }
}
