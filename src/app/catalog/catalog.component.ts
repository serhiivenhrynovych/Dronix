import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DronViewModalComponent} from '../dron-view-modal/dron-view-modal.component';
import {MatDialog} from '@angular/material';
import {DetailViewModalComponent} from '../detail-view-modal/detail-view-modal.component';

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
  fullCatalog = false;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.dronForm = this.fb.group({
      dronControl: ['Всі бренди']
    });
    this.detailForm = this.fb.group({
      detailControl: ['Всі деталі']
    });

    this.dronsArr = [
      {name: 'Dron1', price: 68000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG', charge: '20', controlLength: '2',
        speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12'},
      {name: 'Dron2', price: 9000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG', charge: '30', controlLength: '4',
        speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12'},
      {name: 'Dron3', price: 80000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG', charge: '40', controlLength: '1',
        speed: '60', sensorLength: '30', stabilizer: '2', pixels: '12'},
      {name: 'Dron6', price: 34000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG', charge: '20', controlLength: '3',
        speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12'},
      {name: 'Dron9', price: 35000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG', charge: '10', controlLength: '2',
        speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12'},
      {name: 'Drona', price: 87000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG', charge: '40', controlLength: '3',
        speed: '70', sensorLength: '30', stabilizer: '2', pixels: '12'},
      {name: 'Dronb', price: 45000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG', charge: '20', controlLength: '5',
        speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12'},
      {name: 'Dronj', price: 56000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG', charge: '50', controlLength: '2',
        speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12'},
      {name: 'Dron6', price: 43000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG', charge: '20', controlLength: '7',
        speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12'},
      {name: 'Dron6', price: 23000, minImg: 'assets/photo/img4min.jpg', fullImg: 'assets/photo/img5.JPG', charge: '60', controlLength: '2',
        speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12'},
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

  openViewDroneModal(element) {
    const dialogRef = this.dialog.open(DronViewModalComponent, {
      data: {
        element: element
      }
    });
  }

  openViewDetailModal(element) {
    const dialogRef = this.dialog.open(DetailViewModalComponent, {
      width: '50vw',
      data: {
        element: element
      }
    });
  }

}

export interface Dron {
  name: string;
  price: number;
  minImg: string;
  fullImg: string;
  charge: string;
  controlLength: string;
  speed: string;
  sensorLength: string;
  stabilizer: string;
  pixels: string;
}

export interface Detail {
  name: string;
  price: number;
  minImg: string;
  fullImg: string;
}
