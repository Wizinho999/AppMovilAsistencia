import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Share } from '@capacitor/share';
import { MenuController } from '@ionic/angular'; 

//npm install @capacitor/share
//npx cap sync
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/principal', icon: 'home' },
    { title: 'Asistencia', url: '/asistencia', icon: 'calendar' },
    //{ title: 'Clima', url: '/clima', icon: 'sunny' },
  ];
  public labels = [];
  constructor(public router: Router, private menu: MenuController)  { }


  compartirApp() {
    Share.share({
      title: 'Compartir myApp',
      url: 'instagram.com/wizzyuk',
      dialogTitle: 'ola!11!!',
    });
  }

  abrirMapa() {
    this.router.navigate(["/mapa"]);
    this.menu.close();
  }

  cerrarSesion(){
    localStorage.removeItem('autenticado');
    this.router.navigate(["/ingreso"]);
    this.menu.close();
  }

  abrirClima() {
    this.router.navigate(["/clima"]);
    this.menu.close();
  }
  nombreUsuario = localStorage.getItem('nombreUsuario');
}



