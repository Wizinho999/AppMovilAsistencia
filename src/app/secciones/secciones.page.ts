import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-seccion',
  templateUrl: './secciones.page.html',
  styleUrls: ['./secciones.page.scss'],
})
export class SeccionesPage implements OnInit {

  sections = [
    {
      id: 1,
      name: 'Sección A',
      schedules: [
        { id: 1, hour: '8:00 AM' },
        { id: 2, hour: '10:00 AM' },
        // Añade más horarios según sea necesario
      ],
      notes: [
        { id: 1, note: '7' },
        { id: 2, note: '6' },
        // Añade más horarios según sea necesario
      ],
    },
    {
      id: 2,
      name: 'Sección B',
      schedules: [
        { id: 3, hour: '9:00 AM' },
        { id: 4, hour: '11:00 AM' },
        // Añade más horarios según sea necesario
      ],
      notes: [
        { id: 1, note: '7' },
        { id: 2, note: '6' },
        // Añade más horarios según sea necesario
      ],
    },
    // Añade más secciones según sea necesario
  ];

  constructor(private navCtrl: NavController) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 

  goToGradesPage(sectionId: number, scheduleId: number) {
    // Lógica para navegar a la página de calificaciones
    // Puedes usar sectionId y scheduleId para identificar la sección y el horario específico
    this.navCtrl.navigateForward(`/grades/${sectionId}/${scheduleId}`);
  }

  goToAttendancePage(sectionId: number, scheduleId: number) {
    // Lógica para navegar a la página de asistencia
    // Puedes usar sectionId y scheduleId para identificar la sección y el horario específico
    this.navCtrl.navigateForward(`/attendance/${sectionId}/${scheduleId}`);
  }

}
