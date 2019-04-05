import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-detail-view-modal',
  templateUrl: './detail-view-modal.component.html',
  styleUrls: ['./detail-view-modal.component.scss']
})
export class DetailViewModalComponent implements OnInit {

  element: any;

  constructor(private dialogRef: MatDialogRef<DetailViewModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.element = this.data.element;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
