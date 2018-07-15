import { Component, OnInit } from '@angular/core';
import { BloodPressureService } from '../../services/blood-pressure/blood-pressure.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from '../../data';

@Component({
  selector: 'app-blood-pressure',
  templateUrl: './blood-pressure.component.html',
  styleUrls: ['./blood-pressure.component.css']
})

export  class  BloodPressureComponent  implements  OnInit {

  // dataPromise : any;
  // options : any;
  // onSelect : any;
  // dataMap : any;


  multi: any[];
  //
  view: any[] = [700, 400];
  //
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  //
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  //
  // constructor() {
  //   Object.assign(this, { single })
  // }
  //
  // onSelect(event) {
  //   console.log(event);
  // }

  private  bloodPressures:  Array<object> = [];
  constructor(private bloodPressureService: BloodPressureService) {

      Object.assign(this, { single })

    // this.dataMap = {};
    // let loadData = function(_data){
    //   return new Promise(function(resolve,reject){
    //     resolve(_data);
    //   });
    // }

    // let CANDLE_DATA = [
    //     ['7/26/17', 70, 70, 110, 110],
    //     ['8/24/17', 78, 78, 112, 112],
    //     ['11/1/17', 66, 66, 111, 111],
    //     ['12/21/17', 80, 80, 126, 126],
    //     ['3/13/18', 69, 69, 103, 103],
    //     ['3/16/18', 73, 73, 124, 124],
    //     ['4/18/18', 86, 86, 130, 130],
    //     ['5/20/18', 67, 67, 129, 129],
    //     ['5/22/18', 70, 70, 106, 106]
    //   ];
    //
    // let CANDLE_OPTIONS = {
    //     legend:'none',
    //     candlestick: {
    //       fallingColor: { strokeWidth: 0, fill: '#e74c3c' },
    //       risingColor: { strokeWidth: 0, fill: '#e74c3c' }
    //     },
    //     hAxis: {
    //       textStyle: {
    //         color: '#666666'
    //       }
    //     },
    //     vAxis: {
    //       textStyle: {
    //         color: '#666666'
    //       }
    //     },
    //     width: ' 700'
    //   };
    //
    // let CANDLE_CONFIG = {
    //   firstRowAsData : true
    // }
    //
    // this.dataMap['CANDLE_DATA'] =  loadData(CANDLE_DATA);
    // this.dataMap['CANDLE_OPTIONS'] = CANDLE_OPTIONS;
    // this.dataMap['CANDLE_CONFIG'] = CANDLE_CONFIG;

  }
  onSelect(event) {
    console.log(event);
  }
  ngOnInit() {
    this.getBloodPressures();
  }
  public getBloodPressures(){
    this.bloodPressureService.getBloodPressures().subscribe((data: Array<object>) => {
      // console.log(data);
      this.bloodPressures = data;
    });
  }
}
