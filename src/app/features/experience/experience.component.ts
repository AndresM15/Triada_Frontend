import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienciaService } from '../../core/services/experiencia.service';
import { Experiencia } from '../../core/models/experiencia.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent implements OnInit {
  private experienciaService = inject(ExperienciaService);
  
  experiencias: Experiencia[] = [];
  filteredExperiencias: Experiencia[] = [];
  selectedCategory: string = 'Todos';

  featuredExperience = {
    title: 'Cata de Café en Hacienda Venecia',
    category: 'COFFEE TOUR PREMIUM',
    description: 'Sumérgete en el mundo del café suave colombiano. Aprende de los mejores baristas en una hacienda tradicional con más de 100 años de historia, recorre los cafetales y degusta variedades exóticas.',
    duration: '4 Horas',
    price: 120000,
    distance: '20 km de Santagueda',
    image: 'assets/img/experience/expe_prio.png'
  };

  categories = [
    { label: 'Todos', icon: 'assets/img/experience/icon_1.png' },
    { label: 'Coffee Tours', icon: 'assets/img/experience/icon_2.png' },
    { label: 'Aventura', icon: 'assets/img/experience/icon_3.png' },
    { label: 'Gastronomía', icon: 'assets/img/experience/icon_4.png' },
    { label: 'Naturaleza', icon: 'assets/img/experience/icon_5.png' },
    { label: 'Bienestar', icon: 'assets/img/experience/icon_6.png' }
  ];

  ngOnInit(): void {
    this.experienciaService.getExperiencias().subscribe(data => {
      this.experiencias = data;
      this.filteredExperiencias = data;
    });
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'Todos') {
      this.filteredExperiencias = this.experiencias;
    } else {
      this.filteredExperiencias = this.experiencias.filter(exp => exp.categoria === category);
    }
  }
}
