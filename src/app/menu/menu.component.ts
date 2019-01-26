import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  food = true;
  drink = false;

  constructor() { }

  ngOnInit() {
  }

  foodClick() {
    this.drink = false;
    this.food = true;
  }

  drinkClick() {
    this.food = false;
    this.drink = true;
  }

}
