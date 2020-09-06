import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {PoolCreateFormComponent} from '../pool-create-form/pool-create-form.component';

@Component({
  selector: 'app-pool-create-bar',
  templateUrl: './pool-create-bar.component.html',
  styleUrls: ['./pool-create-bar.component.css']
})
export class PoolCreateBarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PoolCreateFormComponent, {
      width: '1500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
