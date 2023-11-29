import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.page.html',
  styleUrls: ['./horarios.page.scss'],
})
export class HorariosPage implements OnInit {

  constructor() { }

  ngOnInit() {

    
  }
  // Datos para días de la semana
  dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

  // Datos para cada hora de cada día
  horarios = [
    { hora: '8:00-10:00 AM', asignatura: 'Arquitectura', profesor: 'Juan Pérez', sala: 'A101' },
    { hora: '10:30-11:30 AM', asignatura: 'Estadistica', profesor: 'Maria Gómez', sala: 'B202' },
    { hora: '11:31-14:00 PM', asignatura: 'Base De Datos', profesor: 'Ivan Bilbao', sala: 'C303' },
    { hora: '14:15-16:00 PM', asignatura: 'Programacion', profesor: 'Sebastian Blanco', sala: 'D404' },
    // Agrega más datos según sea necesario
  ];
}
