import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  isDronsActive = true;
  dronForm: FormGroup;
  detailForm: FormGroup;
  brands = ['Всі бренди', 'Xiaomi', 'Maizu'];
  details = ['Всі деталі', 'Корпуси', 'Шлейфи', 'Лопасти'];
  dronsArr: Dron[];
  detailsArr: Detail[];
  contentToShow;
  sortedByName: boolean;
  sortedByPrice: boolean;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.dronForm = this.fb.group({
      dronControl: ['Всі бренди']
    });
    this.detailForm = this.fb.group({
      detailControl: ['Всі деталі']
    });

    this.dronsArr = [
      {name: 'Dron1', price: 68000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Dron2', price: 54000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Perer', price: 54000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Dron2', price: 54000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Dron3', price: 75000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Alala', price: 123000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Dron5', price: 34000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Dron6', price: 240000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG'},
    ];

    this.detailsArr = [
      {name: 'Detail1', price: 300, minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Detail2', price: 600, minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Detail3', price: 345, minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Detail4', price: 800, minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Detail5', price: 1200, minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Detail6', price: 540, minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Detail7', price: 330, minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG'},
    ];

    this.contentToShow = this.dronsArr;

  }

  dronsActive() {
    this.isDronsActive = true;
    this.contentToShow = this.dronsArr;
  }

  detailsActive() {
    this.isDronsActive = false;
    this.contentToShow = this.detailsArr;
    console.log(this.contentToShow);
  }

  sortByName() {
    if (this.sortedByName) {
      this.contentToShow.sort((a, b) => b.name.localeCompare(a.name));
      this.sortedByName = false;
    } else {
      this.contentToShow.sort((a, b) => a.name.localeCompare(b.name));
      this.sortedByPrice = null;
      this.sortedByName = true;
    }
  }

  sortByPrice() {
    if (this.sortedByPrice) {
      this.contentToShow.sort((a, b) => b.price - (a.price));
      this.sortedByPrice = false;
    } else {
      this.contentToShow.sort((a, b) => a.price - (b.price));
      this.sortedByName = null;
      this.sortedByPrice = true;
    }
  }

}

export interface Dron {
  name: string;
  price: number;
  minImg: string;
  fullImg: string;
}

export interface Detail {
  name: string;
  price: number;
  minImg: string;
  fullImg: string;
}
