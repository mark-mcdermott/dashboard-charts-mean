import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  //uri = 'http://54.213.39.97:4000'; // prod
  private uri = 'http://localhost:4000'; // dev

  constructor(private http: HttpClient) { }

  getChartData(chartName) {
    return this.http.get(this.uri + '/' + chartName).pipe(map((res) => res))
  }

}
