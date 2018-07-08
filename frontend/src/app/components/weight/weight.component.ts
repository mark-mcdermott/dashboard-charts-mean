import { Component, OnInit } from '@angular/core';
import { WeightService } from '../../services/weight/weight.service';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})

export  class  WeightComponent  implements  OnInit {
  private  weights:  Array<object> = [];
  constructor(private weightService: WeightService) { }
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
