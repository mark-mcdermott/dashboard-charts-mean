import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BloodPressureService } from '../../services/blood-pressure/blood-pressure.service';
import { Chart } from 'chart.js';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blood-pressure',
  templateUrl: './blood-pressure.component.html',
  styleUrls: ['./blood-pressure.component.css']
})

export  class  BloodPressureComponent  implements  OnInit {

  dateArr: any;
  topArr: any;
  bottomArr: any;
  chartData: any[];
  chartLabels: any;
  chart: any[] = [];

  private  bloodPressureTable:  Array<object> = [];
  constructor(private bloodPressureService: BloodPressureService) {}

  ngOnInit() {
    this.bloodPressureService.getBloodPressures().pipe(map((data: any) => data))
      .subscribe((res) => {
        this.bloodPressureTable = res;
        this.dateArr = this.bloodPressureTable.map(bp => {
          let dateObj = new Date(bp['date']);
          return dateObj
        });
        this.topArr = this.bloodPressureTable.map( bp => bp['top']);
        this.bottomArr = this.bloodPressureTable.map(bp => bp['bottom']);

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
              labels: this.dateArr,
              datasets: [
                {
                  fill: false,
                  borderColor: '#fd6586',
                  data: this.topArr
                },
                {
                  fill: false,
                  borderColor: '#ffa500',
                  data: this.bottomArr
                },
              ]
          },
          options: {
            legend: {
              display: false
            },
            elements: {
              line: {
                tension: 0
              }
            },
            scales: {
              xAxes: [{
                type: 'time',
                time: {
                  unit: "day",
                  displayFormats: {
                    day: "M/DD",
                  }
                },
                ticks: {
                  autoSkip: true
                }
              }]
            }
          }
        }); // close new Chart

      }); // close subscribe call

  } // close ngOnInit()

} // close BloodPressureComponent
