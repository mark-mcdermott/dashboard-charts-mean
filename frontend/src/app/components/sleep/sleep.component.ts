import { Component, OnInit } from '@angular/core';
import { SleepService } from '../../services/sleep/sleep.service';

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.css']
})

export  class  SleepComponent  implements  OnInit {
  private  sleeps:  Array<object> = [];
  constructor(private sleepService: SleepService) { }
  ngOnInit() {
    this.getSleeps();
  }
  public getSleeps(){
    this.sleepService.getSleeps().subscribe((data: Array<object>) => {
      // console.log(data);
      this.sleeps = data;
    });
  }
}
