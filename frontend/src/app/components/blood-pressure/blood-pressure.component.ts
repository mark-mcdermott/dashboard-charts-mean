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


  // multi: any[];
  // //
  // view: any[] = [700, 400];
  // //
  // // options
  // showXAxis = true;
  // showYAxis = true;
  // gradient = false;
  // showLegend = true;
  // showXAxisLabel = true;
  // xAxisLabel = 'Country';
  // showYAxisLabel = true;
  // yAxisLabel = 'Population';
  // //
  // colorScheme = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };
  //
  // constructor() {
  //   Object.assign(this, { single })
  // }
  //
  // onSelect(event) {
  //   console.log(event);
  // }

  dateArr: any;
  topArr: any;
  bottomArr: any;
  // options : any;
  // onSelect : any;
  // dataMap : any;

  private  bloodPressureTable:  Array<object> = [];
  constructor(private bloodPressureService: BloodPressureService) {

      // this.getBloodPressures()

  }
  onSelect(event) {
    console.log(event);
  }
  ngOnInit() {
    this.getBloodPressures();
    //console.log(this.bloodPressures);
    // for (let row in this.getBloodPressures) {
    //   console.log(row)
    //   // console.log(row.top)
    //   // console.log(row.bottom)
    //   // this.dates.push(row.date);
    // }
  }
  public getBloodPressures(){
    this.bloodPressureService.getBloodPressures().subscribe((data: Array<object>) => {
      this.bloodPressureTable = data;
      this.dateArr = this.bloodPressureTable.map(bp => bp['date']);
      this.topArr = this.bloodPressureTable.map(bp => bp['top']);
      this.bottomArr = this.bloodPressureTable.map(bp => bp['bottom']);
    });

    // this.bloodPressureService.getBloodPressures()
    //     .then(bloodPressures => {
    //    this.bloodPressures = bloodPressures;
    //    console.log('this.users=' + this.bloodPressures);
    // });
    //
    // });
  }
}
