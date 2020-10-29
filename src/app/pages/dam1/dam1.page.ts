import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dam1',
  templateUrl: './dam1.page.html',
  styleUrls: ['./dam1.page.scss'],
})
export class Dam1Page implements OnInit {

  constructor(public toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'has seleccionado Programación',
      duration: 2000,
      position: 'top',
      color: 'primary'
    });
    toast.present();
  }

  async presentToast2() {
    const toast = await this.toastController.create({
      message: 'has seleccionado Lenguaje de Marcas',
      duration: 2000,
      position: 'top',
      color: 'primary'
    });
    toast.present();
  }

  async presentToast3() {
    const toast = await this.toastController.create({
      message: 'has seleccionado Entornos',
      duration: 2000,
      position: 'top',
      color: 'primary'
    });
    toast.present();
  }

  async presentToast4() {
    const toast = await this.toastController.create({
      message: 'has seleccionado Base de Datos',
      duration: 2000,
      position: 'top',
      color: 'primary'
    });
    toast.present();
  }

  async presentToast5() {
    const toast = await this.toastController.create({
      message: 'has seleccionado Sistemas Informaticos',
      duration: 2000,
      position: 'top',
      color: 'primary'
    });
    toast.present();
  }

  async presentToast6(){
    const toast = await this.toastController.create({
      message: 'has seleccionado fol',
      duration: 2000,
      position: 'top',
      color: 'primary'
    });
    toast.present();
  }

  async presentToast7() {
    const toast = await this.toastController.create({
      message: 'has seleccionado INGLES',
      duration: 2000,
      position: 'top',
      color: 'primary'
    });
    toast.present();
  }

  ngOnInit() {
  }

}
