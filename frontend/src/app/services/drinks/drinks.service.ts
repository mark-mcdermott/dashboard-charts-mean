import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {
  }

  getDrinks() {
    return this.http.get(`${this.uri}/drinks`);
  }

}
