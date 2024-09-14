import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  username: string = 'Usuario'; // Puedes inicializar con un valor real si es necesario

  constructor(private router: Router) {}

  buscarViaje() {
    // Navega a la página de búsqueda de viajes
    this.router.navigate(['/buscar-viaje']);
  }

  crearViaje() {
    // Navega a la página de creación de viajes
    this.router.navigate(['/crear-viaje']);
  }
}
