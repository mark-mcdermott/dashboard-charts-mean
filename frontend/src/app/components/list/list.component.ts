import { Component, OnInit } from '@angular/core';
// import { IssueService } from '../../services/issue/issue.service';
import { BloodpressureService } from '../../services/bloodpressure/bloodpressure.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export  class  ListComponent  implements  OnInit {
  private  bloodpressures:  Array<object> = [];
  constructor(private bloodpressureService: BloodpressureService) { }
  ngOnInit() {
      this.getBloodpressures();
  }
  public getBloodpressures(){
      this.bloodpressureService.getBloodpressures().subscribe((data: Array<object>) => {
          this.bloodpressures  =  data;
      });
  }
}
