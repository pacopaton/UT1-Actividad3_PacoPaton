import { Component, OnInit } from '@angular/core';
import { IonImg } from '@ionic/angular';

@Component({
  selector: 'app-dam2',
  templateUrl: './dam2.page.html',
  styleUrls: ['./dam2.page.scss'],
})
export class Dam2Page implements OnInit {
  constructor() {}

  variables = [
    {
     nombre: 'PROGRAMACION',
     id: 'https://i.pinimg.com/originals/67/54/78/675478c7dcc17f90ffa729387685615a.jpg',
     c: 'danger',
    },

    {
      nombre: 'LENGUAJE DE MARCAS',
      id: 'https://ximagen.com/images/2018/12/23/imagenes-bonitas-para-compartir-en-esta-navidad.jpg',
      c: 'primary',
    },


    {
      nombre: 'BASE DE DATOS',
      id: 'https://static3.abc.es/media/tecnologia/2019/07/16/google-kWqC--620x349@abc.jpg',
      c: 'success',
    },

    {
      nombre: 'ENTORNOS',
      id: 'https://www.aprendum.com/blog/wp-content/uploads/2017/11/lenguajesdeprogramacion_principal.jpg',
      c: 'dark',
    },

    {
      nombre: 'FOL',
      id: 'https://edteam-media.s3.amazonaws.com/specialities/big/6804abfc-5cc0-4199-a162-173e451d34df.png',
      c: 'light',
    },

    {
      nombre: 'SISTEMAS INFORMATICOS',
      id: 'https://blog.dinahosting.com/wp-content/uploads/2019/08/programaci%C3%B3n-mitos.jpg',
      c: 'medium',
    },

    {
      nombre: 'INGLES',
      id: 'https://blogs.unsw.edu.au/nowideas/files/2018/10/tecnologia.jpg',
      c: 'tertiary',
    },
  ];
  ngOnInit() {
  }

}
