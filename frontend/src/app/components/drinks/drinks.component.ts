import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DrinksService } from '../../services/drinks/drinks.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})

export  class  DrinksComponent  implements  OnInit {

  dataPromise : any;
  options : any;
  onSelect : any;
  dataMap : any;

  private  drinks:  Array<object> = [];
  constructor(private drinksService: DrinksService) {}
  ngOnInit() {
    this.getDrinks();

    // this.dataMap = {};
    // let loadData = function(_data){
    //   return new Promise(function(resolve,reject){
    //     resolve(_data);
    //   });
    // }
    //
    // let STACKED_COLUMN_DATA = [
    //
    //     ['drinks','waters','coffees','beers', {role: 'annotation'}],
    //     ['05/21/18', 3,	2, 0, ''],
    //     ['05/22/18', 2,	2, 0, ''],
    //     ['05/23/18', 5,	2, 0, ''],
    //     ['05/25/18', 3,	2, 0, ''],
    //     ['05/26/18', 3,	1, 0, ''],
    //     ['05/27/18', 2,	1, 2, ''],
    //     ['05/30/18', 3,	2, 0, ''],
    //     ['05/30/18', 4,	2, 0, ''],
    //     ['06/06/18', 3,	3, 0, ''],
    //     ['06/07/18', 2,	2, 0, ''],
    //     ['06/08/18', 5,	2, 2, ''],
    //     ['06/09/18', 2,	2, 0, ''],
    //     ['06/26/18', 2,	2, 0, ''],
    //     ['06/27/18', 2,	4, 0, ''],
    //     ['06/28/18', 3,	3, 1, '']
    //
    //   ];
    //
    // let STACKED_COLUMN_OPTIONS = {
    //   width: 600,
    //   height: 400,
    //   legend: { position: 'top'},
    //   bar: { groupWidth: '75%' },
    //   isStacked: true,
    //   };
    //
    // let STACKED_COLUMN_CONFIG = {
    // }
    //
    // this.dataMap['STACKED_COLUMN_DATA'] =  loadData(STACKED_COLUMN_DATA);
    // this.dataMap['STACKED_COLUMN_OPTIONS'] = STACKED_COLUMN_OPTIONS;
    // this.dataMap['STACKED_COLUMN_CONFIG'] = STACKED_COLUMN_CONFIG;

  }
  ngAfterViewInit() {

  }
  public getDrinks(){
    this.drinksService.getDrinks().subscribe((data: Array<object>) => {
      // console.log(data);
      this.drinks = data;
    });
  }
}
