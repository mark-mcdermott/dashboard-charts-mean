import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SleepService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {
  }
 
  getSleeps() {
    return this.http.get(`${this.uri}/sleep`);
  }

}
