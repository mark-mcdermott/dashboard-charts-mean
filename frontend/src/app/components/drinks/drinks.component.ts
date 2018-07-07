import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../../services/drinks/drinks.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})

export  class  DrinksComponent  implements  OnInit {
  private  drinks:  Array<object> = [];
  constructor(private drinksService: DrinksService) { }
  ngOnInit() {
    this.getDrinks();
  }
  public getDrinks(){
    this.drinksService.getDrinks().subscribe((data: Array<object>) => {
      console.log(data);
      this.drinks = data;
    });
  }
}
