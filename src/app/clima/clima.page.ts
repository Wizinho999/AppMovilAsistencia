import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  res: any;

  constructor(
              private weatherAPI: WeatherService
  ) {}

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData() {
    this.weatherAPI.getWeatherData().subscribe((response) => {
      this.res = response;
      console.log(this.res);
    })
  }
}
  
