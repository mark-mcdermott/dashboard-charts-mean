import { Component, OnInit } from '@angular/core';
import { BloodpressureService } from '../../services/bloodpressure/bloodpressure.service';

@Component({
  selector: 'app-blood-pressure',
  templateUrl: './blood-pressure.component.html',
  styleUrls: ['./blood-pressure.component.css']
})

export  class  BloodPressureComponent  implements  OnInit {
  private  bloodPressures:  Array<object> = [];
  constructor(private bloodpressureService: BloodpressureService) { }
  ngOnInit() {
    this.getBloodpressures();
  }
  public getBloodpressures(){
    this.bloodpressureService.getBloodpressures().subscribe((data: Array<object>) => {
      console.log(data);
      this.bloodPressures  =  data;
    });
  }
}
