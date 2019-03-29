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
  sortedByName = false;
  sortedByPrice = false;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.dronForm = this.fb.group({
      dronControl: ['Всі бренди']
    });
    this.detailForm = this.fb.group({
      detailControl: ['Всі деталі']
    });

    this.dronsArr = [
      {name: 'Dron1', price: '68000', minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Dron2', price: '54000', minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Perer', price: '54000', minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Dron2', price: '54000', minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Dron3', price: '75000', minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Alala', price: '23000', minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Dron5', price: '34000', minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Dron6', price: '24000', minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG'},
    ];
  }

  dronsActive() {
    this.isDronsActive = true;
  }

  detailsActive() {
    this.isDronsActive = false;
  }

  sortByName() {
    if (this.sortedByName) {
      this.dronsArr.sort((a, b) => b.name.localeCompare(a.name));
      this.sortedByName = false;
    } else {
      this.dronsArr.sort((a, b) => a.name.localeCompare(b.name));
      this.sortedByName = true;
    }
  }

  sortByPrice() {
    if (this.sortedByPrice) {
      this.dronsArr.sort((a, b) => b.price.localeCompare(a.price));
      this.sortedByPrice = false;
    } else {
      this.dronsArr.sort((a, b) => a.price.localeCompare(b.price));
      this.sortedByPrice = true;
    }
  }

}

export interface Dron {
  name: string;
  price: string;
  minImg: string;
  fullImg: string;
}
