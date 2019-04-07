import { Component, OnInit } from '@angular/core';
import {DetailViewModalComponent} from '../detail-view-modal/detail-view-modal.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-drones-catalog',
  templateUrl: './drones-catalog.component.html',
  styleUrls: ['./drones-catalog.component.scss']
})
export class DronesCatalogComponent implements OnInit {

  detailsArr = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.detailsArr = [
      {name: 'Detail1', price: 300, minImg: 'assets/photo/detail1.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Detail2', price: 600, minImg: 'assets/photo/detail2.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Detail3', price: 345, minImg: 'assets/photo/detail3.jpg', fullImg: 'assets/photo/img5.JPG'},
      {name: 'Detail4', price: 800, minImg: 'assets/photo/detail4.jpg', fullImg: 'assets/photo/img5.JPG'},
   ];
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
