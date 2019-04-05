import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dron-view-modal',
  templateUrl: './dron-view-modal.component.html',
  styleUrls: ['./dron-view-modal.component.scss']
})
export class DronViewModalComponent implements OnInit {

  element: any;

  constructor(private dialogRef: MatDialogRef<DronViewModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.element = this.data.element;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
