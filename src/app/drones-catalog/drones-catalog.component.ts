import { Component, OnInit } from '@angular/core';
import {DetailViewModalComponent} from '../detail-view-modal/detail-view-modal.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-drones-catalog',
  templateUrl: './drones-catalog.component.html',
  styleUrls: ['./drones-catalog.component.scss']
})
export class DronesCatalogComponent implements OnInit {

  dronesArr = [];
  detailsArr = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.detailsArr = [
      {name: 'Detail1', price: 300, minImg: 'assets/photo/detail1.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Detail2', price: 600, minImg: 'assets/photo/detail2.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Detail3', price: 345, minImg: 'assets/photo/detail3.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Detail4', price: 800, minImg: 'assets/photo/detail4.jpg', fullImg: 'assets/photo/img5.JPG'},
   ];

    this.dronesArr = [
      {name: 'DJI Mavic PRO', price: 34000, minImg: 'assets/photo/dronMavicPro.jpg', fullImg: 'assets/photo/img5.JPG', charge: '20', controlLength: '3',
        speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12', details: this.detailsArr},
      {name: 'DJI Mavic 2 PRO/ZOOM', price: 34000, minImg: 'assets/photo/dronMavic2Pro.jpg', fullImg: 'assets/photo/img5.JPG', charge: '20', controlLength: '3',
        speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12', details: this.detailsArr},
      {name: 'DJI Mavic Air', price: 68000, minImg: 'assets/photo/dronMavicAir.jpg', fullImg: 'assets/photo/img5.JPG', charge: '20', controlLength: '2',
        speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12', details: this.detailsArr},
      {name: 'DJI Phantom 3', price: 9000, minImg: 'assets/photo/dronPhantom3.jpg', fullImg: 'assets/photo/img5.JPG', charge: '30', controlLength: '4',
        speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12', details: this.detailsArr},
      {name: 'DJI Phantom 4', price: 80000, minImg: 'assets/photo/dronPhantom4.jpg', fullImg: 'assets/photo/img5.JPG', charge: '40', controlLength: '1',
        speed: '60', sensorLength: '30', stabilizer: '2', pixels: '12', details: this.detailsArr},
      {name: 'XIAOMI MI DRONE 4K', price: 34000, minImg: 'assets/photo/dronXiaomiMi.jpg', fullImg: 'assets/photo/img5.JPG', charge: '20', controlLength: '3',
        speed: '50', sensorLength: '30', stabilizer: '2', pixels: '12', details: this.detailsArr},
    ];
  }

  openViewDetailModal(element) {
    const dialogRef = this.dialog.open(DetailViewModalComponent, {
      width: '80vw',
      data: {
        element: element
      }
    });
  }

}
