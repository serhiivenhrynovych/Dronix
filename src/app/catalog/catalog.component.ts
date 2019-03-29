import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  isDronsActive = true;

  constructor() { }

  ngOnInit() {
  }

  dronsActive() {
    this.isDronsActive = true;
  }

  detailsActive() {
    this.isDronsActive = false;
  }

}
