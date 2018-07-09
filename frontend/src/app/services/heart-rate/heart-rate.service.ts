import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeartRateService {

  //uri = 'http://54.213.39.97:4000'; // prod
  uri = 'http://localhost:4000'; // dev

  constructor(private http: HttpClient) {
  }

  getHeartRates() {
    return this.http.get(`${this.uri}/heart-rate`);
  }

}
