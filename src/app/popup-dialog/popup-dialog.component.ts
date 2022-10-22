import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss']
})
export class PopupDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<PopupDialogComponent>,) {}

  ngOnInit(): void {
  }

}

@Component({
  selector: 'popup-dialog',
  templateUrl: 'popup-dialog.component.html',
})
export class DialogDataExampleDialog {
}