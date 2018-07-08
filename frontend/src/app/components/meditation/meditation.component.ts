import { Component, OnInit } from '@angular/core';
import { MeditationService } from '../../services/meditation/meditation.service';

@Component({
  selector: 'app-meditation',
  templateUrl: './meditation.component.html',
  styleUrls: ['./meditation.component.css']
})

export  class  MeditationComponent  implements  OnInit {
  private  meditations:  Array<object> = [];
  constructor(private meditationService: MeditationService) { }
  ngOnInit() {
    this.getMeditations();
  }
  public getMeditations(){
    this.meditationService.getMeditations().subscribe((data: Array<object>) => {
      // console.log(data);
      this.meditations = data;
    });
  }
}
