import { Component, OnInit } from '@angular/core';
import { BloodPressureService } from '../../services/blood-pressure/blood-pressure.service';

@Component({
  selector: 'app-blood-pressure',
  templateUrl: './blood-pressure.component.html',
  styleUrls: ['./blood-pressure.component.css']
})

export  class  BloodPressureComponent  implements  OnInit {
  private  bloodPressures:  Array<object> = [];
  constructor(private bloodPressureService: BloodPressureService) { }
  ngOnInit() {
    this.getBloodPressures();
  }
  public getBloodPressures(){
    this.bloodPressureService.getBloodPressures().subscribe((data: Array<object>) => {
      console.log(data);
      this.bloodPressures  =  data;
    });
  }
}
