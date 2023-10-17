import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { ClimaPage } from '../clima/clima.page';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
              private http: HttpClient,
  ) { }

    getWeatherData(): Observable<any> {
      let lat = -33.68909;
      let lon = -71.21528;
      let apiId = 'dcac8ec09af291ab3f56d3b775772749';
      let queryString = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${apiId}`

      return this.http.get(queryString);
    }

}

