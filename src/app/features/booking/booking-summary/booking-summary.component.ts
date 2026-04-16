import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-summary',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './booking-summary.component.html',
  styleUrl: './booking-summary.component.css'
})
export class BookingSummaryComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  fincaId = '1';
  ownerMessage = '';

  pricePerNight = 350000;
  nights = 5;
  cleaningFee = 80000;
  serviceFee = 120000;
  longStayDiscount = 150000;

  get nightsTotal(): number {
    return this.pricePerNight * this.nights;
  }

  get total(): number {
    return this.nightsTotal + this.cleaningFee + this.serviceFee - this.longStayDiscount;
  }

  ngOnInit(): void {
    this.fincaId = this.route.snapshot.paramMap.get('id') || '1';
  }

  submitBooking(): void {
    this.router.navigate(['/booking/confirmation', this.fincaId]);
  }
}
