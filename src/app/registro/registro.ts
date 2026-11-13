import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],          // Necesario para usar ngModel y ngForm
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

  // Modelo de datos conectado al formulario
  usuario = {
    nombre: '',
    correo: '',
    telefono: '',
    edad: null as number | null,
    contrasena: ''
  };

  // Guarda los datos después de registrar
  datosRegistrados: any = null;

  registrar(form: NgForm) {
    if (form.invalid) {
      return; // Seguridad extra: no registra si el formulario es inválido
    }

    this.datosRegistrados = { ...this.usuario };
    console.log('Usuario registrado:', this.datosRegistrados);

    // Limpia el formulario y su estado (touched, dirty, etc.)
    form.resetForm();
  }
}