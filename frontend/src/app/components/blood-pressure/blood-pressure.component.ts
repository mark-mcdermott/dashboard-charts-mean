import { Component, OnInit } from '@angular/core';
import { BloodPressureService } from '../../services/blood-pressure/blood-pressure.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from '../../data';
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

          // The data for our dataset
          data: {
              labels: this.dateArr,
              datasets: [
                {
                  fill: false,
                  borderColor: 'rgb(255, 99, 132)',
                  data: this.topArr
                },
                {
                  fill: false,
                  borderColor: '#ffa500',
                  data: this.bottomArr
                },
              ]
          },

          // Configuration options go here
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

        });

      });
  }


}
