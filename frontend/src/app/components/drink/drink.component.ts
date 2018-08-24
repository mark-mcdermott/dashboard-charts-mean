import { Component, OnInit, AfterContentInit, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartService } from '../../services/chart/chart.service';
import { Chart } from 'chart.js';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements AfterContentInit {

      @Input()
      chartName: string;

      dateArr: any;
      water: any;
      coffee: any;
      beer: any;
      chartData: any[];
      chartLabels: any;
      chart: any[] = [];
      canvas: any;
      canvasId: any;
      canvasWidth: any;
      canvasHeight: any;

      private  chartDataTable:  Array<object> = [];
      constructor(private chartService: ChartService) {}

      ngAfterContentInit() {

        // get chart data
        this.chartService.getChartData(this.chartName).pipe(map((data: any) => data))
          .subscribe((res) => {

            // get canvas element matching chartName
            let canvasArr = document.getElementsByTagName('canvas');
            for (var i=0; i<canvasArr.length; i++) {
              if (canvasArr[i].id == this.chartName) {
                this.canvas = canvasArr[i];
              }
            }

            // if no matching canvas element, then exit now
            if (!this.canvas) {
              return;
            }

            // init canvas size (all chart components use this - could probably refactor)
            let cardWidth = document.getElementById('firstCard').offsetWidth;
            this.canvasWidth = .9 * cardWidth;
            this.canvasHeight = .5 * this.canvasWidth;
            this.canvas.width = this.canvasWidth;
            this.canvas.height = this.canvasHeight;

            // get datetimes from dates
            this.chartDataTable = res;
            this.dateArr = this.chartDataTable.map(bp => {
              let dateObj = new Date(bp['date']);
              return dateObj
            });

            // put the data in chart-ready arrays
            this.water = this.chartDataTable.map(bp => bp['waters']);
            this.coffee = this.chartDataTable.map( bp => bp['coffees']);
            this.beer = this.chartDataTable.map( bp => bp['beers']);

            // create the chart
            this.chart = new Chart(this.canvas, {
              type: 'line',
              data: {
                  labels: this.dateArr,
                  datasets: [
                    {
                      fill: false,
                      borderColor: '#6585fd',
                      data: this.water,
                      label: 'water'
                    },
                    {
                      fill: false,
                      borderColor: '#8a5705',
                      data: this.coffee,
                      label: 'coffee'
                    },
                    {
                      fill: false,
                      borderColor: '#e3d156',
                      data: this.beer,
                      label: 'beer'
                    }
                  ]
              },
              options: {
                responsive: true,
                legend: {
                  display: true
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
