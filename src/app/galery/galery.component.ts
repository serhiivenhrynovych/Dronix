import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {GaleryDemoComponent} from '../galery-demo/galery-demo.component';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {

  imagesArr = [];
  fullGalery = false;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.imagesArr = [];
    this.imagesArr.push({minImg: 'assets/photo/img5min.jpg', fullImg: 'assets/photo/img5.JPG', title: 'Title 3'});
    this.imagesArr.push({minImg: 'assets/photo/img12min.jpg', fullImg: 'assets/photo/img12.jpeg', title: 'Title 10'});
    this.imagesArr.push({minImg: 'assets/photo/img32min.jpg', fullImg: 'assets/photo/img32.jpeg', title: 'Title 30'});
    this.imagesArr.push({minImg: 'assets/photo/img10min.jpg', fullImg: 'assets/photo/img10.jpeg', title: 'Title 8'});
    this.imagesArr.push({minImg: 'assets/photo/img14min.jpg', fullImg: 'assets/photo/img14.jpeg', title: 'Title 12'});
    this.imagesArr.push({minImg: 'assets/photo/img20min.jpg', fullImg: 'assets/photo/img20.jpeg', title: 'Title 18'});
    this.imagesArr.push({minImg: 'assets/photo/img9min.jpg', fullImg: 'assets/photo/img9.jpeg', title: 'Title 7'});
    this.imagesArr.push({minImg: 'assets/photo/img11min.jpg', fullImg: 'assets/photo/img11.jpeg', title: 'Title 9'});
    this.imagesArr.push({minImg: 'assets/photo/img1min.jpg', fullImg: 'assets/photo/img1.JPG', title: 'Title 1'});
    this.imagesArr.push({minImg: 'assets/photo/img15min.jpg', fullImg: 'assets/photo/img15.jpeg', title: 'Title 13'});
    this.imagesArr.push({minImg: 'assets/photo/img17min.jpg', fullImg: 'assets/photo/img17.jpeg', title: 'Title 15'});
    this.imagesArr.push({minImg: 'assets/photo/img21min.jpg', fullImg: 'assets/photo/img21.jpeg', title: 'Title 19'});
    this.imagesArr.push({minImg: 'assets/photo/img22min.jpg', fullImg: 'assets/photo/img22.jpeg', title: 'Title 20'});
    this.imagesArr.push({minImg: 'assets/photo/img23min.jpg', fullImg: 'assets/photo/img23.jpeg', title: 'Title 21'});
    this.imagesArr.push({minImg: 'assets/photo/img3min.jpg', fullImg: 'assets/photo/img3.jpeg', title: 'Title 2'});
    this.imagesArr.push({minImg: 'assets/photo/img24min.jpg', fullImg: 'assets/photo/img24.jpeg', title: 'Title 22'});
    this.imagesArr.push({minImg: 'assets/photo/img25min.jpg', fullImg: 'assets/photo/img25.jpeg', title: 'Title 23'});
    this.imagesArr.push({minImg: 'assets/photo/img26min.jpg', fullImg: 'assets/photo/img26.jpeg', title: 'Title 24'});
    this.imagesArr.push({minImg: 'assets/photo/img27min.jpg', fullImg: 'assets/photo/img27.jpeg', title: 'Title 25'});
    this.imagesArr.push({minImg: 'assets/photo/img6min.jpg', fullImg: 'assets/photo/img6.JPG', title: 'Title 4'});
    this.imagesArr.push({minImg: 'assets/photo/img28min.jpg', fullImg: 'assets/photo/img28.jpeg', title: 'Title 26'});
    this.imagesArr.push({minImg: 'assets/photo/img29min.jpg', fullImg: 'assets/photo/img29.jpeg', title: 'Title 27'});
    this.imagesArr.push({minImg: 'assets/photo/img33min.jpg', fullImg: 'assets/photo/img33.jpeg', title: 'Title 31'});
    this.imagesArr.push({minImg: 'assets/photo/img34min.jpg', fullImg: 'assets/photo/img34.jpeg', title: 'Title 32'});
    this.imagesArr.push({minImg: 'assets/photo/img35min.jpg', fullImg: 'assets/photo/img35.jpeg', title: 'Title 33'});
    this.imagesArr.push({minImg: 'assets/photo/img7min.jpg', fullImg: 'assets/photo/img7.jpeg', title: 'Title 5'});
    this.imagesArr.push({minImg: 'assets/photo/img36min.jpg', fullImg: 'assets/photo/img36.jpeg', title: 'Title 34'});
    this.imagesArr.push({minImg: 'assets/photo/img37min.jpg', fullImg: 'assets/photo/img37.jpeg', title: 'Title 35'});
    this.imagesArr.push({minImg: 'assets/photo/img38min.jpg', fullImg: 'assets/photo/img38.jpeg', title: 'Title 36'});
    this.imagesArr.push({minImg: 'assets/photo/img39min.jpg', fullImg: 'assets/photo/img39.jpeg', title: 'Title 37'});

  }

  openInModal(image) {
    const dialogRef = this.dialog.open(GaleryDemoComponent, {
      maxHeight: '90vh',
      maxWidth: '90vw',
      data: {
        image: image
      }
    });
  }

}
