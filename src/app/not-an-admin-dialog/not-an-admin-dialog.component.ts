import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-not-an-admin-dialog',
  templateUrl: './not-an-admin-dialog.component.html',
  styleUrls: ['./not-an-admin-dialog.component.scss'],
})
export class NotAnAdminDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<NotAnAdminDialogComponent>) {}

  ngOnInit(): void {}
}
@Component({
  selector: 'not-an-admin-dialog',
  templateUrl: 'not-an-admin-dialog.component.html',
})
export class DialogDataExampleDialog {}
