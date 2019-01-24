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
    this.imagesArr.push({minImg: 'assets/photo/img1min.jpg', fullImg: 'assets/photo/img1.JPG', title: 'Title 1'});
    this.imagesArr.push({minImg: 'assets/photo/img3min.jpg', fullImg: 'assets/photo/img3.jpeg', title: 'Title 2'});
    this.imagesArr.push({minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG', title: 'Title 3'});
    this.imagesArr.push({minImg: 'assets/photo/img6min.jpg', fullImg: 'assets/photo/img6.JPG', title: 'Title 4'});

    this.imagesArr.push({minImg: 'assets/photo/img1min.jpg', fullImg: 'assets/photo/img1.JPG', title: 'Title 1'});
    this.imagesArr.push({minImg: 'assets/photo/img3min.jpg', fullImg: 'assets/photo/img3.jpeg', title: 'Title 2'});
    this.imagesArr.push({minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG', title: 'Title 3'});
    this.imagesArr.push({minImg: 'assets/photo/img6min.jpg', fullImg: 'assets/photo/img6.JPG', title: 'Title 4'});
    this.imagesArr.push({minImg: 'assets/photo/img1min.jpg', fullImg: 'assets/photo/img1.JPG', title: 'Title 1'});
    this.imagesArr.push({minImg: 'assets/photo/img3min.jpg', fullImg: 'assets/photo/img3.jpeg', title: 'Title 2'});
    this.imagesArr.push({minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG', title: 'Title 3'});
    this.imagesArr.push({minImg: 'assets/photo/img6min.jpg', fullImg: 'assets/photo/img6.JPG', title: 'Title 4'});

  }

}
