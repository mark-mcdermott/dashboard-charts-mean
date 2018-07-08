import { Component, OnInit } from '@angular/core';
import { HeartRateService } from '../../services/heart-rate/heart-rate.service';

@Component({
  selector: 'app-heart-rate',
  templateUrl: './heart-rate.component.html',
  styleUrls: ['./heart-rate.component.css']
})

export  class  HeartRateComponent  implements  OnInit {
  private  heartRates:  Array<object> = [];
  constructor(private heartRateService: HeartRateService) { }
  ngOnInit() {
    this.getHeartRates();
  }
  public getHeartRates(){
    this.heartRateService.getHeartRates().subscribe((data: Array<object>) => {
      // console.log(data);
      this.heartRates = data;
    });
  }
}
