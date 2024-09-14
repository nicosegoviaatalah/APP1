import { Component, AfterContentInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterContentInit {
  /* Objeto JSON para usuario */
  user = {
    username: '',
    password: '',
  };
  /* Mensaje de respuesta */
  mensaje = '';
  /* Estado de carga */
  spinner = false;
  rememberMe = false; /* Estado del toggle "Recuerdame" */

  constructor(private router: Router, private animationController: AnimationController) {}

  ngAfterContentInit() {
    this.animarLoginGiroYColor();
  }

  animarLoginGiroYColor() {
    /* Seleccionamos el item desde el Front con un query selector y reconocemos el elemento como HTMLElement para que sea compatible con la animacion */
    const loginIcon = document.querySelector(".login img") as HTMLElement;

    /* Creamos y configuramos la animación */
    const animacion = this.animationController.create()
      .addElement(loginIcon)
      .duration(4000) // Duración de la animación en milisegundos
      .iterations(Infinity) // La animación se repetirá infinitamente
      /* La configuración de keyframe permite editar el diseño según el tiempo de la animación empezando desde 0 hasta 1 usando los decimales (0.5, 0.25, 0.2) */
      .keyframes([
        { offset: 0, transform: 'rotate(0deg)', boxShadow: '0px 0px 10px rgba(255, 0, 0, 0.5)', backgroundColor: 'red' },
        { offset: 0.5, transform: 'rotate(180deg)', boxShadow: '0px 0px 20px rgba(0, 0, 255, 0.5)', backgroundColor: 'blue' },
        { offset: 1, transform: 'rotate(360deg)', boxShadow: '0px 0px 10px rgba(255, 0, 0, 0.5)', backgroundColor: 'red' }
      ]);

    animacion.play();
  }

  /* NGIF = Permite realizar una validación entre HTML y TS validando que la variable sea true o false */
  /* Permite cambiar el valor por defecto del spinner y comprobarlo con ngIF */
  cambiarSpinner() {
    this.spinner = !this.spinner;
  }

  validar() {
    if (this.user.username.length !== 0) {
      if (this.user.password.length !== 0) {
        // Funciona
        this.mensaje = 'Conexión exitosa';
        let navigationExtras: NavigationExtras = {
          state: {
            username: this.user.username,
            password: this.user.password,
          },
        };
        this.cambiarSpinner();
        /* setTimeout = Permite generar un pequeño delay para realizar la acción */
        setTimeout(() => {
          this.router.navigate(['/perfil'], navigationExtras);
          this.cambiarSpinner();
          this.mensaje = "";
        }, 3000);
      } else {
        console.log('Contraseña vacía');
        this.mensaje = 'Contraseña vacía';
        // No funciona
      }
    } else {
      console.log('Usuario vacío');
      this.mensaje = 'Usuario vacío';
      // Tampoco funciona
    }
  }

  forgotPassword() {
    // Implementa la lógica para recuperar la contraseña
    console.log('Recuperar contraseña');
  }
}
