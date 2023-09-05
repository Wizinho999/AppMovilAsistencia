import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Ingreso', url: '/ingreso', icon: 'log-in' },
    { title: 'Asistencia', url: '/asistencia', icon: 'calendar' },
    { title: 'Inicio', url: '/principal', icon: 'home' },
  ];
  public labels = [];
  constructor() {}
}
