import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  selectedRole: 'cliente' | 'propietario' = 'cliente';
  showPassword = false;

  selectRole(role: 'cliente' | 'propietario') {
    this.selectedRole = role;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
