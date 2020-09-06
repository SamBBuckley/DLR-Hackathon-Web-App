import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-pool-update-form',
  templateUrl: './pool-update-form.component.html',
  styleUrls: ['./pool-update-form.component.css']
})
export class PoolUpdateFormComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<PoolUpdateFormComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
    location.reload();
  }

}
