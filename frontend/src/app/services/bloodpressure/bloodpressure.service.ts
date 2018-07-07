import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BloodpressureService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {
  }

  getBloodpressures() {
    return this.http.get(`${this.uri}/bloodpressure`);
  }

}
