import { Component, OnInit } from '@angular/core';
import { WeightService } from '../../services/weight/weight.service';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})

export  class  WeightComponent  implements  OnInit {

  dataPromise : any;
  options : any;
  onSelect : any;
  dataMap : any;

  private  weights:  Array<object> = [];
  constructor(private weightService: WeightService) {

    this.dataMap = {};
    let loadData = function(_data){
      return new Promise(function(resolve,reject){
        resolve(_data);
      });
    }

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
  ngOnInit() {
    this.getWeights();
  }
  public getWeights(){
    this.weightService.getWeights().subscribe((data: Array<object>) => {
      // console.log(data);
      this.weights = data;
    });
  }
}
