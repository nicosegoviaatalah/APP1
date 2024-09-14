import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {
  email: string = '';

  constructor(private router: Router) {}

  sendResetLink() {
    if (this.email) {
      // Implementa la lógica para enviar el enlace de recuperación de contraseña
      console.log('Enviando enlace de recuperación a:', this.email);

      // Simula la navegación después de enviar el enlace
      this.router.navigate(['/']);
    } else {
      console.log('Por favor ingrese su correo electrónico.');
    }
  }
}
