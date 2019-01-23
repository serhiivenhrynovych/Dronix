import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {

  imagesArr = [];

  constructor() { }

  ngOnInit() {
    this.imagesArr = [];
    this.imagesArr.push({source: 'assets/photo/img1min.jpg', title: 'Title 1'});
    this.imagesArr.push({source: 'assets/photo/img3min.jpg', title: 'Title 1'});
    this.imagesArr.push({source: 'assets/photo/img5min.jpg', title: 'Title 1'});
    this.imagesArr.push({source: 'assets/photo/img6min.jpg', title: 'Title 1'});
      }

}
