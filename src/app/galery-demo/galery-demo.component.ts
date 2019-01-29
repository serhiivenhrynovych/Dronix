import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-galery-demo',
  templateUrl: './galery-demo.component.html',
  styleUrls: ['./galery-demo.component.scss']
})
export class GaleryDemoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

}
