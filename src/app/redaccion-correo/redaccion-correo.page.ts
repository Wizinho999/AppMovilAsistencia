import { Component, OnInit } from '@angular/core';
import { NavController, AlertController  } from '@ionic/angular';


@Component({
  selector: 'app-redaccion-correo',
  templateUrl: './redaccion-correo.page.html',
  styleUrls: ['./redaccion-correo.page.scss'],
})
export class RedaccionCorreoPage implements OnInit {

  nuevoCorreo = {
    para: '',
    asunto: '',
    cuerpo: '',
  };

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {}

  ngOnInit() {
  }

  // Función para enviar el nuevo correo
  async enviarCorreo() {
    // Almacena el nuevo correo en el almacenamiento local
    const correosGuardados = JSON.parse(localStorage.getItem('correo') || '[]');
    correosGuardados.push(this.nuevoCorreo);
    localStorage.setItem('correo', JSON.stringify(correosGuardados));

    // Muestra una alerta de confirmación
const alert = await this.alertCtrl.create({
  header: '¡Correo enviado!',
  message: 'Tu correo ha sido enviado correctamente.',
  buttons: [
    {
      text: 'OK',
      handler: () => {
        // Limpia los campos
        this.nuevoCorreo.para = '';
        this.nuevoCorreo.asunto = '';
        this.nuevoCorreo.cuerpo = '';

        // Vuelve a la página de correos electrónicos después de enviar el correo
        this.navCtrl.navigateBack('/emails');
      }
    }
  ]  // <- Agregado para cerrar el bloque buttons
});
await alert.present();
  
    // Vuelve a la página de correos electrónicos después de enviar el correo
    this.navCtrl.navigateBack('/emails');
  }
  

}
