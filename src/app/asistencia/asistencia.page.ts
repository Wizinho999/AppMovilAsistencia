import * as QRCode from 'qrcode-generator';
import { Component } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage {
  qrCodeData: string | undefined;

  constructor() {
    // Generar el código QR al iniciar la página
    this.generateQRCode();
  }

  generateQRCode() {
    // Generar el código QR con algún dato, como un número de asistencia único
    const qr = QRCode(0, 'H');
    qr.addData('https://www.bilbaolabs.cl/');
    qr.make();

    // Obtener la representación en base64 del código QR generado
    this.qrCodeData = qr.createDataURL();
  }
  animateButton(event: Event) {
    const button = event.target as HTMLElement;
    button.classList.add('active');
    setTimeout(() => button.classList.remove('active'), 200);
  }
}


  

