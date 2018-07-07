import { Component, OnInit } from '@angular/core';
import { BloodpressureService } from '../../services/bloodpressure/bloodpressure.service';

@Component({
  selector: 'app-bloodpressure',
  templateUrl: './bloodpressure.component.html',
  styleUrls: ['./bloodpressure.component.css']
})

export  class  BloodpressureComponent  implements  OnInit {
  private  bloodpressure:  Array<object> = [];
  constructor(private bloodpressureService: BloodpressureService) { }
  ngOnInit() {
    this.getBloodpressures();
  }
  public getBloodpressures(){
    this.bloodpressureService.getBloodpressures().subscribe((data: Array<object>) => {
      console.log(data);
      this.bloodpressure  =  data;
    });
  }
}
