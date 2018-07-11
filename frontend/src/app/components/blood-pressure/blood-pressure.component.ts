import { Component, OnInit } from '@angular/core';
import { BloodPressureService } from '../../services/blood-pressure/blood-pressure.service';

@Component({
  selector: 'app-blood-pressure',
  templateUrl: './blood-pressure.component.html',
  styleUrls: ['./blood-pressure.component.css']
})

export  class  BloodPressureComponent  implements  OnInit {

  dataPromise : any;
  options : any;
  onSelect : any;
  dataMap : any;

  private  bloodPressures:  Array<object> = [];
  constructor(private bloodPressureService: BloodPressureService) {

    this.dataMap = {};
    let loadData = function(_data){
      return new Promise(function(resolve,reject){
        resolve(_data);
      });
    }

    let LINE_DATA = [
    ["Year", "Sales", "Expenses"],
    ["2004",  1000,      400],
    ["2005",  1170,      460],
    ["2006",  660,       1120],
    ["2007",  1030,      540]
    ];

    let LINE_OPTION = {
      title: 'Company Performance',
      curveType: 'function',
      legend: { position: 'bottom' },
      pointsVisible : true,
      animation:{
        duration: 1000,
        easing: 'out'
      }
    };

    this.dataMap['LINE_DATA'] =	loadData(LINE_DATA);
    this.dataMap['LINE_OPTIONS'] = LINE_OPTION;

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
