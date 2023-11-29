import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {

  // Datos de correos electrónicos recibidos (puedes cambiar esto según tu estructura de datos)
  receivedEmails = [
    { nombreRemitente: 'Juan Pérez', asunto: 'Reunión', fecha: 'Hoy', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombreRemitente: 'Maria Gómez', asunto: 'Proyecto', fecha: 'Ayer', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombreRemitente: 'Ivan Bilbao', asunto: 'Entrega de prueba', fecha: 'Hace 2 dias', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombreRemitente: 'Sandra Rojas', asunto: 'Portafolio', fecha: 'Hace 4 dias', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombreRemitente: 'Pedro Ramirez', asunto: 'Arquitectura', fecha: 'Hace 5 dias', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombreRemitente: 'Saul Toledo', asunto: 'Entrega', fecha: 'Hace 1 semana', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    // Agrega más correos electrónicos según sea necesario
  ];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  // Función para ver los detalles de un correo electrónico
  verDetalle(email: any) {
    // Implementa la lógica para ver los detalles del correo (puede ser una nueva página)
    console.log('Ver detalles de correo:', email);
  }

  // Función para redactar un nuevo correo electrónico
  redactarCorreo() {
    // Implementa la lógica para abrir una nueva página de redacción de correos
    this.navCtrl.navigateForward('/redaccion-correo');
  }

}
