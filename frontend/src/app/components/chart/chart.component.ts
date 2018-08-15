import { Component, OnInit, AfterContentInit, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartService } from '../../services/chart/chart.service';
import { Chart } from 'chart.js';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterContentInit {

  @Input()
  chartName: string;

  dateArr: any;
  topArr: any;
  bottomArr: any;
  chartData: any[];
  chartLabels: any;
  chart: any[] = [];
  canvasWidth: any;
  canvasHeight: any;

  private  chartDataTable:  Array<object> = [];
  constructor(private chartService: ChartService) {}

  ngAfterContentInit() {

    this.chartService.getChartData(this.chartName).pipe(map((data: any) => data))
      .subscribe((res) => {

        let canvas = document.getElementsByTagName('canvas')[0];
        let cardWidth = document.getElementById('firstCard').offsetWidth;
        this.canvasWidth = .9 * cardWidth;
        this.canvasHeight = .6 * this.canvasWidth;
        canvas.width = this.canvasWidth;
        canvas.height = this.canvasHeight;

        this.chartDataTable = res;
        this.dateArr = this.chartDataTable.map(bp => {
          let dateObj = new Date(bp['date']);
          return dateObj
        });
        this.topArr = this.chartDataTable.map( bp => bp['top']);
        this.bottomArr = this.chartDataTable.map(bp => bp['bottom']);

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
            responsive: false,
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
