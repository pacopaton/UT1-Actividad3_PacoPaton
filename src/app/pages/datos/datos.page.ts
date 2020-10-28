import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { constructor } from 'events';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  [x: string]: any;
  Apellidos = 'Patón Antequera';
  Nombre = 'Paco';
  Localidad = 'Manzanares';
  Estudios = 'Desarrollo Aplicaciones Multiplataforma';
  Correo = 'paco.paton.antequera@gmail.com';
  Contrasena = '1234';
 async alerta(Contrasena){
    if (Contrasena.getText('1234')) {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
    }

  }
constructor() { }

  ngOnInit() {
  }

}
