import { Component, OnInit } from '@angular/core';
import { AnimationController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})

export class IngresoPage {
  animateButton(event: Event) {
    const button = event.target as HTMLElement;
    button.classList.add('active');
    setTimeout(() => button.classList.remove('active'), 200);
  }
}