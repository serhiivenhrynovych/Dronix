import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-galery-demo',
  templateUrl: './galery-demo.component.html',
  styleUrls: ['./galery-demo.component.scss']
})
export class GaleryDemoComponent implements OnInit {

  image;
  index;

  constructor(public dialogRef: MatDialogRef<GaleryDemoComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.index = this.data.imageIndex;
    this.image = this.data.imagesArr[this.index];
  }

  nextImage() {
    if (this.index === this.data.imagesArr.length - 1) {
      this.index = 0;
    } else {
      this.index++;
    }
    this.image = this.data.imagesArr[this.index];
  }

  prevImage() {
    if (this.index === 0) {
      this.index = this.data.imagesArr.length - 1;
    } else {
      this.index--;
    }
    this.image = this.data.imagesArr[this.index];
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
